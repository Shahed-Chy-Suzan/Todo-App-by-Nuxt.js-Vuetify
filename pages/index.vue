<template>
  <v-data-table
    :headers="headers"
    :items="todos"
    sort-by="id"
    class="elevation-1"
    :key="key"
  >                                      <!--1-:items="todos"/3-->  <!--8-:key for reload-->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Nuxt-ToDo App</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!--1--script-->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Task Name"
                    ></v-text-field>                          <!--2-v-model+label>>3-->
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.id"
                      label="Id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.day"
                      label="Day"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.time"
                      label="Time"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>      <!--7-->
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>                <!--8-->
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'               // --6--

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [                                   // --4--
      {
        text: 'Task Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Id', value: 'id' },
      { text: 'Day', value: 'day' },
      { text: 'Time', value: 'time' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {                               // --3--
      name: '',
      id: null,
      day: null,
      time: null,
    },
    defaultItem: {
      name: '',
      id: null,
      day: null,
      time: null,
    },
    key: 0                              // --8.1--
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    ...mapGetters({                               // --6.1>>getters--
      todos: 'todo/getTodos',
    }),
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {},

    editItem(item) {                                        // --7.1--
      this.editedIndex = this.todos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {                                      // --8.1--
      this.editedIndex = this.todos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {                                         // --8.2 >>actions
      // this.todos.splice(this.editedIndex, 1)
      this.$store.dispatch('todo/deleteTodo', this.editedIndex)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {                         // --7.2>>mutations(actions)
        const todo = {
          index: this.editedIndex,
          data: this.editedItem
        }
        this.$store.commit('todo/setTodosUpdate', todo)
        this.key++                                                  // --8.2--
      } else {
        // this.desserts.push(this.editedItem)                        // --insert data--
        this.$store.dispatch('todo/saveTodo', this.editedItem)        // --5>>actions--
      }
      this.close()
    },
  },
}
</script>

<template>
  <v-data-table :headers="headers" :items="servers" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Serveurs</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="isEditModalOpen" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Ajouter un serveur
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nom du Serveur"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.ip_address"
                      label="Addresse Ip"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.port"
                      label="Port du Serveur"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6">
              Voulez vous vraiment supprimer ce serveur ?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">
                Non
              </v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">
                Oui
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <div v-if="item.isEditable">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </div>
      <div v-else>
        <span class="text--disabled">Non éditable</span>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "ServerList",
  data: () => ({
    isEditModalOpen: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nom du serveur",
        align: "center",
        sortable: false,
        value: "name"
      },
      { text: "Addresse IP", align: "center", value: "ip_address" },
      { text: "Port", align: "center", value: "port" },
      { text: "Actions", align: "center", value: "actions", sortable: false }
    ],
    servers: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      ip_address: "",
      port: "",
      isEditable: true
    },
    defaultItem: {
      name: "",
      ip_address: "",
      port: "",
      isEditable: true
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nouveau serveur"
        : "Modifier le serveur";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.servers = [
        {
          name: "Mixmaster FR",
          ip_address: "1.2.3.4",
          port: "8080",
          isEditable: false
        }
      ];
    },
    editItem(item) {
      this.editedIndex = this.servers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.isEditModalOpen = true;
    },

    deleteItem(item) {
      this.editedIndex = this.servers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.servers.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.isEditModalOpen = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.servers[this.editedIndex], this.editedItem);
      } else {
        this.servers.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

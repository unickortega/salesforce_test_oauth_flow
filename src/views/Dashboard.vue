<template>
    <div class="container m-5">
        <div class="row">
            <div class="col-md-12">
                <b-container fluid>
                    <!-- User Interface controls -->
                    <!-- <b-row>
                        <b-col md="6" class="my-1">
                            <b-form-group horizontal label="Filter" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="filter" placeholder="Type to Search" />
                                    <b-input-group-append>
                                        <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" class="my-1">
                            <b-form-group horizontal label="Sort" class="mb-0">
                                <b-input-group>
                                    <b-form-select v-model="sortBy" :options="sortOptions">
                                        <option slot="first" :value="null">-- none --</option>
                                    </b-form-select>
                                    <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                                        <option :value="false">Asc</option>
                                        <option :value="true">Desc</option>
                                    </b-form-select>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" class="my-1">
                            <b-form-group horizontal label="Sort direction" class="mb-0">
                                <b-input-group>
                                    <b-form-select v-model="sortDirection" slot="append">
                                        <option value="asc">Asc</option>
                                        <option value="desc">Desc</option>
                                        <option value="last">Last</option>
                                    </b-form-select>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" class="my-1">
                            <b-form-group horizontal label="Per page" class="mb-0">
                                <b-form-select :options="pageOptions" v-model="perPage" />
                            </b-form-group>
                        </b-col>
                    </b-row> -->

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h5">Customer/ Project</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">Start time</button>
                                <button class="btn btn-sm btn-outline-secondary">8:30</button>
                            </div>

                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">End time</button>
                                <button class="btn btn-sm btn-outline-secondary">17:30</button>
                            </div>

                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">Break time</button>
                                <button class="btn btn-sm btn-outline-secondary">12:00 - 13:00</button>
                            </div>

                            <!-- <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button> -->
                        </div>
                    </div>

                    <!-- Main table element -->
                    <b-table show-empty stacked="md" :items="items" :fields="fields" :current-page="currentPage"
                        :per-page="perPage" :filter="filter" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection" @filtered="onFiltered">
                        <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
                        <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
                        <template slot="actions" slot-scope="row">
                            <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                            <!-- <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                                Inqqasdfo modal
                            </b-button> -->

                            <font-awesome-icon @click.stop="info(row.item, row.index, $event.target)" class="mr-1"
                                :icon="['fa', 'coffee']" />
                            <!-- <font-awesome-icon :icon="['fa', 'coffee']" /> -->

                            <!-- <b-button size="sm" :icon="['fas', 'spinner']" />:icon="['fas', 'spinner']" />@click.stop="row.toggleDetails">
                                {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                            </b-button> -->
                        </template>
                        <template slot="row-details" slot-scope="row">
                            <b-card>
                                <ul>
                                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
                                </ul>
                            </b-card>
                        </template>
                    </b-table>

                    <b-row>
                        <b-col md="6" class="my-1">
                            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                        </b-col>
                    </b-row>

                    <!-- Info modal -->
                    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
                        <pre>{{ modalInfo.content }}</pre>
                    </b-modal>

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h4" style="visibility:hidden;">Customer/ Project</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">

                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-primary">Create working report</button>
                            </div>

                            <!-- <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button> -->
                        </div>
                    </div>


                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
    const items = [{
            isActive: true,
            age: 40,
            name: {
                first: 'Dickerson',
                last: 'Macdonald'
            }
        },
        {
            isActive: false,
            age: 21,
            name: {
                first: 'Larsen',
                last: 'Shaw'
            }
        },
        {
            isActive: false,
            age: 9,
            name: {
                first: 'Mini',
                last: 'Navarro'
            },
            _rowVariant: 'success'
        },
        {
            isActive: false,
            age: 89,
            name: {
                first: 'Geneva',
                last: 'Wilson'
            }
        },
        {
            isActive: true,
            age: 38,
            name: {
                first: 'Jami',
                last: 'Carney'
            }
        },
        {
            isActive: false,
            age: 27,
            name: {
                first: 'Essie',
                last: 'Dunlap'
            }
        },
        {
            isActive: true,
            age: 40,
            name: {
                first: 'Thor',
                last: 'Macdonald'
            }
        },
        {
            isActive: true,
            age: 87,
            name: {
                first: 'Larsen',
                last: 'Shaw'
            },
            _cellVariants: {
                age: 'danger',
                isActive: 'warning'
            }
        },
        {
            isActive: false,
            age: 26,
            name: {
                first: 'Mitzi',
                last: 'Navarro'
            }
        },
        {
            isActive: false,
            age: 22,
            name: {
                first: 'Genevieve',
                last: 'Wilson'
            }
        },
        {
            isActive: true,
            age: 38,
            name: {
                first: 'John',
                last: 'Carney'
            }
        },
        {
            isActive: false,
            age: 29,
            name: {
                first: 'Dick',
                last: 'Dunlap'
            }
        }
    ]

    export default {
        name: 'dashboard',
        data() {
            return {
                items: items,
                fields: [{
                        key: 'name',
                        label: 'Date',
                        sortable: true,
                        sortDirection: 'desc'
                    },
                    {
                        key: 'age',
                        label: 'Start time',
                        sortable: true,
                        'class': 'text-center'
                    },
                    {
                        key: 'isActive',
                        label: 'is Active'
                    },
                    {
                        key: 'actions',
                        label: 'Actions'
                    }
                ],
                currentPage: 1,
                perPage: 5,
                totalRows: items.length,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                modalInfo: {
                    title: '',
                    content: ''
                }
            }
        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {
                            text: f.label,
                            value: f.key
                        }
                    })
            }
        },
        methods: {
            info(item, index, button) {
                this.modalInfo.title = `Row index: ${index}`
                this.modalInfo.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', 'modalInfo', button)
            },
            resetModal() {
                this.modalInfo.title = ''
                this.modalInfo.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }
</script>

<!-- table-complete-1.vue -->
Ext.define('HclExtLib.view.sgrid', {
    extend: 'Ext.grid.Panel',
	requires:['HclExtLib.view.ux.ComponentColumn'],
    xtype: 'sgrid',
    store: {
                    fields: ['sex', 'name', 'status', 'datejoined','enabled'],

                    data: [
                        {sex: 'male', name: 'Vishal', status: 'Available', datejoined:'01/01/2014', enabled: true},
                         {sex: 'male', name: 'Santosh', status: 'Available',datejoined:'01/10/2014', enabled: true},
						 {sex: 'male', name: 'Suresh', status: 'Busy', datejoined:'01/10/2014',enabled: false},
						 {sex: 'male', name: 'Harry', status: 'Busy', datejoined:'01/13/2014',enabled: true},
						 {sex: 'male', name: 'Octo', status: 'Offline', datejoined:'01/05/2014',enabled: true},
							
                    ]
                },
    columnLines: true,
    height: 350,
    title: 'Simple Grid With Component Columns',
    viewConfig: {
        stripeRows: true
    },
	selType: 'cellmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],
    initComponent: function () {
        this.width = 675;
        this.columns =  [
                    {
						text     : 'Name',
                        dataIndex: 'name',
                        xtype: 'componentcolumn',
                        renderer: function(name, meta, record) {

                            return {
                                value: name,
                                xtype: 'textfield',

                                listeners: {
                                    inputEl: {
                                        keydown: function(ev) {
                                            // Prevent the event propagating as far as the grid, otherwise
                                            // navigation keys won't function correctly in the textfield
                                            ev.stopPropagation();
                                        }
                                    }
                                }
                            };
                        },
						editor: {
								xtype: 'textfield',
								allowBlank: false
							}
                    }, {
						text     : 'Status',
                        dataIndex: 'status',
                        xtype: 'componentcolumn',
                        renderer: function(status) {
                            return {
                                store: ['Available', 'Away', 'Busy', 'Offline'],
                                value: status,
                                xtype: 'combobox'
                            };
                        },
						editor: {
								xtype: 'combobox',
								store: ['Available', 'Away', 'Busy', 'Offline'],
								allowBlank: false
							}
                    }, 
					{
						text:'Date Joined',
                        dataIndex: 'datejoined',
                        xtype: 'componentcolumn',
                        renderer: function(datejoined) {
                            return {
                                value: datejoined,
                                xtype: 'datefield'
                            };
                        },
						editor: {
								xtype: 'datefield',
								allowBlank: false
							}
                    },{
                        dataIndex: 'enabled',
                        xtype: 'componentcolumn',
                        renderer: function(enabled) {
                            return {
                                checked: enabled,
                                xtype: 'checkbox'
                            };
                        },
						editor: {
								xtype: 'checkbox',
								allowBlank: false
							}
                    }
                ];

        this.callParent();
    }
});
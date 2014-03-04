Ext.define('HclExtLib.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
		'HclExtLib.view.CustomPagerBarGrid',
        'HclExtLib.view.SimpleEditableGrid'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            xtype:'custom-pager-grid',
			config:{
					pagesperview:3,   ////Config
					store: 'HclExtLib.store.Companies',
					columnsconfig:	[{
							text     : 'Company',
							flex     : 1,
							sortable : false,
							dataIndex: 'company'
						}, {
							text: 'Stock Price',
							columns: [{
								text     : 'Price',
								width    : 75,
								sortable : true,
								renderer : 'usMoney',
								dataIndex: 'price'
							}, {
								text     : 'Change',
								width    : 80,
								sortable : true,
								renderer :  function(val) {
									if (val > 0) {
										return '<span style="color:green;">' + val + '</span>';
									} else if (val < 0) {
										return '<span style="color:red;">' + val + '</span>';
									}
									return val;
								},
								dataIndex: 'change'
							}, {
								text     : '% Change',
								width    : 100,
								sortable : true,
								renderer : function(val) {
									if (val > 0) {
										return '<span style="color:green;">' + val + '</span>';
									} else if (val < 0) {
										return '<span style="color:red;">' + val + '</span>';
									}
									return val;
								},
								dataIndex: 'pctChange'
							}]
						}, {
							text     : 'Last Updated',
							width    : 115,
							sortable : true,
							renderer : Ext.util.Format.dateRenderer('m/d/Y'),
							dataIndex: 'lastChange'
						}]
				},
            title: 'Grid with Custom Paging Bar'
        },
		{
            xtype:'simple-editable-grid',
            title: 'Simple Grid with component columns ',
            config:{
        		store: {
                    fields: ['sex', 'name', 'status',{name: 'datejoined',type:'date'},'enabled'],

                    data: [
                        {sex: 'male',  name: 'Vishal', status: 'Available', datejoined:'01/01/2014', enabled: true},
                         {sex: 'male', name: 'Santosh', status: 'Available',datejoined:'01/10/2014', enabled: true},
        				 {sex: 'male', name: 'Suresh', status: 'Busy', datejoined:'01/10/2014',enabled: false},
        				 {sex: 'male', name: 'Harry', status: 'Busy', datejoined:'01/13/2014',enabled: true},
        				 {sex: 'male', name: 'Octo', status: 'Offline', datejoined:'01/05/2014',enabled: true}
        					
                    ]
                },
        		columnsconfig:	[	{
										columnconfig:{
											 width:20
										},
					                        xtype: 'image',
					                        imagesrc:'resources/img/delete.png',
					                        tooltip:'Delete'
					                },
        		                    {
        								columnconfig:{
        									text     : 'Name',
        									dataIndex: 'name',
        								},
        		                            xtype: 'textfield',
        		                        	disabled:false,
        				                    allowBlank: false
        		                    }, {
        		                    	columnconfig:{
        		                    		text     : 'Status',
        			                        dataIndex: 'status',
        			                        width:150
        								},
        		                        store: ['Available', 'Away', 'Busy', 'Offline'],
        		                        forceSelection: true,
        		                        xtype: 'combobox',
        		                        allowBlank: false		                        
        		                    }, 
        							{
        		                    	columnconfig:{
        		                    		text:'Date Joined',
        			                        dataIndex: 'datejoined',
        			                        width:200
        								},
        		                        xtype: 'datefield',
        		                        allowBlank: false		                      
        		                    },{
        		                    	columnconfig:{
        			                        dataIndex: 'enabled',
        			                        width:25
        								},
        		                        xtype: 'checkbox',
        		                        allowBlank: false		                       
        		                    }
        		                ]
        	},
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [
                    { 
                    	xtype: 'button', 
                    	text: 'Save' ,
                    	handler: function (button){
                    	console.log('Modified Records: '+button.up('simple-editable-grid').getModifiedRecords());
                    }}
                ]
            }]
        }
		]
    }]
});
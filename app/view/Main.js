Ext.define('HclExtLib.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
		'HclExtLib.view.CustomPagerBarGrid',
        'HclExtLib.view.sgrid'
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
            xtype:'sgrid',
            title: 'Simple Grid with component columns '
        }
		]
    }]
});
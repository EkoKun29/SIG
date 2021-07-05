var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Data_0 = new ol.format.GeoJSON();
var features_Data_0 = format_Data_0.readFeatures(json_Data_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_0.addFeatures(features_Data_0);var lyr_Data_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_0, 
                style: style_Data_0,
    title: 'Data<br />\
    <img src="styles/legend/Data_0_0.png" /> Batangan<br />\
    <img src="styles/legend/Data_0_1.png" /> Cluwak<br />\
    <img src="styles/legend/Data_0_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/Data_0_3.png" /> Gabus<br />\
    <img src="styles/legend/Data_0_4.png" /> Gembong<br />\
    <img src="styles/legend/Data_0_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/Data_0_6.png" /> Jaken<br />\
    <img src="styles/legend/Data_0_7.png" /> Jakenan<br />\
    <img src="styles/legend/Data_0_8.png" /> Juwana<br />\
    <img src="styles/legend/Data_0_9.png" /> Kayen<br />\
    <img src="styles/legend/Data_0_10.png" /> Margorejo<br />\
    <img src="styles/legend/Data_0_11.png" /> Margoyoso<br />\
    <img src="styles/legend/Data_0_12.png" /> Pati<br />\
    <img src="styles/legend/Data_0_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/Data_0_14.png" /> Sukolilo<br />\
    <img src="styles/legend/Data_0_15.png" /> Tambakromo<br />\
    <img src="styles/legend/Data_0_16.png" /> Tayu<br />\
    <img src="styles/legend/Data_0_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/Data_0_18.png" /> Trangkil<br />\
    <img src="styles/legend/Data_0_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/Data_0_20.png" /> Winong<br />'
        });var format_JumlahBalita_1 = new ol.format.GeoJSON();
var features_JumlahBalita_1 = format_JumlahBalita_1.readFeatures(json_JumlahBalita_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahBalita_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahBalita_1.addFeatures(features_JumlahBalita_1);var lyr_JumlahBalita_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahBalita_1, 
                style: style_JumlahBalita_1,
    title: 'Jumlah Balita<br />\
    <img src="styles/legend/JumlahBalita_1_0.png" /> <br />\
    <img src="styles/legend/JumlahBalita_1_1.png" /> 1<br />\
    <img src="styles/legend/JumlahBalita_1_2.png" /> 2<br />\
    <img src="styles/legend/JumlahBalita_1_3.png" /> 3<br />\
    <img src="styles/legend/JumlahBalita_1_4.png" /> 4<br />\
    <img src="styles/legend/JumlahBalita_1_5.png" /> 5<br />\
    <img src="styles/legend/JumlahBalita_1_6.png" /> 6<br />\
    <img src="styles/legend/JumlahBalita_1_7.png" /> 7<br />\
    <img src="styles/legend/JumlahBalita_1_8.png" /> 8<br />\
    <img src="styles/legend/JumlahBalita_1_9.png" /> 9<br />\
    <img src="styles/legend/JumlahBalita_1_10.png" /> 10<br />\
    <img src="styles/legend/JumlahBalita_1_11.png" /> 11<br />\
    <img src="styles/legend/JumlahBalita_1_12.png" /> 12<br />\
    <img src="styles/legend/JumlahBalita_1_13.png" /> 13<br />\
    <img src="styles/legend/JumlahBalita_1_14.png" /> 14<br />\
    <img src="styles/legend/JumlahBalita_1_15.png" /> 15<br />\
    <img src="styles/legend/JumlahBalita_1_16.png" /> 16<br />\
    <img src="styles/legend/JumlahBalita_1_17.png" /> 17<br />\
    <img src="styles/legend/JumlahBalita_1_18.png" /> 18<br />\
    <img src="styles/legend/JumlahBalita_1_19.png" /> 19<br />\
    <img src="styles/legend/JumlahBalita_1_20.png" /> 20<br />\
    <img src="styles/legend/JumlahBalita_1_21.png" /> 21<br />\
    <img src="styles/legend/JumlahBalita_1_22.png" /> 22<br />\
    <img src="styles/legend/JumlahBalita_1_23.png" /> 23<br />\
    <img src="styles/legend/JumlahBalita_1_24.png" /> 24<br />\
    <img src="styles/legend/JumlahBalita_1_25.png" /> 25<br />\
    <img src="styles/legend/JumlahBalita_1_26.png" /> 26<br />\
    <img src="styles/legend/JumlahBalita_1_27.png" /> 27<br />\
    <img src="styles/legend/JumlahBalita_1_28.png" /> 28<br />\
    <img src="styles/legend/JumlahBalita_1_29.png" /> 29<br />'
        });var format_JumlahPolio_2 = new ol.format.GeoJSON();
var features_JumlahPolio_2 = format_JumlahPolio_2.readFeatures(json_JumlahPolio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahPolio_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahPolio_2.addFeatures(features_JumlahPolio_2);var lyr_JumlahPolio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPolio_2, 
                style: style_JumlahPolio_2,
    title: 'Jumlah Polio<br />\
    <img src="styles/legend/JumlahPolio_2_0.png" /> <br />\
    <img src="styles/legend/JumlahPolio_2_1.png" /> 1<br />\
    <img src="styles/legend/JumlahPolio_2_2.png" /> 2<br />\
    <img src="styles/legend/JumlahPolio_2_3.png" /> 3<br />\
    <img src="styles/legend/JumlahPolio_2_4.png" /> 4<br />\
    <img src="styles/legend/JumlahPolio_2_5.png" /> 5<br />\
    <img src="styles/legend/JumlahPolio_2_6.png" /> 6<br />\
    <img src="styles/legend/JumlahPolio_2_7.png" /> 7<br />\
    <img src="styles/legend/JumlahPolio_2_8.png" /> 8<br />\
    <img src="styles/legend/JumlahPolio_2_9.png" /> 9<br />\
    <img src="styles/legend/JumlahPolio_2_10.png" /> 10<br />\
    <img src="styles/legend/JumlahPolio_2_11.png" /> 11<br />\
    <img src="styles/legend/JumlahPolio_2_12.png" /> 12<br />\
    <img src="styles/legend/JumlahPolio_2_13.png" /> 13<br />\
    <img src="styles/legend/JumlahPolio_2_14.png" /> 14<br />\
    <img src="styles/legend/JumlahPolio_2_15.png" /> 15<br />\
    <img src="styles/legend/JumlahPolio_2_16.png" /> 16<br />\
    <img src="styles/legend/JumlahPolio_2_17.png" /> 18<br />\
    <img src="styles/legend/JumlahPolio_2_18.png" /> 19<br />\
    <img src="styles/legend/JumlahPolio_2_19.png" /> 20<br />\
    <img src="styles/legend/JumlahPolio_2_20.png" /> 21<br />\
    <img src="styles/legend/JumlahPolio_2_21.png" /> 22<br />\
    <img src="styles/legend/JumlahPolio_2_22.png" /> 23<br />\
    <img src="styles/legend/JumlahPolio_2_23.png" /> 24<br />\
    <img src="styles/legend/JumlahPolio_2_24.png" /> 25<br />\
    <img src="styles/legend/JumlahPolio_2_25.png" /> 26<br />\
    <img src="styles/legend/JumlahPolio_2_26.png" /> 27<br />\
    <img src="styles/legend/JumlahPolio_2_27.png" /> 28<br />\
    <img src="styles/legend/JumlahPolio_2_28.png" /> 29<br />\
    <img src="styles/legend/JumlahPolio_2_29.png" /> 17<br />'
        });var format_JumlahCampak_3 = new ol.format.GeoJSON();
var features_JumlahCampak_3 = format_JumlahCampak_3.readFeatures(json_JumlahCampak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahCampak_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahCampak_3.addFeatures(features_JumlahCampak_3);var lyr_JumlahCampak_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahCampak_3, 
                style: style_JumlahCampak_3,
    title: 'Jumlah Campak<br />\
    <img src="styles/legend/JumlahCampak_3_0.png" /> <br />\
    <img src="styles/legend/JumlahCampak_3_1.png" /> 1<br />\
    <img src="styles/legend/JumlahCampak_3_2.png" /> 2<br />\
    <img src="styles/legend/JumlahCampak_3_3.png" /> 3<br />\
    <img src="styles/legend/JumlahCampak_3_4.png" /> 4<br />\
    <img src="styles/legend/JumlahCampak_3_5.png" /> 5<br />\
    <img src="styles/legend/JumlahCampak_3_6.png" /> 6<br />\
    <img src="styles/legend/JumlahCampak_3_7.png" /> 7<br />\
    <img src="styles/legend/JumlahCampak_3_8.png" /> 8<br />\
    <img src="styles/legend/JumlahCampak_3_9.png" /> 9<br />\
    <img src="styles/legend/JumlahCampak_3_10.png" /> 10<br />\
    <img src="styles/legend/JumlahCampak_3_11.png" /> 11<br />\
    <img src="styles/legend/JumlahCampak_3_12.png" /> 12<br />\
    <img src="styles/legend/JumlahCampak_3_13.png" /> 13<br />\
    <img src="styles/legend/JumlahCampak_3_14.png" /> 14<br />\
    <img src="styles/legend/JumlahCampak_3_15.png" /> 15<br />\
    <img src="styles/legend/JumlahCampak_3_16.png" /> 16<br />\
    <img src="styles/legend/JumlahCampak_3_17.png" /> 17<br />\
    <img src="styles/legend/JumlahCampak_3_18.png" /> 18<br />\
    <img src="styles/legend/JumlahCampak_3_19.png" /> 19<br />\
    <img src="styles/legend/JumlahCampak_3_20.png" /> 20<br />\
    <img src="styles/legend/JumlahCampak_3_21.png" /> 21<br />\
    <img src="styles/legend/JumlahCampak_3_22.png" /> 22<br />\
    <img src="styles/legend/JumlahCampak_3_23.png" /> 23<br />\
    <img src="styles/legend/JumlahCampak_3_24.png" /> 24<br />\
    <img src="styles/legend/JumlahCampak_3_25.png" /> 25<br />\
    <img src="styles/legend/JumlahCampak_3_26.png" /> 26<br />\
    <img src="styles/legend/JumlahCampak_3_27.png" /> 27<br />\
    <img src="styles/legend/JumlahCampak_3_28.png" /> 28<br />\
    <img src="styles/legend/JumlahCampak_3_29.png" /> 29<br />'
        });

lyr_Data_0.setVisible(true);lyr_JumlahBalita_1.setVisible(true);lyr_JumlahPolio_2.setVisible(true);lyr_JumlahCampak_3.setVisible(true);
var layersList = [baseLayer,lyr_Data_0,lyr_JumlahBalita_1,lyr_JumlahPolio_2,lyr_JumlahCampak_3];
lyr_Data_0.set('fieldAliases', {'id': 'id', 'Kecamatan': 'Kecamatan', 'Jml Psksms': 'Jml Psksms', });
lyr_JumlahBalita_1.set('fieldAliases', {'id': 'id', 'Jml Bayi L': 'Jml Bayi L', 'Jml Bayi P': 'Jml Bayi P', 'Bayi L+P': 'Bayi L+P', });
lyr_JumlahPolio_2.set('fieldAliases', {'id': 'id', 'Polio L': 'Polio L', '% Polio L': '% Polio L', 'Polio P': 'Polio P', '% Polio P': '% Polio P', 'Polio L+P': 'Polio L+P', '%Polio L+P': '%Polio L+P', });
lyr_JumlahCampak_3.set('fieldAliases', {'id': 'id', 'Campak L': 'Campak L', '%Campak L': '%Campak L', 'Campak P': 'Campak P', '%Campak P': '%Campak P', 'Campak L+P': 'Campak L+P', '%Campk L+P': '%Campk L+P', });
lyr_Data_0.set('fieldImages', {'id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jml Psksms': 'TextEdit', });
lyr_JumlahBalita_1.set('fieldImages', {'id': 'TextEdit', 'Jml Bayi L': 'TextEdit', 'Jml Bayi P': 'TextEdit', 'Bayi L+P': 'TextEdit', });
lyr_JumlahPolio_2.set('fieldImages', {'id': 'TextEdit', 'Polio L': 'TextEdit', '% Polio L': 'TextEdit', 'Polio P': 'TextEdit', '% Polio P': 'TextEdit', 'Polio L+P': 'TextEdit', '%Polio L+P': 'TextEdit', });
lyr_JumlahCampak_3.set('fieldImages', {'id': 'TextEdit', 'Campak L': 'TextEdit', '%Campak L': 'TextEdit', 'Campak P': 'TextEdit', '%Campak P': 'TextEdit', 'Campak L+P': 'TextEdit', '%Campk L+P': 'TextEdit', });
lyr_Data_0.set('fieldLabels', {'id': 'inline label', 'Kecamatan': 'inline label', 'Jml Psksms': 'inline label', });
lyr_JumlahBalita_1.set('fieldLabels', {'id': 'no label', 'Jml Bayi L': 'inline label', 'Jml Bayi P': 'inline label', 'Bayi L+P': 'inline label', });
lyr_JumlahPolio_2.set('fieldLabels', {'id': 'no label', 'Polio L': 'inline label', '% Polio L': 'inline label', 'Polio P': 'inline label', '% Polio P': 'inline label', 'Polio L+P': 'inline label', '%Polio L+P': 'inline label', });
lyr_JumlahCampak_3.set('fieldLabels', {'id': 'no label', 'Campak L': 'inline label', '%Campak L': 'inline label', 'Campak P': 'inline label', '%Campak P': 'inline label', 'Campak L+P': 'inline label', '%Campk L+P': 'inline label', });
lyr_JumlahCampak_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
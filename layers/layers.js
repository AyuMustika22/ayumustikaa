var wms_layers = [];

var lyr_akhirnyasrtmutm_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "akhirnya srtm utm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/akhirnyasrtmutm_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12413942.504854, -927780.579324, 12572744.825304, -802860.166438]
                            })
                        });
var format_petadas_1 = new ol.format.GeoJSON();
var features_petadas_1 = format_petadas_1.readFeatures(json_petadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_petadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_petadas_1.addFeatures(features_petadas_1);
var lyr_petadas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petadas_1, 
                style: style_petadas_1,
                interactive: true,
                title: '<img src="styles/legend/petadas_1.png" /> peta das'
            });
var format_PLPOTONG_2 = new ol.format.GeoJSON();
var features_PLPOTONG_2 = format_PLPOTONG_2.readFeatures(json_PLPOTONG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLPOTONG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLPOTONG_2.addFeatures(features_PLPOTONG_2);
var lyr_PLPOTONG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLPOTONG_2, 
                style: style_PLPOTONG_2,
                interactive: true,
    title: 'PL POTONG<br />\
    <img src="styles/legend/PLPOTONG_2_0.png" /> Bandara / Pelabuhan<br />\
    <img src="styles/legend/PLPOTONG_2_1.png" /> Belukar<br />\
    <img src="styles/legend/PLPOTONG_2_2.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/PLPOTONG_2_3.png" /> Hutan Mangrove Sekunder<br />\
    <img src="styles/legend/PLPOTONG_2_4.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/PLPOTONG_2_5.png" /> Pemukiman<br />\
    <img src="styles/legend/PLPOTONG_2_6.png" /> Perkebunan<br />\
    <img src="styles/legend/PLPOTONG_2_7.png" /> Pertambangan<br />\
    <img src="styles/legend/PLPOTONG_2_8.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/PLPOTONG_2_9.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/PLPOTONG_2_10.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/PLPOTONG_2_11.png" /> Sawah<br />\
    <img src="styles/legend/PLPOTONG_2_12.png" /> Tambak<br />\
    <img src="styles/legend/PLPOTONG_2_13.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/PLPOTONG_2_14.png" /> <br />'
        });

lyr_akhirnyasrtmutm_0.setVisible(true);lyr_petadas_1.setVisible(true);lyr_PLPOTONG_2.setVisible(true);
var layersList = [lyr_akhirnyasrtmutm_0,lyr_petadas_1,lyr_PLPOTONG_2];
lyr_petadas_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_PLPOTONG_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_petadas_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'Range', 'NAME': 'TextEdit', });
lyr_PLPOTONG_2.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_petadas_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_PLPOTONG_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_PLPOTONG_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
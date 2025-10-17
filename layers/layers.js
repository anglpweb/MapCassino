var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Com01012024_WGS84_1 = new ol.format.GeoJSON();
var features_Com01012024_WGS84_1 = format_Com01012024_WGS84_1.readFeatures(json_Com01012024_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com01012024_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com01012024_WGS84_1.addFeatures(features_Com01012024_WGS84_1);
var lyr_Com01012024_WGS84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com01012024_WGS84_1, 
                style: style_Com01012024_WGS84_1,
                popuplayertitle: 'Com01012024_WGS84',
                interactive: false,
    title: 'Com01012024_WGS84<br />\
    <img src="styles/legend/Com01012024_WGS84_1_0.png" /> <br />' });
var format_Dacontrollare_2 = new ol.format.GeoJSON();
var features_Dacontrollare_2 = format_Dacontrollare_2.readFeatures(json_Dacontrollare_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dacontrollare_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dacontrollare_2.addFeatures(features_Dacontrollare_2);
var lyr_Dacontrollare_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dacontrollare_2, 
                style: style_Dacontrollare_2,
                popuplayertitle: 'Da controllare',
                interactive: true,
                title: '<img src="styles/legend/Dacontrollare_2.png" /> Da controllare'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Com01012024_WGS84_1.setVisible(true);lyr_Dacontrollare_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Com01012024_WGS84_1,lyr_Dacontrollare_2];
lyr_Com01012024_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Refernete': 'Refernete', 'BMS Attivo': 'BMS Attivo', });
lyr_Dacontrollare_2.set('fieldAliases', {'id': 'id', 'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', });
lyr_Com01012024_WGS84_1.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'COD_PROV': '', 'COD_CM': '', 'COD_UTS': '', 'PRO_COM': '', 'PRO_COM_T': '', 'COMUNE': '', 'COMUNE_A': '', 'CC_UTS': '', 'Shape_Leng': '', 'Shape_Area': '', 'Refernete': '', 'BMS Attivo': '', });
lyr_Dacontrollare_2.set('fieldImages', {'id': '', 'Latitudine': '', 'Longitudin': '', });
lyr_Com01012024_WGS84_1.set('fieldLabels', {'COD_RIP': 'inline label - always visible', 'COD_REG': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'COD_CM': 'inline label - always visible', 'COD_UTS': 'inline label - always visible', 'PRO_COM': 'inline label - always visible', 'PRO_COM_T': 'inline label - always visible', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'inline label - always visible', 'CC_UTS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Refernete': 'inline label - always visible', 'BMS Attivo': 'inline label - always visible', });
lyr_Dacontrollare_2.set('fieldLabels', {'id': 'inline label - always visible', 'Latitudine': 'inline label - always visible', 'Longitudin': 'inline label - always visible', });
lyr_Dacontrollare_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
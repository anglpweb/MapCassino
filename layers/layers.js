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
                interactive: true,
    title: 'Com01012024_WGS84<br />\
    <img src="styles/legend/Com01012024_WGS84_1_0.png" /> <br />' });
var format_StrutturesuSCeSV_2 = new ol.format.GeoJSON();
var features_StrutturesuSCeSV_2 = format_StrutturesuSCeSV_2.readFeatures(json_StrutturesuSCeSV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSCeSV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSCeSV_2.addFeatures(features_StrutturesuSCeSV_2);
var lyr_StrutturesuSCeSV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSCeSV_2, 
                style: style_StrutturesuSCeSV_2,
                popuplayertitle: 'Strutture su SC e SV',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSCeSV_2.png" /> Strutture su SC e SV'
            });
var format_StrutturesuSR_3 = new ol.format.GeoJSON();
var features_StrutturesuSR_3 = format_StrutturesuSR_3.readFeatures(json_StrutturesuSR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSR_3.addFeatures(features_StrutturesuSR_3);
var lyr_StrutturesuSR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSR_3, 
                style: style_StrutturesuSR_3,
                popuplayertitle: 'Strutture su SR',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSR_3.png" /> Strutture su SR'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Com01012024_WGS84_1.setVisible(true);lyr_StrutturesuSCeSV_2.setVisible(true);lyr_StrutturesuSR_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Com01012024_WGS84_1,lyr_StrutturesuSCeSV_2,lyr_StrutturesuSR_3];
lyr_Com01012024_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Refernete': 'Refernete', 'BMS Attivo': 'BMS Attivo', });
lyr_StrutturesuSCeSV_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'footway': 'footway', 'width': 'width', 'foot': 'foot', 'tracktype': 'tracktype', 'maxweight:signed': 'maxweight:signed', 'man_made': 'man_made', 'service': 'service', 'source:maxspeed': 'source:maxspeed', 'source:name': 'source:name', 'name': 'name', 'overtaking': 'overtaking', 'surface': 'surface', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'lanes': 'lanes', 'highway': 'highway', 'change:forward': 'change:forward', 'change:backward': 'change:backward', 'bridge': 'bridge', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', 'Lunghezza': 'Lunghezza', });
lyr_StrutturesuSR_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref': 'ref', 'name': 'name', 'maxspeed': 'maxspeed', 'layer': 'layer', 'lanes': 'lanes', 'highway': 'highway', 'bridge': 'bridge', });
lyr_Com01012024_WGS84_1.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'COD_PROV': '', 'COD_CM': '', 'COD_UTS': '', 'PRO_COM': '', 'PRO_COM_T': '', 'COMUNE': '', 'COMUNE_A': '', 'CC_UTS': '', 'Shape_Leng': '', 'Shape_Area': '', 'Refernete': '', 'BMS Attivo': '', });
lyr_StrutturesuSCeSV_2.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'footway': 'TextEdit', 'width': 'TextEdit', 'foot': 'TextEdit', 'tracktype': 'TextEdit', 'maxweight:signed': 'TextEdit', 'man_made': 'TextEdit', 'service': 'TextEdit', 'source:maxspeed': 'TextEdit', 'source:name': '', 'name': 'TextEdit', 'overtaking': '', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'change:forward': '', 'change:backward': '', 'bridge': 'TextEdit', 'Latitudine': '', 'Longitudine': '', 'Lunghezza': '', });
lyr_StrutturesuSR_3.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'bridge': 'TextEdit', });
lyr_Com01012024_WGS84_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Refernete': 'no label', 'BMS Attivo': 'no label', });
lyr_StrutturesuSCeSV_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'footway': 'no label', 'width': 'no label', 'foot': 'no label', 'tracktype': 'no label', 'maxweight:signed': 'no label', 'man_made': 'no label', 'service': 'no label', 'source:maxspeed': 'no label', 'source:name': 'no label', 'name': 'no label', 'overtaking': 'no label', 'surface': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'lanes': 'no label', 'highway': 'no label', 'change:forward': 'no label', 'change:backward': 'no label', 'bridge': 'no label', 'Latitudine': 'inline label - always visible', 'Longitudine': 'inline label - always visible', 'Lunghezza': 'inline label - always visible', });
lyr_StrutturesuSR_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref': 'no label', 'name': 'inline label - always visible', 'maxspeed': 'no label', 'layer': 'no label', 'lanes': 'no label', 'highway': 'no label', 'bridge': 'inline label - always visible', });
lyr_StrutturesuSR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
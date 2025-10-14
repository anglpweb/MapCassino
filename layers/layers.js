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
var format_strutturesuFerroviastrutture_ferrovie_3 = new ol.format.GeoJSON();
var features_strutturesuFerroviastrutture_ferrovie_3 = format_strutturesuFerroviastrutture_ferrovie_3.readFeatures(json_strutturesuFerroviastrutture_ferrovie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strutturesuFerroviastrutture_ferrovie_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strutturesuFerroviastrutture_ferrovie_3.addFeatures(features_strutturesuFerroviastrutture_ferrovie_3);
var lyr_strutturesuFerroviastrutture_ferrovie_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strutturesuFerroviastrutture_ferrovie_3, 
                style: style_strutturesuFerroviastrutture_ferrovie_3,
                popuplayertitle: 'strutture su Ferrovia — strutture_ferrovie',
                interactive: true,
                title: '<img src="styles/legend/strutturesuFerroviastrutture_ferrovie_3.png" /> strutture su Ferrovia — strutture_ferrovie'
            });
var format_strutturesuAutostradastrutture_su_autostrada_4 = new ol.format.GeoJSON();
var features_strutturesuAutostradastrutture_su_autostrada_4 = format_strutturesuAutostradastrutture_su_autostrada_4.readFeatures(json_strutturesuAutostradastrutture_su_autostrada_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strutturesuAutostradastrutture_su_autostrada_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strutturesuAutostradastrutture_su_autostrada_4.addFeatures(features_strutturesuAutostradastrutture_su_autostrada_4);
var lyr_strutturesuAutostradastrutture_su_autostrada_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strutturesuAutostradastrutture_su_autostrada_4, 
                style: style_strutturesuAutostradastrutture_su_autostrada_4,
                popuplayertitle: 'strutture su Autostrada — strutture_su_autostrada',
                interactive: true,
                title: '<img src="styles/legend/strutturesuAutostradastrutture_su_autostrada_4.png" /> strutture su Autostrada — strutture_su_autostrada'
            });
var format_StrutturesuSR_5 = new ol.format.GeoJSON();
var features_StrutturesuSR_5 = format_StrutturesuSR_5.readFeatures(json_StrutturesuSR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSR_5.addFeatures(features_StrutturesuSR_5);
var lyr_StrutturesuSR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSR_5, 
                style: style_StrutturesuSR_5,
                popuplayertitle: 'Strutture su SR',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSR_5.png" /> Strutture su SR'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Com01012024_WGS84_1.setVisible(true);lyr_StrutturesuSCeSV_2.setVisible(true);lyr_strutturesuFerroviastrutture_ferrovie_3.setVisible(true);lyr_strutturesuAutostradastrutture_su_autostrada_4.setVisible(true);lyr_StrutturesuSR_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Com01012024_WGS84_1,lyr_StrutturesuSCeSV_2,lyr_strutturesuFerroviastrutture_ferrovie_3,lyr_strutturesuAutostradastrutture_su_autostrada_4,lyr_StrutturesuSR_5];
lyr_Com01012024_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Refernete': 'Refernete', 'BMS Attivo': 'BMS Attivo', });
lyr_StrutturesuSCeSV_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'width': 'width', 'name': 'name', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'highway': 'highway', 'bridge': 'bridge', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', 'Lunghezza': 'Lunghezza', });
lyr_strutturesuFerroviastrutture_ferrovie_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'service': 'service', 'railway:etcs': 'railway:etcs', 'highspeed': 'highspeed', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'voltage': 'voltage', 'usage': 'usage', 'ref': 'ref', 'railway:scmt': 'railway:scmt', 'railway:preferred_direction': 'railway:preferred_direction', 'railway': 'railway', 'passenger_lines': 'passenger_lines', 'operator': 'operator', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:fr': 'name:fr', 'name:en': 'name:en', 'name:de': 'name:de', 'name': 'name', 'maxspeed': 'maxspeed', 'layer': 'layer', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', 'bridge': 'bridge', });
lyr_strutturesuAutostradastrutture_su_autostrada_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'overtaking:hgv:conditional': 'overtaking:hgv:conditional', 'minspeed:lane:middle': 'minspeed:lane:middle', 'minspeed:lane:left': 'minspeed:lane:left', 'hgv:lane:left': 'hgv:lane:left', 'toll': 'toll', 'source:maxspeed': 'source:maxspeed', 'overtaking:hgv': 'overtaking:hgv', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lit': 'lit', 'int_ref': 'int_ref', 'surface': 'surface', 'ref': 'ref', 'name': 'name', 'layer': 'layer', 'lanes': 'lanes', 'highway': 'highway', 'bridge': 'bridge', });
lyr_StrutturesuSR_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref': 'ref', 'name': 'name', 'maxspeed': 'maxspeed', 'layer': 'layer', 'lanes': 'lanes', 'highway': 'highway', 'bridge': 'bridge', });
lyr_Com01012024_WGS84_1.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'COD_PROV': '', 'COD_CM': '', 'COD_UTS': '', 'PRO_COM': '', 'PRO_COM_T': '', 'COMUNE': '', 'COMUNE_A': '', 'CC_UTS': '', 'Shape_Leng': '', 'Shape_Area': '', 'Refernete': '', 'BMS Attivo': '', });
lyr_StrutturesuSCeSV_2.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'bridge': 'TextEdit', 'Latitudine': '', 'Longitudine': '', 'Lunghezza': '', });
lyr_strutturesuFerroviastrutture_ferrovie_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'service': '', 'railway:etcs': '', 'highspeed': '', 'wikipedia': '', 'wikidata': '', 'voltage': '', 'usage': '', 'ref': '', 'railway:scmt': '', 'railway:preferred_direction': '', 'railway': '', 'passenger_lines': '', 'operator': '', 'name:ja': '', 'name:it': '', 'name:fr': '', 'name:en': '', 'name:de': '', 'name': '', 'maxspeed': '', 'layer': '', 'gauge': '', 'frequency': '', 'electrified': '', 'bridge': '', });
lyr_strutturesuAutostradastrutture_su_autostrada_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'overtaking:hgv:conditional': '', 'minspeed:lane:middle': '', 'minspeed:lane:left': '', 'hgv:lane:left': '', 'toll': '', 'source:maxspeed': '', 'overtaking:hgv': '', 'oneway': '', 'maxspeed': '', 'lit': '', 'int_ref': '', 'surface': '', 'ref': '', 'name': '', 'layer': '', 'lanes': '', 'highway': '', 'bridge': '', });
lyr_StrutturesuSR_5.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'bridge': 'TextEdit', });
lyr_Com01012024_WGS84_1.set('fieldLabels', {'COD_RIP': 'inline label - always visible', 'COD_REG': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'COD_CM': 'inline label - always visible', 'COD_UTS': 'inline label - always visible', 'PRO_COM': 'inline label - always visible', 'PRO_COM_T': 'inline label - always visible', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'inline label - always visible', 'CC_UTS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Refernete': 'inline label - always visible', 'BMS Attivo': 'inline label - always visible', });
lyr_StrutturesuSCeSV_2.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'width': 'inline label - always visible', 'name': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'lanes': 'inline label - always visible', 'highway': 'inline label - always visible', 'bridge': 'inline label - always visible', 'Latitudine': 'inline label - always visible', 'Longitudine': 'inline label - always visible', 'Lunghezza': 'inline label - always visible', });
lyr_strutturesuFerroviastrutture_ferrovie_3.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'header label - visible with data', 'service': 'inline label - always visible', 'railway:etcs': 'inline label - always visible', 'highspeed': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'wikidata': 'inline label - always visible', 'voltage': 'inline label - always visible', 'usage': 'inline label - always visible', 'ref': 'inline label - always visible', 'railway:scmt': 'inline label - always visible', 'railway:preferred_direction': 'inline label - always visible', 'railway': 'inline label - always visible', 'passenger_lines': 'inline label - always visible', 'operator': 'inline label - always visible', 'name:ja': 'inline label - always visible', 'name:it': 'inline label - always visible', 'name:fr': 'inline label - always visible', 'name:en': 'inline label - always visible', 'name:de': 'inline label - always visible', 'name': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'gauge': 'inline label - always visible', 'frequency': 'inline label - always visible', 'electrified': 'inline label - always visible', 'bridge': 'inline label - always visible', });
lyr_strutturesuAutostradastrutture_su_autostrada_4.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'overtaking:hgv:conditional': 'inline label - always visible', 'minspeed:lane:middle': 'inline label - always visible', 'minspeed:lane:left': 'inline label - always visible', 'hgv:lane:left': 'inline label - always visible', 'toll': 'inline label - always visible', 'source:maxspeed': 'inline label - always visible', 'overtaking:hgv': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'lit': 'inline label - always visible', 'int_ref': 'inline label - always visible', 'surface': 'inline label - always visible', 'ref': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'lanes': 'inline label - always visible', 'highway': 'inline label - always visible', 'bridge': 'inline label - always visible', });
lyr_StrutturesuSR_5.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'ref': 'inline label - always visible', 'name': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'lanes': 'inline label - always visible', 'highway': 'inline label - always visible', 'bridge': 'inline label - always visible', });
lyr_StrutturesuSR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
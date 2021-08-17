(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                                if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    p += 0x1;
                                return p;
                            } catch (q) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"defaultVRPointer":"laser","paddingBottom":0,"id":"rootPlayer","gap":10,"verticalAlign":"top","layout":"absolute","width":"100%","scrollBarMargin":2,"start":"this.init()","mobileMipmappingEnabled":false,"children":["this.MainViewer","this.WebFrame_5FA1801B_5417_EBF8_41CB_13DEEC53555D"],"desktopMipmappingEnabled":false,"scrollBarWidth":10,"data":{"name":"Player528","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1}},"left":429.15,"paddingLeft":0,"borderSize":0,"toolTipHorizontalAlign":"center","horizontalAlign":"left","definitions": [{"hfov":360,"hfovMax":130,"label":trans('panorama_5BE523A6_5184_C245_41C7_8344696BE9DA.label'),"thumbnailUrl":"media/panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_t.jpg","id":"panorama_5BE523A6_5184_C245_41C7_8344696BE9DA","class":"Panorama","adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-69.72,"distance":3.31,"select":"this.mainPlayList.set('selectedIndex', 1)","panorama":"this.panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4","yaw":105.03}],"partial":false,"pitch":0,"overlays":["this.overlay_5CBD8C52_518B_C6DD_41D0_8A370314D9F4"],"frames":[{"thumbnailUrl":"media/panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_0/{face}/0/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_0/{face}/1/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_0/{face}/vr/0.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":"mobilevr","width":6144,"rowCount":1,"height":1024}],"class":"ImageResource"}}],"hfovMin":"150%","data":{"label":"0002"},"vfov":180},{"hfov":360,"hfovMax":130,"label":trans('panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4.label'),"thumbnailUrl":"media/panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_t.jpg","id":"panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4","class":"Panorama","adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":105.03,"distance":3.49,"select":"this.mainPlayList.set('selectedIndex', 0)","panorama":"this.panorama_5BE523A6_5184_C245_41C7_8344696BE9DA","yaw":-69.72}],"partial":false,"pitch":0,"overlays":["this.overlay_5D53B2DC_518C_43C5_41D2_77B089CD112C"],"frames":[{"thumbnailUrl":"media/panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_0/{face}/0/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_0/{face}/1/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_0/{face}/vr/0.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":"mobilevr","width":6144,"rowCount":1,"height":1024}],"class":"ImageResource"}}],"hfovMin":"150%","data":{"label":"0003"},"vfov":180},{"displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation"},{"class":"PanoramaCamera","id":"panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_camera","initialSequence":"this.sequence_58E654C5_5184_C7C7_41A6_61C8A120C3C6","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_5BE523A6_5184_C245_41C7_8344696BE9DA","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5BE523A6_5184_C245_41C7_8344696BE9DA_camera"},{"media":"this.panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4","class":"PanoramaPlayListItem","camera":"this.panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}]},{"backgroundColorDirection":"vertical","backgroundOpacity":1,"paddingBottom":0,"id":"WebFrame_5FA1801B_5417_EBF8_41CB_13DEEC53555D","data":{"name":"WebFrame1770"},"right":"17.25%","width":"51.586%","paddingLeft":0,"toolTipHorizontalAlign":"center","bottom":"5.71%","paddingRight":0,"insetBorder":false,"backgroundColor":["#FFFFFF"],"borderSize":0,"class":"WebFrame","borderRadius":0,"height":"88.505%","backgroundColorRatios":[0],"minWidth":1,"propagateClick":false,"paddingTop":0,"minHeight":1,"shadow":false,"scrollEnabled":true},{"class":"PanoramaCamera","id":"panorama_5D94FA0E_5185_C245_41C9_BAE3F30CF0C4_camera","initialSequence":"this.sequence_5B1A5EDF_5185_C3C3_41C1_A5CF415CE474","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10},{"shadow":false,"data":{"name":"Main Viewer"},"toolTipShadowSpread":0,"id":"MainViewer","playbackBarHeadShadowVerticalLength":0,"toolTipShadowVerticalLength":0,"playbackBarOpacity":1,"progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"transitionMode":"blending","toolTipShadowColor":"#333333","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":3,"width":"100%","paddingLeft":0,"borderSize":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","progressBarOpacity":1,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColorDirection":"vertical","progressBottom":0,"playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","playbackBarRight":0,"class":"ViewerArea","subtitlesTextDecoration":"none","firstTransitionDuration":0,"toolTipFontStyle":"normal","progressHeight":10,"subtitlesTextShadowBlurRadius":0,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipPaddingLeft":6,"playbackBarHeadShadowOpacity":0.7,"subtitlesShadow":false,"subtitlesOpacity":1,"progressBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"toolTipShadowOpacity":1,"toolTipOpacity":1,"vrPointerSelectionTime":2000,"paddingTop":0,"minHeight":50,"paddingBottom":0,"subtitlesVerticalAlign":"bottom","progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"transitionDuration":500,"subtitlesHorizontalAlign":"center","vrPointerSelectionColor":"#FF6600","minWidth":100,"playbackBarBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"height":"100%","subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"toolTipFontSize":"1.11vmin","subtitlesTextShadowVerticalLength":1,"playbackBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipFontWeight":"normal","toolTipHorizontalAlign":"center","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesBottom":50,"toolTipBorderRadius":3,"progressLeft":0,"subtitlesPaddingLeft":5,"subtitlesPaddingRight":5,"playbackBarHeadHeight":15,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"toolTipBorderColor":"#767676","toolTipBorderSize":1,"borderRadius":0,"toolTipPaddingTop":4,"toolTipTextShadowColor":"#000000","toolTipDisplayTime":600,"progressOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipTextShadowOpacity":0,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"progressRight":0,"displayTooltipInTouchScreens":true,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadOpacity":1,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"subtitlesTop":0,"propagateClick":false},{"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_5CCB8C5E_518B_C6C5_41B4_01A16B080EA2"],"items":[{"hfov":28.6,"vfov":22.22,"verticalAlign":"middle","image":"this.AnimatedImageResource_590D0E2E_541B_77D9_4197_09927E3D6E36","pitch":-27.2,"class":"HotspotPanoramaOverlayImage","yaw":105.03,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoTo0003"},"distance":100}],"useHandCursor":true,"rollOverDisplay":false,"id":"overlay_5CBD8C52_518B_C6DD_41D0_8A370314D9F4","data":{"label":"GoTo0003"},"enabledInCardboard":true},{"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_5D5482E4_518C_43C5_41BE_8404804EC24D"],"items":[{"hfov":32.37,"vfov":17.77,"verticalAlign":"middle","image":"this.AnimatedImageResource_590D4E2F_541B_77D7_41CC_F1A737D06844","pitch":-25.95,"class":"HotspotPanoramaOverlayImage","yaw":-69.72,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoTo0002"},"distance":100}],"useHandCursor":true,"rollOverDisplay":false,"id":"overlay_5D53B2DC_518C_43C5_41D2_77B089CD112C","data":{"label":"GoTo0002"},"enabledInCardboard":true},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_58E654C5_5184_C7C7_41A6_61C8A120C3C6","restartMovementOnUserInteraction":false},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_5B1A5EDF_5185_C3C3_41C1_A5CF415CE474","restartMovementOnUserInteraction":false},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5CCB8C5E_518B_C6C5_41B4_01A16B080EA2","mapColor":"any"},{"colCount":6,"levels":[{"url":"media/res_5D2A09CE_518C_41C5_41D0_BD42F2C1BE45_0.png","width":798,"class":"ImageResourceLevel","height":1064}],"class":"AnimatedImageResource","frameCount":43,"rowCount":8,"id":"AnimatedImageResource_590D0E2E_541B_77D9_4197_09927E3D6E36","frameDuration":62},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5D5482E4_518C_43C5_41BE_8404804EC24D","mapColor":"any"},{"colCount":6,"levels":[{"url":"media/res_5D2A09CE_518C_41C5_41D0_BD42F2C1BE45_0.png","width":798,"class":"ImageResourceLevel","height":1064}],"class":"AnimatedImageResource","frameCount":43,"rowCount":8,"id":"AnimatedImageResource_590D4E2F_541B_77D7_41CC_F1A737D06844","frameDuration":62}],"backgroundPreloadEnabled":true,"scripts":{"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initGA":TDV.Tour.Script.initGA,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"init":TDV.Tour.Script.init,"shareSocial":TDV.Tour.Script.shareSocial,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"initQuiz":TDV.Tour.Script.initQuiz,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getKey":TDV.Tour.Script.getKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByName":TDV.Tour.Script.getMediaByName,"setValue":TDV.Tour.Script.setValue,"setLocale":TDV.Tour.Script.setLocale,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"translate":TDV.Tour.Script.translate,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentByName":TDV.Tour.Script.getComponentByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"registerKey":TDV.Tour.Script.registerKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizStart":TDV.Tour.Script.quizStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"mixObject":TDV.Tour.Script.mixObject},"height":"100%","contentOpaque":false,"paddingRight":0,"vrPolyfillScale":0.75,"class":"Player","scrollBarColor":"#000000","scrollBarOpacity":0.5,"mouseWheelEnabled":true,"borderRadius":0,"scrollBarVisible":"rollOver","downloadEnabled":false,"minWidth":20,"propagateClick":false,"paddingTop":0,"minHeight":20,"shadow":false,"mediaActivationMode":"window","overflow":"hidden"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.19.js.map
//Generated with v2020.4.19, Tue Aug 17 2021
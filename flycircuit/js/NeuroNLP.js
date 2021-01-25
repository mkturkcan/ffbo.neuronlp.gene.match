// For any third party dependencies, like jQuery, place them in the lib folder.
//define('modernizr', [], Modernizr);

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

define('three', ['https://cdn.rawgit.com/mrdoob/three.js/r92/build/three.min.js'], function (THREE) {
  window.THREE = THREE;
  return THREE;
});
requirejs.config({
  baseUrl: '/js',
  paths: {
    // app: 'app',
    
    mesh3d: '../lib/js/mesh3d',
    propertymanager: '../lib/js/propertymanager',
    infopanel: "info_panel/infopanel",
    autobahn: '//cdn.jsdelivr.net/gh/crossbario/autobahn-js-browser@master/autobahn/autobahn.min',
    d3: '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
    detector: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/Detector',
    sceneutils: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/utils/SceneUtils',
    simplifymodifier: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/modifiers/SimplifyModifier',
    lut: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/math/Lut',
    copyshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/CopyShader',
    convolutionshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/ConvolutionShader',
    fxaashader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/FXAAShader',
    ssaoshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/SSAOShader',
    luminosityhighpassshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/LuminosityHighPassShader',
    luminosityshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/LuminosityShader',
    tonemapshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/ToneMapShader',
    gammacorrectionshader: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/shaders/GammaCorrectionShader',
    effectcomposer: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/EffectComposer',
    renderpass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/RenderPass',
    ssaarenderpass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/SSAARenderPass',
    shaderpass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/ShaderPass',
    ssaopass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/SSAOPass',
    maskpass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/MaskPass',
    bloompass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/BloomPass',
    unrealbloompass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/UnrealBloomPass',
    adaptivetonemappingpass: '//cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/postprocessing/AdaptiveToneMappingPass',
    trackballcontrols: '//cdn.jsdelivr.net/gh/fruitflybrain/ffbo.lib@flycircuit/js/TrackballControls',
    lightshelper: '../lib/js/lightshelper',
    modernizr: "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min",
    d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3",
    jqueryui: "//code.jquery.com/ui/1.12.1/jquery-ui",
    perfectscrollbar: "//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.7.0/js/perfect-scrollbar.jquery.min",
    "jquery.mobile": "//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min",
    spectrum: "//cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min",
    "jquery.mmenu": "/lib/js/jquery.mmenu.all",
    bootsrapslider: "//cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.0/bootstrap-slider.min",
    swiper: "//cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.2/js/swiper.min",
    bootstrap: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
    blockui: "//cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min",
    tageditor: "//cdnjs.cloudflare.com/ajax/libs/tag-editor/1.0.20/jquery.tag-editor.min",
    izitoast: "//cdn.jsdelivr.net/gh/fruitflybrain/ffbo.lib@flycircuit/js/iziToast.min",
    stats: "../lib/js/stats",
    dat: "//cdn.jsdelivr.net/gh/dataarts/dat.gui/master/build/dat.gui.min",
    ami: "//cdnjs.cloudflare.com/ajax/libs/ami.js/0.0.20/ami",
    /* Notify, bootbox, colormaps, demos, mouse, vis_set, ResizeSensor, read_vars, colorm[aps */
  },
  shim: {
    bootstrap: { deps: ['jquery'] },
    modernizr: { exports: 'Modernizr' },
    detector: { deps: ['three'], exports: 'Detector' },
    trackballcontrols: { deps: ['three'] },
    sceneutils: { deps: ['three'] },
    simplifymodifier: { deps: ['three'] },
    lut: { deps: ['three'] },
    copyshader: { deps: ['three'] },
    convolutionshader: { deps: ['three'] },
    fxaashader: { deps: ['three'] },
    ssaoshader: { deps: ['three'] },
    luminosityhighpassshader: { deps: ['three'] },
    luminosityshader: { deps: ['three'] },
    tonemapshader: { deps: ['three'] },
    gammacorrectionshader: { deps: ['three'] },
    effectcomposer: { deps: ['three'] },
    renderpass: { deps: ['three', 'effectcomposer'] },
    ssaarenderpass: { deps: ['three', 'effectcomposer'] },
    shaderpass: { deps: ['three', 'effectcomposer'] },
    ssaopass: { deps: ['three', 'effectcomposer', 'shaderpass'] },
    maskpass: { deps: ['three', 'effectcomposer'] },
    bloompass: { deps: ['three', 'effectcomposer'] },
    unrealbloompass: { deps: ['three', 'effectcomposer'] },
    adaptivetonemappingpass: { deps: ['three', 'effectcomposer'] },
    tageditor: { deps: ['jquery'] },
  },
  waitSeconds: 15
});




// Start loading the main app file. Put all of
// your application logic in there.
require([
  'jquery',
  'client',
  'three',
  'detector',
  'mesh3d',
  'infopanel',
  'dynamicmenu',
  'ui',
  'tags',
  'izitoast',
  'ffbodemoplayer',
  'visualizationsettings',
  'ami',
  'bootstrap',
  //'jquery.mobile',
  'jqueryui',
  'blockui',
]
  , function (
    $,
    FFBOClient,
    THREE,
    Detector,
    FFBOMesh3D,
    InfoPanel,
    FFBODynamicMenu,
    NeuroNLPUI,
    Tags,
    iziToast,
    FFBODemoPlayer,
    FFBOVisualizationSettings,
    AMI
  ) {
    window.AMI = AMI;
    iziToast.settings({
      timeout: 3000,
      resetOnHover: true,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
    })

    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    if (isOpera||isSafari||isIE||isEdge||isEdgeChromium) {
      alert("Please note that your browser is not officially supported. NeuroNLP Gene is tested on Chrome and Firefox.");
    }


    var isOnMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isOnMobile) {
      alert("Please note that NeuroNLP Gene is memory intensive and may fail to load on mobile.");
    }

    //$.mobile.ajaxEnabled = false;
    window.NeuroNLPUI = new NeuroNLPUI();
    var infoPanel = new InfoPanel("info-panel");
    var dynamicNeuronMenu = new FFBODynamicMenu({ singleObjSel: '#single-neu > .mm-listview', pinnedObjSel: '#single-pin > .mm-listview', removable: true, pinnable: true });
    var dynamicNeuropilMenu = new FFBODynamicMenu({ singleObjSel: '#toggle_neuropil > .mm-listview', compare: 'LeftRight' });
    var ffbomesh = new FFBOMesh3D('vis-3d', undefined, { "globalCenter": { 'x': 0, 'y': -250, 'z': 0 } });
    var tagsPanel = new Tags('tagsMenu');
    var client = new FFBOClient();
    var visualizationSettings = new FFBOVisualizationSettings(ffbomesh);
    window.NeuroNLPUI.onCreateTag = (tagsPanel.onCreateTag).bind(tagsPanel);
    window.NeuroNLPUI.onRetrieveTag = (tagsPanel.onRetrieveTag).bind(tagsPanel);

    var tagLoad = false;
    var searchParams = new URLSearchParams(document.location.search);
    if (searchParams.get('tag')) {
      tagLoad = true;
    }


    client.startConnection("guest", "guestpass", "wss://neuronlp.fruitflybrain.org/ws");

    //ffbomesh.settings.neuron3d = 1;
    function dataCallback(data) {
      var morph_data = {};
        var nodes = data['nodes'];
        var edges = data['edges'];
        var rid;
        for(var key in nodes){
            var unit = nodes[key];
            if(unit['class'] != 'MorphologyData'){
                for(var i = 0; i < edges.length; i++){
                    if(edges[i][0] == key && edges[i][2]['class'] == 'HasData'){
                        rid = edges[i][1];
                        var morphology = nodes[edges[i][1]];
                        if(morphology['class'] == 'MorphologyData'){
                            for(var key1 in morphology){
                                unit[key1] = morphology[key1];
                            }
                            morph_data[rid] = unit;
                            break;
                        }
                    }
                }
            }
        }
    ffbomesh.addJson({ffbo_json: morph_data, type: 'morphology_json'});
    }

    window.client = client;
    window.tagsPanel = tagsPanel;
    window.ffbomesh = ffbomesh;
    window.infoPanel = infoPanel;

    function retrieveTagData(metadata) {
      queryID = client.retrieveState({ success: dataCallback });
      client.status.on("change", function () {
        ffbomesh.import_state(metadata);
        $('#ui-blocker').hide();
      }, queryID);
    }

    function retrieveTagCallback(data) {
      metadata = data;
      if ('settings' in metadata) {
        settings = metadata.settings;
        delete metadata['settings'];
        if (tagLoad) {
          tagLoad = false;
          ffbomesh.import_settings(settings);
          retrieveTagData(metadata);
        }
        else {
          iziToast.info({
            close: false,
            timeout: false,
            drag: false,
            overlay: true,
            title: "Visualization Settings",
            message: "Load Visualization Settings from the tag and override your settings?",
            position: "center",
            buttons: [
              ['<button><b>YES</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                iziToast.info({ message: "Note that you can revert to default settings from the visualization settings menu" })
                $('#ui-blocker').show();
                ffbomesh.import_settings(settings);
                retrieveTagData(metadata);
              }, true],
              ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                $('#ui-blocker').show();
                retrieveTagData(metadata);
              }],
            ],
          });
        }
      }
      else { retrieveTagData(metadata); }
    }

    /*
     * Overload the create Tag function.
     */
    tagsPanel.createTag = function (tagName) {
      client.createTag(tagName, Object.assign({}, ffbomesh.export_state(), {
        settings: ffbomesh.export_settings(),
        //keywords: keywords
      }));
    }
    /*
     * Overload the retrieve Tag function.
     */
    tagsPanel.retrieveTag = function (tagName) {
      queryID = client.retrieveTag(tagName, { success: retrieveTagCallback });
      client.status.on("change", function (e) { if (e.value == -1) $('#ui-blocker').hide(); }, queryID);
    }

    var ex_tag = { 'name': 'nikul_7', 'desc': 'This tag shows the alpha lobe of the mushroom body.', 'keywords': ['mushroom body', 'alpha lobe'], 'FFBOdata': { extra: 'This tag has been created by the FFBO team.' } };
    tagsPanel.populateTags([ex_tag]);
    /*
   * Add tag retrieval functionality.
   */
    tagsPanel.activateTagLinks = (function (tagName) {
      $('.tag-el').click(() => {
        this.retrieveTag($(this).attr('tag_name'));
        this.overlay.closeAll();
      });
    }).bind(tagsPanel)
    tagsPanel.activateTagLinks();
    /*
   * Hide the tag search menu for now.
   */
    $('#tagSearchMenuWrapper').hide();

    var oldHeight = ffbomesh.container.clientHeight;
    var oldWidth = ffbomesh.container.clientWidth;

    setInterval(() => {
      if (oldHeight != ffbomesh.container.clientHeight || oldWidth != ffbomesh.container.clientWidth) {
        ffbomesh.onWindowResize();
        infoPanel.resize();
        oldHeight = ffbomesh.container.clientHeight;
        oldWidth = ffbomesh.container.clientWidth;
      }
    }, 200);


    if (!isOnMobile)
      client.notifySuccess = function (message) {
        if (message == "Fetching results from NeuroArch")
          iziToast.success({ message: message, icon: "fa fa-clock" })
        else
          iziToast.success({ message: message })
      }

    client.notifyError = function (message) {
      iziToast.error({ message: message, timeout: false })
    }

    client.receiveCommand = function (message) {
      console.log('Message Received:');
      console.log(message);
      if (!'commands' in message)
        return;
      if ('reset' in message['commands']) {
        ffbomesh.reset();
        delete message.commands.reset;
      }
      for (var cmd in message["commands"])
        ffbomesh.execCommand({ "commands": [cmd], "neurons": message["commands"][cmd][0], "args": message['commands'][cmd][1] });
    }


    infoPanel.isInWorkspace = (rid) => {
      return (rid in ffbomesh.meshDict);
    };

    infoPanel.addByUname = (uname) => {
      console.log(uname);
      queryID = client.addByUname(uname, { success: dataCallback });
    };

    infoPanel.removeByUname = (uname) => {
      queryID = client.removeByUname(uname);
    };

    infoPanel.getAttr = (id, attr) => {
      if (attr !== 'color') {
        return undefined;
      }
      return ffbomesh.meshDict[id].color.getHexString();
    };
    infoPanel.setAttr = (id, attr, value) => {
      if (attr !== 'color') {
        return;
      }
      ffbomesh.setColor(id, value);
    };

    ffbomesh.on('click', function (e) {
      $('#info-gene').empty();
      $("#info-intro").hide();
      $("#info-gene").hide();
      $("#info-panel").innerHTML = "";
      queryID = client.getInfo(e.value, {
        success: function (data) {
          data['summary']['rid'] = e.value;
          $('#info-gene').innerHTML = "";
          $('#info-panel').show();
          infoPanel.update(data);
          console.log(data);
          name = data.summary.name;
          a = findSkeletonIndex(name);
          lineList = argsort(getArrayColumn(dataFile.M, a));
          lineList = lineList.slice(0, 10);
          console.log(name, a, lineList);
          //var connTable = $("#info-panel-conn");
          var connTable = document.getElementById("info-panel-conn");
          var newItem = document.createElement("div");
          var newItemHeader = document.createElement("h4");
          newItemHeader.textContent = "Associated GAL4 Lines";
          newItem.appendChild(newItemHeader);
          var newItemTable = document.createElement("div");
          newItem.appendChild(newItemTable);
          var lineTable = [];
          for (var i = 0; i < lineList.length; i++) {
            console.log(lineList[i], a, dataFile.M[lineList[i]][a])
            if (dataFile.M[lineList[i]][a] > 0) {
              console.log(dataFile.lineNames[lineList[i]]);
              var lineName = "R" + dataFile.lineNames[lineList[i]][0].slice(10, 15);
              lineTable.push(dataFile.lineNames[lineList[i]][0]);
              //var newP = document.createElement("p");
              //newP.textContent = lineName;
              //newItem.appendChild(newP);
              //$( "<p>" + lineName + "</p>" ).insertBefore( "#info-panel-conn" );
            }
          }
          connTable.insertBefore(newItem, connTable.firstChild);
          createTable(newItemTable, lineTable);

        }
      });
    })



    dynamicNeuronMenu.dispatch.highlight = function (id) { ffbomesh.highlight(id, true) };
    dynamicNeuronMenu.dispatch.resume = function (id) { ffbomesh.highlight(undefined) };
    dynamicNeuronMenu.dispatch.toggle = function (id) { ffbomesh.toggleVis(id) };
    dynamicNeuronMenu.dispatch.togglePin = function (id) { ffbomesh.togglePin(id) };
    dynamicNeuronMenu.dispatch.unpin = function (id) { ffbomesh.unpin(id) };
    dynamicNeuronMenu.dispatch.remove = function (id) { client.removeObjs(id) };
    dynamicNeuronMenu.dispatch.getInfo = function (id) { ffbomesh.select(id) };
    dynamicNeuropilMenu.dispatch.toggle = function (id) { ffbomesh.toggleVis(id) };


    ffbomesh.on('add',
      function (e) {
        if (!e.value.background)
          dynamicNeuronMenu.addNeuron(e.prop, e.value.label);
        else
          dynamicNeuropilMenu.addNeuron(e.prop, e.value.label)
        infoPanel.renderAddRemoveBtn(e.value.label, true)
      });
    ffbomesh.on('remove', function (e) {
      if (!e.value.background)
        dynamicNeuronMenu.removeNeuron(e.prop)
      infoPanel.renderAddRemoveBtn(e.value.label, false)
    });
    ffbomesh.on('visibility', (function (e) {
      //if(this.states.highlight !== e.path[0])
      dynamicNeuronMenu.toggleVisibility(e.path[0], e.value)
    }
    ).bind(ffbomesh));
    ffbomesh.on('pinned', function (e) { dynamicNeuronMenu.updatePinnedNeuron(e.path[0], e.obj.label, e.value) });


    function updateThreshold(e) { client.threshold = e.value ? 1 : 20; }
    updateThreshold({ value: ffbomesh.settings.neuron3d })
    ffbomesh.settings.on('change', updateThreshold, 'neuron3d')

    function removeUnpinned() {
      var list = ffbomesh.getPinned();
      client.keepObjs(list);
    }

    function removePinned() {
      var list = ffbomesh.getPinned();
      client.removeObjs(list);
    }

    var srchInput = document.getElementById('srch_box');
    var srchBtn = document.getElementById('srch_box_btn');

    window.NLPsearch = function (query) {
      return new Promise(function (resolve, reject) {
        if (query == undefined) {
          query = document.getElementById('srch_box').value;
          $("#search-wrapper").block({ message: null });
          srchInput.blur();
        }
        if (query.indexOf('load line') > -1) {
          /*setTimeout(function () {
            client.session.call("ffbo.gfx.gene.updateFileList").then(
              (function (res) {
                console.log(res);
                $("#info-panel").show();
                dom = document.getElementById("info-gene");
                dom.innerHTML = "";
                createTable(dom, res['data']);
                window.NeuroNLPUI.onHideAllNeuropil();
                //$("#info-panel").hide();
                console.log(query.slice(11));
                var el = res['data'].find(a => a.includes(query.slice(11)));
                console.log(el);
                try { disposeStack(window.mainmesh); } catch { };
                //stackLoad('processed/JFRC2.nii.gz', 'meshpurple').then(function (out) {
                //  window.mainmesh = out;
                //});
                try { disposeStack(window.line); } catch { };
                if (ffbomesh.stats.getFPS() < 45)
                  stackFolder = "processed8/";
                else
                  stackFolder = "lines/";
                stackLoad("https://ffbodata.neuronlp.fruitflybrain.org/" + stackFolder + el, 'meshgreen').then(function (out) {
                  window.line = out;
                });
              }).bind(this),
              function (err) {
                console.log("server retrieval error:", err);
              }
            )
          }, 30); */
          var lineTable = [];
          for (var i = 0; i < dataFile.lineNames.length; i++) {
            // console.log(dataFile.lineNames[i]);
            var lineName = "R" + dataFile.lineNames[i][0].slice(10, 15);
            lineTable.push(dataFile.lineNames[i][0]);
          }
          var el = lineTable.find(a => a.includes(query.slice(11)));
          if (el == null)  {
            iziToast.info(Object.assign({ message: "No matching line found." }));
          }
          else {
            iziToast.success(Object.assign({ message: "Match found, loading..." }));
            console.log('match found:', el);
            if (ffbomesh.stats.getFPS() < 45)
              stackFolder = "processed8/";
            else
              stackFolder = "lines/";
            stackLoad("https://ffbodata.neuronlp.fruitflybrain.org/" + stackFolder + el, 'meshgreen').then(function (out) {
              window.line = out;
              window.NeuroNLPUI.onHideAllNeuropil();
            });
          }
          $("#search-wrapper").unblock();
          resolve();
        }
        else {

          queryID = client.executeNLPquery(query, { success: dataCallback });
          client.status.on("change", function (e) {
            $("#search-wrapper").unblock();
            if (!isOnMobile)
              srchInput.focus();
            srchInput.value = "";
            if (e.value == -1)
              reject();
            else
              resolve();
          }, queryID);
        }
      });
    }

    //add event listener
    srchBtn.addEventListener('click', function (event) {
      NLPsearch();
    });

    srchInput.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode == 13)
        srchBtn.click();
    });

    window.NeuroNLPUI.dispatch.onRemovePinned = (function () { removePinned() });
    window.NeuroNLPUI.dispatch.onRemoveUnpinned = (function () { removeUnpinned() });
    window.NeuroNLPUI.dispatch.onShowAllNeuron = (function () { ffbomesh.showFrontAll() });
    window.NeuroNLPUI.dispatch.onHideAllNeuron = (function () { ffbomesh.hideFrontAll() });
    window.NeuroNLPUI.dispatch.onShowAllNeuropil = (function () { ffbomesh.showBackAll() });
    window.NeuroNLPUI.dispatch.onHideAllNeuropil = (function () { ffbomesh.hideBackAll() });
    window.NeuroNLPUI.dispatch.onUnpinAll = (function () { ffbomesh.unpinAll() });

    ffbomesh.createUIBtn("showSettings", "fa-cog", "Settings")
    ffbomesh.createUIBtn("takeScreenshot", "fa-camera", "Download Screenshot")
    ffbomesh.createUIBtn("showInfo", "fa-info-circle", "GUI guideline")
    ffbomesh.createUIBtn("resetView", "fa-refresh", "Reset View")
    ffbomesh.createUIBtn("resetVisibleView", "fa-align-justify", "Center and zoom into visible Neurons/Synapses")
    ffbomesh.createUIBtn("showAll", "fa-eye", "Show All")
    ffbomesh.createUIBtn("hideAll", "fa-eye-slash", "Hide All")
    ffbomesh.createUIBtn("removeUnpin", "fa-trash", "Remove Unpinned Neurons")
    ffbomesh.createUIBtn("downData", "fa-download", "Download Connectivity")
    ffbomesh.createUIBtn("openGene", "fa-cube", "Genetic Viewer")
    ffbomesh.createUIBtn("getCompositeMatch", "fa-magic", "Retrieve Associated Genetic Lines")

    ffbomesh.on('showSettings', (function () { window.NeuroNLPUI.onClickVisualizationSettings() }));
    ffbomesh.on('resetView', (function () { ffbomesh.resetView() }));
    ffbomesh.on('resetVisibleView', (function () { ffbomesh.resetVisibleView() }));
    ffbomesh.on('removeUnpin', (function () { removeUnpinned() }));
    ffbomesh.on('hideAll', (function () { ffbomesh.hideAll() }));
    ffbomesh.on('showAll', (function () { ffbomesh.showAll() }));
    ffbomesh.on('takeScreenshot', (function () { ffbomesh._take_screenshot = true; }));
    ffbomesh.on('showInfo', function () { window.NeuroNLPUI.GUIinfoOverlay.show(); });
    ffbomesh.on('openGene', function () { window.initializeGene() });
    ffbomesh.on('getCompositeMatch', function () { window.getCompositeMatch() });

    $.getJSON("/data/config.json", function (json) {
      ffbomesh.addJson({
        ffbo_json: json,
        showAfterLoadAll: true
      }).then(function () {
        var c = json[Object.keys(json)[0]].color;
        var rgb = parseInt(c.b * 255) | (parseInt(c.g * 255) << 8) | (parseInt(c.r * 255) << 16);
        var hex = '#' + (0x1000000 + rgb).toString(16).slice(1);
        visualizationSettings.setColorPickerBackground(hex);
        if (!tagLoad) $('#ui-blocker').hide();
        srchInput.focus();
        if (client.loginStatus.connected) {
          tagsPanel.retrieveTag(searchParams.get('tag'))
        } else {
          client.loginStatus.on("change", function () {
            if (tagLoad) tagsPanel.retrieveTag(searchParams.get('tag'))
          }, "connected");
        }
      });
    });

    demoLoad = false;

    getStackSettings = function () {
      if (ffbomesh.settings.render_resolution > 0.8 && ffbomesh.stats.getFPS() > 45) {
        toInterpolate = 1;
        steps = Math.round(32 + 164 * ffbomesh.settings.render_resolution);
      }
      else {
        toInterpolate = 1;
        steps = Math.round(32 + 32 * ffbomesh.settings.render_resolution);
      }

      return {
        lut: 'walking_dead',
        opacity: 'random',
        steps: Math.round(64 + 132 * ffbomesh.settings.render_resolution),
        alphaCorrection: 1.0,
        interpolation: toInterpolate
      };
    };

    stackLoad = function (file, lutToUse) {
      lutToUse = lutToUse || "walking_dead";
      var loader = new AMI.default.Loaders.Volume($('#vis-3d')[0]);
      var stack;
      var series;
      var vrHelper;
      return new Promise(function (resolve, reject) {
        loader.load(file).then(function () {
          series = loader.data[0].mergeSeries(loader.data)[0];
          console.log(loader.data);
          loader.free();
          loader = null;
          // get first stack from series
          stack = series.stack[0];

          vrHelper = new AMI.default.Helpers.VolumeRendering(stack);

          var rotWorldMatrix;

          // Rotate an object around an arbitrary axis in world space       
          function rotateAroundWorldAxis(axis, radians) {
            rotWorldMatrix = new THREE.Matrix4();
            rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
            return rotWorldMatrix;
          }
          var rotator = rotateAroundWorldAxis(new THREE.Vector3(1, 0, 0), 180 * Math.PI / 180);
          var x = -510; var y = 160;
          var z = 100;
          var xs = 0.93; var ys = 0.925; var zs = 1.2;
          var repositioner = (new THREE.Matrix4().makeScale(xs, ys, zs)).multiply(new THREE.Matrix4().makeTranslation(x, y, z)).multiply(rotator);
          //update regMatrix, IJK and the BB
          vrHelper.stack.regMatrix = repositioner;
          vrHelper.stack.computeIJK2LPS();
          vrHelper.uniforms.uWorldToData.value = vrHelper.stack.lps2IJK;
          vrHelper.uniforms.uWorldBBox.value = vrHelper.stack.worldBoundingBox();
          //interface the mesh directly
          vrHelper._mesh.translateX(x);
          vrHelper._mesh.translateY(y);
          vrHelper._mesh.translateZ(z);
          vrHelper._mesh.matrix = rotator;
          vrHelper._mesh.rotation.setFromRotationMatrix(vrHelper._mesh.matrix);
          vrHelper._mesh.scale = new THREE.Vector3(xs, ys, zs);
          //vrHelper._mesh.rotateOnAxis(new THREE.Vector3(0,1,0), 180 * Math.PI/180);

          // scene
          scene.add(vrHelper);

          // CREATE LUT
          lut = new AMI.default.Helpers.Lut(('lutwrapper'));
          window.lut = lut;
          lut.luts = AMI.default.Helpers.Lut.presetLuts();
          lut.lutsO = AMI.default.Helpers.Lut.presetLutsO();
          lut.luts['meshpurple'] = [[0.000, 0.349, 0.086, 0.349], [0.000, 0.792, 0.2, 0.792]];
          lut.luts['meshgreen'] = [[0.000, 0.349, 0.000, 0.000], [0.000, 0.000, 1.00, 0.000]];
          lut.lut = lutToUse;
          // update related uniforms
          vrHelper.uniforms.uTextureLUT.value = lut.texture;
          vrHelper.uniforms.uLut.value = 1;

          // update camrea's and interactor's target
          var centerLPS = stack.worldCenter();
          camera.lookAt(centerLPS.x, centerLPS.y, centerLPS.z);
          camera.updateProjectionMatrix();
          controls.target.set(centerLPS.x, centerLPS.y, centerLPS.z);
          //controls.addEventListener('start', onStart);
          //controls.addEventListener('end', onEnd);
          // create GUI
          //buildGUI();

          ready = true;
          vrHelper.uniforms.uSteps.value = getStackSettings().steps;
          vrHelper.interpolation = getStackSettings().interpolation;
          resolve(vrHelper);
        });

      });
    };

    window.disposeStack = function (stack) {
      for (let j = 0; j < stack._textures.length; j++) {
        stack._textures[j].dispose();
        stack._textures[j] = null;
      }
      stack._textures = null;
      stack._shadersFragment = null;
      stack._shadersVertex = null;

      stack._uniforms.uTextureContainer = null;
      stack._uniforms.uTextureLUT = null;
      stack._uniforms = null;

      // material, geometry and mesh
      stack.remove(stack._mesh);
      stack._mesh.geometry.dispose();
      stack._mesh.geometry = null;
      stack._mesh.material.dispose();
      stack._mesh.material = null;
      stack._mesh = null;

      stack._geometry.dispose();
      stack._geometry = null;
      stack._material.vertexShader = null;
      stack._material.fragmentShader = null;
      stack._material.uniforms = null;
      stack._material.dispose();
      stack._material = null;

      stack._stack = null;
    }

    //window.mesh = stackLoad('processed/JFRC2.nii.gz');
    window.initializeGene = function () {
      $("#info-gene").show();
      $("#info-panel").hide();
      $("#info-intro").hide();
      try { disposeStack(window.mainmesh); } catch { };
      try { disposeStack(window.line); } catch { };
      //stackLoad('processed/JFRC2.nii.gz', 'meshpurple').then(function (out) {
      //  window.mainmesh = out;
      //});
      stackLoad('processed/6r3.nii.gz', 'meshgreen').then(function (out) {
        window.line = out;
      });

      /*setTimeout(function () {
        client.session.call("ffbo.gfx.gene.updateFileList").then(
          (function (res) {
            console.log(res);
            $("#info-panel").show();
            dom = document.getElementById("info-gene");
            dom.innerHTML = "";
            createTable(dom, res['data']);
            window.NeuroNLPUI.onHideAllNeuropil();
            $("#info-panel").hide();
          }).bind(this),
          function (err) {
            console.log("server retrieval error:", err);
          }
        )
      }, 30);*/
      var lineTable = [];
      for (var i = 0; i < dataFile.lineNames.length; i++) {
        // console.log(dataFile.lineNames[i]);
        var lineName = "R" + dataFile.lineNames[i][0].slice(10, 15);
        lineTable.push(dataFile.lineNames[i][0]);
      }
      $("#info-panel").show();
      dom = document.getElementById("info-gene");
      dom.innerHTML = "";
      createTable(dom, lineTable);
      window.NeuroNLPUI.onHideAllNeuropil();
      $("#info-panel").hide();
    }

    window.getCompositeMatch = function () {
      $("#info-gene").show();
      $("#info-panel").hide();
      $("#info-intro").hide();
      //$("#info-panel").innerHTML = "";
      var a = Object.keys(ffbomesh.meshDict);
      allActivities = [];
      for (var i = 0; i < a.length; i++) {
        if (a[i].indexOf("#") > -1) {
          console.log(ffbomesh.meshDict[a[i]].name);
          skeletonIndex = findSkeletonIndex(ffbomesh.meshDict[a[i]].name);
          activities = getArrayColumn(dataFile.M, skeletonIndex);
          allActivities.push(activities);
        }
      }

      if (allActivities.length > 0) {
        for (var i = 0; i < allActivities.length; i++) {
          if (i > 0)
            allActivities[0] = allActivities[0].map((a, j) => a + allActivities[i][j]);
        }

        lineList = argsort(allActivities[0]);
        var lineTable = [];
        for (var i = 0; i < lineList.length; i++) {
          var lineName = "R" + dataFile.lineNames[lineList[i]][0].slice(10, 15);
          lineTable.push(dataFile.lineNames[lineList[i]][0]);
        }

        //lineTable = lineTable.slice(0, 10);
        console.log("Line List is: ", lineTable);
        $("#info-panel").show();
        dom = document.getElementById("info-gene");
        dom.innerHTML = "";
        createTable(dom, lineTable);
        window.NeuroNLPUI.onHideAllNeuropil();
        $("#info-panel").hide();
      }


    }

    window.createGeneInfo = function (name) {
      console.log("Creating the gene info panel...")
      $("#info-panel").hide();
      dom = document.getElementById("info-gene");
      dom.innerHTML = "";
      //createTable(dom, res['data']);
      var tableDiv = document.createElement('div');
      tableDiv.className = "table-grid";
      tableDiv.id = "info-panel-summary-table";
      dom.appendChild(tableDiv);
      var tableSubDiv = document.createElement('div');
      tableDiv.appendChild(tableSubDiv);
      var tableP = document.createElement('p');
      tableP.textContent = "Name";
      tableSubDiv.appendChild(tableP);
      var tableP = document.createElement('p');
      tableP.textContent = name;
      tableSubDiv.appendChild(tableP);
      window.NeuroNLPUI.onHideAllNeuropil();

      //var connTable = $("#info-panel-conn");

      var connTable = document.createElement("div");
      connTable.setAttribute("id", "info-panel-conn");
      dom.appendChild(connTable);

      var newItem = document.createElement("div");
      connTable.insertBefore(newItem, connTable.firstChild);
      //newItem.appendChild(connTable);


      populateBehaviorData(newItem, name);

      var newItemHeader = document.createElement("h4");
      newItemHeader.textContent = "Associated Neurons";
      newItem.appendChild(newItemHeader);
      var newItemTable = document.createElement("div");
      newItem.appendChild(newItemTable);


      createLineTable(newItemTable, name);


    }

    window.createLineTable = function (dom, name) {
      a = findLineIndex(name);
      console.log(a);
      lineList = argsort(dataFile.M[a]);
      lineList = lineList.slice(0, 1000);
      console.log(name, a, lineList);
      var tableData = [];
      for (var i = 0; i < lineList.length; i++) {
        console.log(lineList[i], a, dataFile.M[a][lineList[i]])
        if (dataFile.M[a][lineList[i]] > 0) {
          console.log(dataFile.skeletonNames[lineList[i]]);
          var lineName = dataFile.skeletonNames[lineList[i]];
          tableData.push(lineName);
        }
      }

      var input = document.createElement('input');
      input.addEventListener("keyup", filterTable);
      input.type = 'text';
      input.id = 'GeneInput';
      input.placeholder = 'Search Neuron...';
      var table = document.createElement('table');
      table.id = "GeneTable";
      table.className = "table table-inverse table-custom-striped";
      var header = document.createElement('tr');
      header.className = "header";
      var th = document.createElement('th');
      th.innerHTML = "Neuron Name";
      //th.style = "width:20%";
      header.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "Database";
      //th.style = "width:25%";
      header.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "";
      //th.style = "width:5%";
      header.appendChild(th);
      table.appendChild(header);
      var tableBody = document.createElement('tbody');

      tableData.forEach(function (rowData) {
        var row = document.createElement('tr');
        formattedrow = [rowData.slice(0, 5), "FlyCircuit"];
        formattedrow.forEach(function (rowColumn) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(rowColumn));
          row.appendChild(cell);
        });
        // Line Name Cell

        // Load Cell
        var cell = document.createElement('td');
        cell.className = "neuron_add_pre";
        cellButton = document.createElement('button');
        cellButton.className = "btn btn-add btn-success";
        cellButton.innerHTML = "+";
        //cell.innerHTML = "<a href='#" + "'>Add</a>";
        cell.appendChild(cellButton);
        cellButton.addEventListener("click", function () {
          queryID = client.addByUname(rowData, { success: dataCallback });
        });
        row.appendChild(cell);
        var emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      dom.appendChild(input);
      dom.appendChild(table);

      function filterTable() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("GeneInput");
        filter = input.value.toUpperCase();
        console.log(filter);
        table = document.getElementById("GeneTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those that don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          try {
            tdtext = tr[i].getElementsByTagName("td")[0].innerHTML.toUpperCase() + tr[i].getElementsByTagName("td")[1].innerHTML.toUpperCase() + tr[i].getElementsByTagName("td")[2].innerHTML.toUpperCase();
            if (td) {
              if (tdtext.indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          } catch { };
        }
      }

    }

    window.createTable = function (dom, tableData) {


      var input = document.createElement('input');
      input.addEventListener("keyup", filterTable);
      input.type = 'text';
      input.id = 'GeneInput';
      input.placeholder = 'Search Line...';
      var table = document.createElement('table');
      table.id = "GeneTable";
      table.className = "table table-inverse table-custom-striped";
      var header = document.createElement('tr');
      header.className = "header";
      var th = document.createElement('th');
      th.innerHTML = "Template";
      //th.style = "width:20%";
      header.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "Database";
      //th.style = "width:25%";
      header.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "Line Name";
      //th.style = "width:15%";
      header.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "";
      //th.style = "width:5%";
      header.appendChild(th);
      table.appendChild(header);
      var tableBody = document.createElement('tbody');

      tableData.forEach(function (rowData) {
        var row = document.createElement('tr');
        formattedrow = [rowData.slice(0, 5), "Janelia FlyLight"];
        formattedrow.forEach(function (rowColumn) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(rowColumn));
          row.appendChild(cell);
        });
        // Line Name Cell
        var cell = document.createElement('td');
        cell.innerHTML = "<a href='#" + "'>" + "R" + rowData.slice(10, 15) + "</a>";
        cell.addEventListener("click", function () {
          try { disposeStack(window.line); } catch{ };
          var stackFolder;
          if (ffbomesh.stats.getFPS() < 10)
            stackFolder = "lines/";
          else
            stackFolder = "lines/";
          stackLoad("https://ffbodata.neuronlp.fruitflybrain.org/" + stackFolder + rowData, 'meshgreen').then(function (out) {
            window.line = out;
          });
          window.createGeneInfo("R" + rowData.slice(10, 15));
        });
        row.appendChild(cell);
        tableBody.appendChild(row);
        // Load Cell
        var cell = document.createElement('td');
        cell.innerHTML = "<a href='#" + "'>Load</a>";
        cell.addEventListener("click", function () {
          try { disposeStack(window.line); } catch{ };
          var stackFolder;
          if (ffbomesh.stats.getFPS() < 45)
            stackFolder = "processed8/";
          else
            stackFolder = "lines/";
          stackLoad("https://ffbodata.neuronlp.fruitflybrain.org/" + stackFolder + rowData, 'meshgreen').then(function (out) {
            window.line = out;
          });
        });
        row.appendChild(cell);
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      dom.appendChild(input);
      dom.appendChild(table);

      function filterTable() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("GeneInput");
        filter = input.value.toUpperCase();
        console.log(filter);
        table = document.getElementById("GeneTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those that don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          try {
            tdtext = tr[i].getElementsByTagName("td")[0].innerHTML.toUpperCase() + tr[i].getElementsByTagName("td")[1].innerHTML.toUpperCase() + tr[i].getElementsByTagName("td")[2].innerHTML.toUpperCase();
            if (td) {
              if (tdtext.indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          } catch { };
        }
      }

    }

    $.getJSON("https://ffbodata.neuronlp.fruitflybrain.org/lineCrossMatches/" + "lineSim.json", function (json) {
      iziToast.success(Object.assign({ message: "Genetics Data loaded..." }));
      window.dataFile = json.dataFile;
      $('#ui-blocker').hide();
      $.getJSON("https://ffbodata.neuronlp.fruitflybrain.org/lineCrossMatches/" + "lineBehavior.json", function (json) {
        iziToast.success(Object.assign({ message: "Behavioral Data loaded..." }));
        window.behaviorFile = json.dataFile;
        $('#ui-blocker').hide();
      });
    });
    iziToast.info(Object.assign({ message: "Starting to load genetic data..." }));
    $('#ui-blocker').show();

    window.argsort = function (test) {
      var result = Array.from(Array(test.length).keys())
        .sort((a, b) => test[a] < test[b] ? -1 : (test[b] < test[a]) | 0);
      return result.reverse();
    }
    window.absargsort = function (test) {
      var result = Array.from(Array(test.length).keys())
        .sort((a, b) => Math.abs(test[a]) < Math.abs(test[b]) ? -1 : (Math.abs(test[b]) < Math.abs(test[a])) | 0);
      return result.reverse();
    }
    window.findSkeletonIndex = function (x) {
      return window.dataFile.skeletonNames.findIndex(function (el) { return el[0] == x; });
    }
    window.findLineIndex = function (x) {
      return window.dataFile.lineNames.findIndex(function (el) { return ("R" + el[0].slice(10, 15)) == x; });
    }
    window.getArrayColumn = (arr, n) => arr.map(x => x[n]);

    window.populateBehaviorData = function (dom, name) {
      var idx = window.behaviorFile.lineNames.findIndex(function (el) { return el == name; });
      if (idx > 0) {
        var row = behaviorFile.M[idx];
        var behaviorList = absargsort(row).slice(0, 10);
        var newItemHeader = document.createElement("h4");
        newItemHeader.textContent = "Associated Behaviors";
        dom.appendChild(newItemHeader);
        var behaviorTable = document.createElement("div");
        dom.appendChild(behaviorTable);

        var tableData = [];
        for (var i = 0; i < behaviorList.length; i++) {
          //console.log(dataFile.skeletonNames[lineList[i]]);
          var behaviorName = behaviorFile.behaviorNames[behaviorList[i]]
          tableData.push([behaviorName, behaviorFile.M[idx][behaviorList[i]]]);
        }

        var table = document.createElement('table');
        table.id = "GeneTable";
        table.className = "table table-inverse table-custom-striped";
        var header = document.createElement('tr');
        header.className = "header";
        var th = document.createElement('th');
        th.innerHTML = "Behavior Name";
        //th.style = "width:20%";
        header.appendChild(th);
        var th = document.createElement('th');
        th.innerHTML = "Normalized Control Standard Deviation Difference";
        //th.style = "width:25%";
        header.appendChild(th);
        table.appendChild(header);
        var tableBody = document.createElement('tbody');
        console.log(tableData);
        window.behaviorTableData = tableData;
        tableData.forEach(function (rowData) {
          var row = document.createElement('tr');
          formattedrow = [rowData[0], rowData[1]];
          formattedrow.forEach(function (rowColumn) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(rowColumn));
            row.appendChild(cell);
          });
          // Line Name Cell

          // Load Cell
          /*var cell = document.createElement('td');
          cell.className = "neuron_add_pre";
          cellButton = document.createElement('button');
          cellButton.className = "btn btn-add btn-success";
          cellButton.innerHTML = "+";
          //cell.innerHTML = "<a href='#" + "'>Add</a>";
          cell.appendChild(cellButton);
          cellButton.addEventListener("click", function () {
            queryID = client.addByUname(rowData, { success: dataCallback });
          });
          row.appendChild(cell);*/
          var emptyCell = document.createElement('td');
          row.appendChild(emptyCell);
          tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        behaviorTable.appendChild(table);
      }
    }

    $('#lutwrapper').hide();

    $(document).ready(function () {


      if (isOnMobile)
        ffbomesh.backrenderSSAO.enabled = false;
      FFBODemoPlayer = new FFBODemoPlayer(ffbomesh, $('#ui_menu_nav').data('mmenu'));
      window.FFBODemoPlayer = FFBODemoPlayer;
      FFBODemoPlayer.onLoadingTag = () => {
        tagLoad = true;
      };
      FFBODemoPlayer.notify = function (message, settings) {
        iziToast.info(Object.assign({ message: message }, settings))
      }
      FFBODemoPlayer.afterDemo = function () {
        iziToast.hide({ transitionOut: 'fadeOut' }, document.querySelector('.demoplayer-status-notify'));
      }
      FFBODemoPlayer.beforeDemo = (function (keyword) {
        timeout = demoLoad && isOnMobile ? 2000 : false
        this.ffbomesh.resetView();
        iziToast.info({
          close: true,
          class: 'demoplayer-status-notify',
          timeout: timeout,
          drag: false,
          overlay: false,
          color: 'yellow',
          title: "Demo",
          message: "Running <u>" + keyword + "</u> Demo",
          position: "topCenter",
          buttons: [
            ['<button><b>Stop</b></button>', function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
              FFBODemoPlayer.stopDemo();
            }, true],
          ],
        });
        window.NeuroNLPUI.closeAllOverlay();
      }).bind(FFBODemoPlayer);
      $.getJSON("/data/demos.json", function (json) {
        FFBODemoPlayer.addDemos(json);
        FFBODemoPlayer.updateDemoTable('#demo-table-wrapper');
        if (searchParams.get('demo') && !searchParams.get('tag')) {
          demoLoad = true;
          FFBODemoPlayer.startDemo(searchParams.get('demo'))
        }
      });
    });
    var textFile = null;
    ffbomesh.on("downData", function () {
      if (!ffbomesh.uiVars.frontNum) {
        client.notifyError("No neurons present in scene");
        return;
      }
      if (ffbomesh.uiVars.frontNum > 500) {
        client.notifyError("NeuroNLP currently limits this feature for use with upto 500 neurons");
        return;
      }
      iziToast.info({
        class: 'fetching_conn_notification',
        message: "Fetching Connectivity Data",
        timeout: false,
        color: 'green',
        close: false
      })
      $('#ui-blocker').show();


      client.getConnectivity({
        success: function (res) {
          iziToast.hide({ transitionOut: 'fadeOut' }, document.querySelector('.fetching_conn_notification'));
          csv = 'If Inferred=1, the connectivity between neurons was inferred using axonic/dendritic polarity predicted by SPIN:Skeleton-based Polarity Identification for Neurons. Please refer to \nSPIN: A Method of Skeleton-based Polarity Identification for Neurons. Neurinformatics 12:487-507. Yi-Hsuan Lee, Yen-Nan Lin, Chao-Chun Chuang and Chung-Chuan Lo (2014)\nfor more details\n'
          csv += 'PreSynaptic Neuron,PostSynaptic Neuron,N,Inferred'
          nodes = res['nodes']
          edges = res['edges']

          for (e_pre in edges) {
            if (nodes[e_pre]['class'] == 'Neuron') {
              if ('uname' in nodes[e_pre])
                pre = nodes[e_pre]['uname']
              else
                pre = nodes[e_pre]['name']
              synapse_nodes = edges[e_pre]
              for (synapse in synapse_nodes) {
                if (nodes[synapse]['class'] == 'Synapse')
                  inferred = 0
                else
                  inferred = 1
                N = nodes[synapse]['N']
                post_node = nodes[Object.keys(edges[synapse])[0]]
                if ('uname' in post_node)
                  post = post_node['uname']
                else
                  post = post_node['name']
                csv += ('\n' + pre + ',' + post + ',' + N + ',' + inferred)
              }
            }
          }
          var data = new Blob([csv], { type: 'text/csv' });
          // If we are replacing a previously generated file we need to
          // manually revoke the object URL to avoid memory leaks.
          if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
          }
          textFile = window.URL.createObjectURL(data);
          var link = document.createElement('a');
          link.setAttribute('download', 'ffbo_connectivity.csv');
          link.href = textFile;
          document.body.appendChild(link);
          // wait for the link to be added to the document
          window.requestAnimationFrame(function () {
            var event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
          });
          // $('#ui-blocker').hide();
        }
      });
    });
  });

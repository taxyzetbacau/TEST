xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel3")
                .setDock("none")
                .setLeft("62.24761904761905em")
                .setTop("2.8190476190476192em")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setCaption("Default")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel3.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews1")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews1.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview1")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel6")
                .setDock("none")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("army")
                .setCaption("Army")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel6.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews4")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews4.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview4")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel7")
                .setDock("none")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("vista")
                .setCaption("Vista")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel7.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews5")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews5.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview5")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel8")
                .setDock("none")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("moonify")
                .setCaption("Moonify")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel8.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews6")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews6.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview6")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel9")
                .setDock("none")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("pink")
                .setCaption("Pink")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel9.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews7")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews7.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview7")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel11")
                .setDock("none")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("red")
                .setCaption("Red")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel11.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews9")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews9.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview9")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel12")
                .setDock("none")
                .setWidth("16.6667em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("darkblue")
                .setCaption("Darkblue")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel12.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews10")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews10.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview10")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel13")
                .setDock("none")
                .setWidth("33em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("webflat")
                .setCaption("Web Flat")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews11")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setSideBarStatus("fold")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews11.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview11")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel10")
                .setDock("none")
                .setWidth("33em")
                .setHeight("20.8333em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("classic")
                .setCaption("Classic")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel10.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews8")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setSideBarStatus("fold")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews8.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview8")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});
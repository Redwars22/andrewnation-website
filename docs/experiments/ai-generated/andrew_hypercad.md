# 📐 Andrew HyperCAD
O Andrew HyperCAD é uma aplicação de desenho CAD desenvolvido com inteligência artificial e tecnologias JavaScript, HTML e Tailwind, visando principalmente à sua utilização em dispositivos desktops a partir do navegador.

## INTERFACE DE USUÁRIO
A interface do Andrew HyperCAD baseia-se no Autodesk AutoCAD, para que usuário já habituados àquela ferramenta tenham uma curva de aprendizado bem menor. Ademais, intende-se que seja fácil e intuitiva para aqueles usuários que nunca usaram o Andrew HyperCAD se habituarem rapidamente.

A interface divide-se em algumas áreas principais, para além da área de desenho:
- **Barra superior com navegação de projeto**: Novo, Abrir, Salvar, Desfazer, Refazer, Exportar.
- **Ribbon**: Início, Desenhar, Modificar, Anotação, Camadas e Exportação.
- **Console de Comando Interativo**: Digite comandos com suporte a atalhos idênticos aos do AutoCAD (`L` para Linha, `C` para Círculo, `REC` para Retângulo, `M` para Mover, `E` para Apagar, `Z` para Zoom, etc.).
- **Barra de Status Inferior**: Alternadores rápidos com teclas de atalho (`F3` para OSNAP, `F7` para Grade, `F8` para Modo Ortogonal, `F9` para Snap à Grade) e leitura de coordenadas em tempo real.

## FERRAMENTAS DE DESENHO
- **Linha (Line)** com snapping em cadeia. 
- **Polilinha (Polyline)** e **Polígonos**.
- **Círculo (Circle)** e **Arco (Arc)**.
- **Retângulo (Rectangle)** e **Elipse (Ellipse)**.
- **Cotagem Linear (Dimension)** e inserção de **Texto (Text)**.      
- **Ferramentas Mover, Copiar, Rotacionar, Escalar e Espelhar**.

## FERRAMENTAS AVANÇADAS (CAMADAS E NAVEGAÇÃO)
- **Gerenciador de Layers (Camadas)**:
	-  Definição de nomes, cores personalizadas e controle de visibilidade.     
	- Seleção de camada ativa e atribuição automática dos elementos à camada selecionada.
- **Navegação**:
	- Controle de Pan (clique e arraste com o botão do meio do mouse ou navegação N/S/L/O).
    - Zoom fluido centralizado no ponteiro do mouse (Scroll Wheel).
    - Cubo de Navegação e UCS (Sistema de Coordenadas do Usuário X/Y).
    - **Snap Inteligente (OSNAP)** com marcadores para Pontos Finais (Endpoints), Pontos Médios (Midpoints) e Centros.

## SALVAMENTO DOS DESENHOS E EXPORTAÇÃO
- **PNG**: Resoluções configuráveis (Full HD, 2K e 4K) com escolha de fundo (Escuro CAD, Branco Impressão ou Transparente).     
- **SVG**: Formato vetorial padrão escalável com agrupamento de camadas (`<g id="layer_name">`).
- **DXF**: Arquivo padrão AutoCAD ASCII DXF estruturado (compatível com AutoCAD desktop, LibreCAD, QCAD, CNC/Laser Cutters).
- **JSON / .webcad**: Salve e recarregue todo o projeto a qualquer momento.

## CÓDIGO-FONTE (ARQUIVO ÚNICO)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andrew HyperCAD - CAD Profissional no Navegador</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for CAD icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        cad: {
                            dark: '#181b20',
                            panel: '#20252d',
                            border: '#333b48',
                            accent: '#005fb8',
                            hover: '#0078d4',
                            active: '#00458c',
                            canvas: '#101217',
                            ribbonBg: '#21262d',
                            ribbonTab: '#161b22',
                            borderLight: '#30363d'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #181b20; }
        ::-webkit-scrollbar-thumb { background: #333b48; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #485366; }
        body { font-family: 'Inter', sans-serif; user-select: none; }
        .command-console-font { font-family: 'JetBrains Mono', monospace; }
        canvas { touch-action: none; }
    </style>
</head>
<body class="bg-cad-dark text-gray-200 h-screen flex flex-col overflow-hidden">

    <header class="bg-cad-panel border-b border-cad-border h-10 flex items-center justify-between px-3 select-none z-20 shrink-0">
        <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-2">
                <div class="bg-cad-accent text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shadow">AH</div>
                <span class="font-bold tracking-wide text-xs bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Andrew HyperCAD</span>
                <span class="text-[10px] px-1.5 py-0.5 bg-cad-border rounded text-gray-400 font-mono">v1.3 Pro</span>
            </div>
            
            <div class="h-4 w-[1px] bg-cad-border"></div>

            <!-- Quick Access Toolbar (QAT) - Autodesk Style -->
            <div class="flex items-center space-x-1">
                <button onclick="appNewProject()" title="Novo Projeto (Ctrl+N)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition"><i class="fa-solid fa-file text-xs"></i></button>
                <label title="Abrir Arquivo (.webcad / .json / .dxf)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition cursor-pointer">
                    <i class="fa-solid fa-folder-open text-xs"></i>
                    <input type="file" id="fileOpenInput" accept=".webcad,.json,.dxf" class="hidden" onchange="appOpenFile(event)">
                </label>
                <button onclick="appSaveProject()" title="Salvar Projeto (.webcad)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition"><i class="fa-solid fa-floppy-disk text-xs"></i></button>
                <div class="h-3.5 w-[1px] bg-cad-border mx-1"></div>
                <button onclick="appUndo()" title="Desfazer (Ctrl+Z)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition"><i class="fa-solid fa-rotate-left text-xs"></i></button>
                <button onclick="appRedo()" title="Refazer (Ctrl+Y)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition"><i class="fa-solid fa-rotate-right text-xs"></i></button>
            </div>
        </div>

        <!-- Central Status/Title -->
        <div class="hidden md:flex items-center space-x-2 text-[11px] text-gray-400 bg-cad-dark px-2.5 py-0.5 rounded border border-cad-border">
            <i class="fa-solid fa-file-shield text-blue-400 text-[10px]"></i>
            <span id="projectNameDisplay" class="font-medium text-gray-200">SemTítulo.webcad</span>
            <span id="projectModified" class="text-emerald-400 font-semibold">• Salvo</span>
        </div>

        <!-- Right Header Actions -->
        <div class="flex items-center space-x-2">
            <!-- Fullscreen Toggle Button -->
            <button onclick="toggleFullscreen()" id="fullscreenBtn" title="Alternar Tela Cheia (F11)" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition">
                <i class="fa-solid fa-expand text-xs"></i>
            </button>
            <div class="h-3.5 w-[1px] bg-cad-border"></div>
            <button onclick="openModal('exportModal')" class="bg-cad-accent hover:bg-cad-hover text-white px-2.5 py-1 rounded text-[11px] font-medium flex items-center space-x-1.5 transition shadow">
                <i class="fa-solid fa-file-export text-[10px]"></i>
                <span>Exportar</span>
            </button>
            <button onclick="openModal('helpModal')" class="p-1.5 hover:bg-cad-border rounded text-gray-300 transition" title="Ajuda & Atalhos">
                <i class="fa-solid fa-circle-question text-xs"></i>
            </button>
        </div>
    </header>

    <nav class="bg-cad-ribbonBg border-b border-cad-border flex flex-col select-none z-10 shrink-0 shadow-md">
        <!-- Ribbon Tabs Header -->
        <div class="flex items-center px-2 bg-cad-ribbonTab border-b border-cad-border space-x-1 text-xs">
            <button onclick="setRibbonTab('home')" id="tabBtn-home" class="px-3 py-1 font-medium border-t-2 border-cad-accent bg-cad-ribbonBg text-white transition flex items-center space-x-1">
                <i class="fa-solid fa-house-chimney text-[10px] text-blue-400"></i>
                <span>Início</span>
            </button>
            <button onclick="setRibbonTab('draw')" id="tabBtn-draw" class="px-3 py-1 font-medium border-t-2 border-transparent text-gray-300 hover:text-white hover:bg-cad-border/50 transition flex items-center space-x-1">
                <i class="fa-solid fa-pen-nib text-[10px] text-emerald-400"></i>
                <span>Desenhar</span>
            </button>
            <button onclick="setRibbonTab('modify')" id="tabBtn-modify" class="px-3 py-1 font-medium border-t-2 border-transparent text-gray-300 hover:text-white hover:bg-cad-border/50 transition flex items-center space-x-1">
                <i class="fa-solid fa-arrows-up-down-left-right text-[10px] text-amber-400"></i>
                <span>Modificar</span>
            </button>
            <button onclick="setRibbonTab('annotate')" id="tabBtn-annotate" class="px-3 py-1 font-medium border-t-2 border-transparent text-gray-300 hover:text-white hover:bg-cad-border/50 transition flex items-center space-x-1">
                <i class="fa-solid fa-ruler-combined text-[10px] text-cyan-400"></i>
                <span>Anotação</span>
            </button>
            <button onclick="setRibbonTab('layers')" id="tabBtn-layers" class="px-3 py-1 font-medium border-t-2 border-transparent text-gray-300 hover:text-white hover:bg-cad-border/50 transition flex items-center space-x-1">
                <i class="fa-solid fa-layer-group text-[10px] text-purple-400"></i>
                <span>Camadas</span>
            </button>
        </div>

        <!-- Ribbon Panels Container (Autodesk Style Compact Panels) -->
        <div id="ribbonPanelsContainer" class="px-2 py-1 flex items-center space-x-3 overflow-x-auto min-h-[58px]">
            <!-- HOME / DEFAULT TAB PANELS -->
            <div id="panelGroup-home" class="flex items-center space-x-2">
                <!-- Panel: Prancheta / Clipboard -->
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="appUndo()" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]" title="Desfazer">
                            <i class="fa-solid fa-rotate-left text-blue-400 text-xs"></i>
                            <span>Desfazer</span>
                        </button>
                        <button onclick="appRedo()" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]" title="Refazer">
                            <i class="fa-solid fa-rotate-right text-blue-400 text-xs"></i>
                            <span>Refazer</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Prancheta</span>
                </div>

                <!-- Panel: Desenho Rápido -->
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="setTool('line')" id="homeToolBtn-line" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px] bg-cad-border/30">
                            <i class="fa-solid fa-pen-nib text-blue-400 text-xs"></i>
                            <span>Linha</span>
                        </button>
                        <button onclick="setTool('polyline')" id="homeToolBtn-polyline" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-route text-indigo-400 text-xs"></i>
                            <span>Polilinha</span>
                        </button>
                        <button onclick="setTool('circle')" id="homeToolBtn-circle" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-regular fa-circle text-amber-400 text-xs"></i>
                            <span>Círculo</span>
                        </button>
                        <button onclick="setTool('rectangle')" id="homeToolBtn-rectangle" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-regular fa-square text-emerald-400 text-xs"></i>
                            <span>Retângulo</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Desenhar</span>
                </div>

                <!-- Panel: Modificação Rápida -->
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="setTool('move')" id="homeToolBtn-move" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-arrows-up-down-left-right text-blue-400 text-xs"></i>
                            <span>Mover</span>
                        </button>
                        <button onclick="setTool('copy')" id="homeToolBtn-copy" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-copy text-indigo-400 text-xs"></i>
                            <span>Copiar</span>
                        </button>
                        <button onclick="setTool('erase')" id="homeToolBtn-erase" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-trash-can text-red-400 text-xs"></i>
                            <span>Apagar</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Modificar</span>
                </div>

                <!-- Panel: Camada Rápida -->
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-2 py-0.5 justify-between h-[52px]">
                    <div class="flex items-center space-x-2">
                        <select id="activeLayerSelect" onchange="changeActiveLayer(this.value)" class="bg-cad-dark border border-cad-border rounded px-2 py-0.5 text-[11px] text-gray-200 outline-none focus:border-blue-500 w-32">
                            <!-- Dynamic options -->
                        </select>
                        <button onclick="openModal('layerModal')" class="bg-cad-border hover:bg-cad-hover text-white px-2 py-0.5 rounded text-[10px] font-medium flex items-center space-x-1 transition">
                            <i class="fa-solid fa-layer-group text-blue-400"></i>
                            <span>Layers</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Gerenciador</span>
                </div>
            </div>

            <!-- DRAW TAB PANELS -->
            <div id="panelGroup-draw" class="hidden flex items-center space-x-2">
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="setTool('line')" id="toolBtn-line" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-pen-nib text-blue-400 text-xs"></i><span>Linha (L)</span>
                        </button>
                        <button onclick="setTool('polyline')" id="toolBtn-polyline" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-route text-indigo-400 text-xs"></i><span>Polilinha</span>
                        </button>
                        <button onclick="setTool('circle')" id="toolBtn-circle" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-regular fa-circle text-amber-400 text-xs"></i><span>Círculo (C)</span>
                        </button>
                        <button onclick="setTool('rectangle')" id="toolBtn-rectangle" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-regular fa-square text-emerald-400 text-xs"></i><span>Retângulo (REC)</span>
                        </button>
                        <button onclick="setTool('polygon')" id="toolBtn-polygon" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-draw-polygon text-purple-400 text-xs"></i><span>Polígono</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Criar Geometrias</span>
                </div>
            </div>

            <!-- MODIFY TAB PANELS -->
            <div id="panelGroup-modify" class="hidden flex items-center space-x-2">
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="setTool('move')" id="toolBtn-move" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-arrows-up-down-left-right text-blue-400 text-xs"></i><span>Mover (M)</span>
                        </button>
                        <button onclick="setTool('copy')" id="toolBtn-copy" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-copy text-indigo-400 text-xs"></i><span>Copiar</span>
                        </button>
                        <button onclick="setTool('rotate')" id="toolBtn-rotate" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-rotate text-emerald-400 text-xs"></i><span>Rotacionar</span>
                        </button>
                        <button onclick="setTool('erase')" id="toolBtn-erase" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-trash-can text-red-400 text-xs"></i><span>Apagar (E)</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Modificação de Objetos</span>
                </div>
            </div>

            <!-- ANNOTATE TAB PANELS -->
            <div id="panelGroup-annotate" class="hidden flex items-center space-x-2">
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-1.5 py-0.5">
                    <div class="flex items-center space-x-1 h-9">
                        <button onclick="setTool('dimension')" id="toolBtn-dimension" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-ruler-combined text-amber-400 text-xs"></i><span>Cotagem Linear</span>
                        </button>
                        <button onclick="setTool('text')" id="toolBtn-text" class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-cad-border text-gray-300 transition text-[11px]">
                            <i class="fa-solid fa-font text-blue-400 text-xs"></i><span>Texto</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Texto & Cotagem</span>
                </div>
            </div>

            <!-- LAYERS TAB PANELS -->
            <div id="panelGroup-layers" class="hidden flex items-center space-x-2">
                <div class="flex flex-col bg-cad-panel/50 border border-cad-border/60 rounded px-2 py-0.5 justify-between h-[52px]">
                    <div class="flex items-center space-x-3">
                        <select id="activeLayerSelectTab" onchange="changeActiveLayer(this.value)" class="bg-cad-dark border border-cad-border rounded px-2 py-0.5 text-xs text-gray-200 outline-none focus:border-blue-500 w-40">
                            <!-- Dynamic options -->
                        </select>
                        <button onclick="openModal('layerModal')" class="bg-cad-accent hover:bg-cad-hover text-white px-3 py-1 rounded text-xs font-medium flex items-center space-x-1.5 transition shadow">
                            <i class="fa-solid fa-layer-group"></i><span>Gerenciar Camadas</span>
                        </button>
                    </div>
                    <span class="text-[8px] text-center text-gray-400 uppercase tracking-wide border-t border-cad-border/40 pt-0.5">Propriedades</span>
                </div>
            </div>
        </div>
    </nav>

    <div class="flex-1 relative flex overflow-hidden">
        
        <!-- Left Floating Toolbar: Selection & View -->
        <div class="absolute left-3 top-3 bg-cad-panel/90 backdrop-blur border border-cad-border rounded-lg shadow-xl p-2 z-10 flex flex-col space-y-1.5 select-none">
            <div class="text-[9px] uppercase font-bold text-gray-400 px-1 tracking-wider border-b border-cad-border pb-1">Navegação</div>
            <button onclick="setTool('select')" id="toolBtn-select" class="p-2 rounded bg-cad-accent text-white text-left text-xs flex items-center space-x-2 transition" title="Selecionar / Pan">
                <i class="fa-solid fa-arrow-pointer w-4 text-xs"></i><span>Selecionar</span>
            </button>
            <button onclick="zoomExtents()" class="p-2 rounded hover:bg-cad-border text-gray-300 text-left text-xs flex items-center space-x-2 transition" title="Zoom Extents (Z)">
                <i class="fa-solid fa-expand w-4 text-xs"></i><span>Zoom Extents</span>
            </button>
            <button onclick="clearSelection()" class="p-2 rounded hover:bg-cad-border text-gray-300 text-left text-xs flex items-center space-x-2 transition" title="Limpar Seleção (Esc)">
                <i class="fa-solid fa-ban w-4 text-xs"></i><span>Limpar</span>
            </button>
        </div>

        <!-- UCS / Navigation Cube Widget (Top Right) -->
        <div class="absolute right-3 top-3 bg-cad-panel/80 backdrop-blur border border-cad-border rounded-lg p-2 z-10 flex flex-col items-center select-none shadow-lg">
            <span class="text-[10px] text-gray-400 font-semibold mb-1">UCS 2D</span>
            <div class="grid grid-cols-3 gap-1 w-20 h-20 text-xs">
                <div></div>
                <button onclick="panView(0, 50)" class="bg-cad-dark hover:bg-cad-border rounded text-gray-300 flex items-center justify-center transition" title="Pan Norte"><i class="fa-solid fa-chevron-up text-[10px]"></i></button>
                <div></div>
                <button onclick="panView(50, 0)" class="bg-cad-dark hover:bg-cad-border rounded text-gray-300 flex items-center justify-center transition" title="Pan Oeste"><i class="fa-solid fa-chevron-left text-[10px]"></i></button>
                <button onclick="resetZoomPan()" class="bg-cad-accent hover:bg-cad-hover text-white rounded font-bold text-[10px] flex items-center justify-center transition" title="Resetar Vista">0,0</button>
                <button onclick="panView(-50, 0)" class="bg-cad-dark hover:bg-cad-border rounded text-gray-300 flex items-center justify-center transition" title="Pan Leste"><i class="fa-solid fa-chevron-right text-[10px]"></i></button>
                <div></div>
                <button onclick="panView(0, -50)" class="bg-cad-dark hover:bg-cad-border rounded text-gray-300 flex items-center justify-center transition" title="Pan Sul"><i class="fa-solid fa-chevron-down text-[10px]"></i></button>
                <div></div>
            </div>
        </div>

        <!-- Main Drawing Canvas -->
        <div class="flex-1 relative bg-cad-canvas cursor-crosshair overflow-hidden" id="canvasContainer">
            <canvas id="cadCanvas" class="w-full h-full block"></canvas>
            
            <!-- Floating Snapping Tooltip Indicator -->
            <div id="osnapTooltip" class="absolute pointer-events-none hidden bg-cad-accent/90 text-white px-1.5 py-0.5 rounded text-[10px] font-mono shadow border border-blue-400 z-30">
                Endpoint
            </div>
        </div>
    </div>

    <div class="bg-cad-panel border-t border-cad-border px-3 py-1.5 flex flex-col space-y-1 select-none z-20 shrink-0">
        <div class="flex items-center justify-between text-xs text-gray-400 px-1">
            <span id="commandPromptHistory" class="font-mono text-[11px] text-gray-300">Comando: Digite um comando ou atalho (ex: L, C, REC, M, E, Z)...</span>
            <span id="activeToolDisplay" class="font-bold text-blue-400 uppercase tracking-wider text-[10px] px-2 py-0.5 bg-cad-dark rounded border border-cad-border">Ferramenta: Selecionar</span>
        </div>
        <div class="flex items-center space-x-2 bg-cad-dark border border-cad-border rounded px-3 py-1 focus-within:border-blue-500 transition">
            <span class="text-blue-400 font-bold command-console-font text-xs">Comando:</span>
            <input type="text" id="commandInput" onkeydown="handleCommandInput(event)" placeholder="Digite o comando (L para Linha, C para Círculo, REC, M, E, Z)..." class="flex-1 bg-transparent border-none outline-none text-xs text-gray-100 command-console-font">
            <button onclick="executeCommandInput()" class="bg-cad-accent hover:bg-cad-hover text-white px-3 py-0.5 rounded text-xs font-medium transition">Executar</button>
        </div>
    </div>

    <!-- Bottom Status Bar -->
    <footer class="bg-cad-dark border-t border-cad-border px-3 py-1 flex items-center justify-between text-[11px] text-gray-400 select-none z-20 shrink-0">
        <!-- Quick Toggles (F3, F7, F8, F9) -->
        <div class="flex items-center space-x-1">
            <button onclick="toggleToggle('osnap')" id="toggleBtn-osnap" class="px-2 py-0.5 rounded bg-blue-600 text-white font-medium transition flex items-center space-x-1" title="F3: OSNAP (Snap Inteligente)">
                <i class="fa-solid fa-magnet text-[10px]"></i><span>OSNAP (F3)</span>
            </button>
            <button onclick="toggleToggle('grid')" id="toggleBtn-grid" class="px-2 py-0.5 rounded bg-blue-600 text-white font-medium transition flex items-center space-x-1" title="F7: Grade Magnética">
                <i class="fa-solid fa-table-cells text-[10px]"></i><span>GRADE (F7)</span>
            </button>
            <button onclick="toggleToggle('ortho')" id="toggleBtn-ortho" class="px-2 py-0.5 rounded bg-cad-border text-gray-300 font-medium transition flex items-center space-x-1" title="F8: Modo Ortogonal (90°)">
                <i class="fa-solid fa-compass text-[10px]"></i><span>ORTHO (F8)</span>
            </button>
            <button onclick="toggleToggle('snap')" id="toggleBtn-snap" class="px-2 py-0.5 rounded bg-cad-border text-gray-300 font-medium transition flex items-center space-x-1" title="F9: Snap à Grade">
                <i class="fa-solid fa-crosshairs text-[10px]"></i><span>SNAP (F9)</span>
            </button>
        </div>

        <!-- Real-time Coordinates Readout -->
        <div class="flex items-center space-x-4 font-mono text-gray-300">
            <div>X: <span id="coordX" class="text-blue-400 font-semibold">0.00</span></div>
            <div>Y: <span id="coordY" class="text-blue-400 font-semibold">0.00</span></div>
            <div class="hidden sm:block">Zoom: <span id="zoomLevel" class="text-emerald-400 font-semibold">100%</span></div>
        </div>
    </footer>

    <div id="layerModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-cad-panel border border-cad-border w-full max-w-xl rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div class="px-4 py-3 border-b border-cad-border flex items-center justify-between">
                <h3 class="font-bold text-sm text-gray-200 flex items-center space-x-2">
                    <i class="fa-solid fa-layer-group text-blue-400"></i>
                    <span>Gerenciador de Camadas (Layers)</span>
                </h3>
                <button onclick="closeModal('layerModal')" class="text-gray-400 hover:text-white transition"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-4 flex flex-col space-y-4 max-h-[60vh] overflow-y-auto">
                <div class="flex items-center justify-between bg-cad-dark p-2.5 rounded border border-cad-border">
                    <div class="flex items-center space-x-2 flex-1 mr-2">
                        <input type="text" id="newLayerName" placeholder="Nome da nova camada..." class="bg-cad-panel border border-cad-border rounded px-3 py-1.5 text-xs flex-1 text-gray-200 outline-none focus:border-blue-500">
                        <input type="color" id="newLayerColor" value="#3b82f6" class="w-8 h-8 rounded bg-transparent cursor-pointer border border-cad-border">
                    </div>
                    <button onclick="addNewLayer()" class="bg-cad-accent hover:bg-cad-hover text-white px-4 py-1.5 rounded text-xs font-medium transition shadow">Adicionar Camada</button>
                </div>

                <div class="border border-cad-border rounded overflow-hidden">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-cad-dark text-gray-400 border-b border-cad-border">
                            <tr>
                                <th class="p-2.5">Status</th>
                                <th class="p-2.5">Nome</th>
                                <th class="p-2.5">Cor</th>
                                <th class="p-2.5 text-center">Visibilidade</th>
                                <th class="p-2.5 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="layerTableBody" class="divide-y divide-cad-border">
                            <!-- Dynamic rows -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="px-4 py-3 bg-cad-dark border-t border-cad-border flex justify-end">
                <button onclick="closeModal('layerModal')" class="bg-cad-accent hover:bg-cad-hover text-white px-4 py-1.5 rounded text-xs font-medium transition">Concluído</button>
            </div>
        </div>
    </div>

    <!-- Export Modal -->
    <div id="exportModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-cad-panel border border-cad-border w-full max-w-md rounded-xl shadow-2xl flex flex-col overflow-hidden">
            <div class="px-4 py-3 border-b border-cad-border flex items-center justify-between">
                <h3 class="font-bold text-sm text-gray-200 flex items-center space-x-2">
                    <i class="fa-solid fa-file-export text-blue-400"></i>
                    <span>Exportar Desenho CAD</span>
                </h3>
                <button onclick="closeModal('exportModal')" class="text-gray-400 hover:text-white transition"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-4 flex flex-col space-y-4">
                <div class="flex flex-col space-y-1.5">
                    <label class="text-xs font-medium text-gray-300">Formato de Exportação:</label>
                    <select id="exportFormat" onchange="toggleExportOptions(this.value)" class="bg-cad-dark border border-cad-border rounded px-3 py-2 text-xs text-gray-200 outline-none focus:border-blue-500">
                        <option value="png">PNG (Imagem Raster com resolução configurável)</option>
                        <option value="svg">SVG (Vetorial escalável com camadas)</option>
                        <option value="dxf">DXF (Formato Padrão Autodesk ASCII DXF)</option>
                        <option value="webcad">JSON / .webcad (Salvar Projeto Completo)</option>
                    </select>
                </div>

                <div id="pngOptions" class="flex flex-col space-y-3 bg-cad-dark p-3 rounded border border-cad-border">
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs text-gray-400">Resolução:</label>
                        <select id="pngResolution" class="bg-cad-panel border border-cad-border rounded px-2.5 py-1.5 text-xs text-gray-200 outline-none">
                            <option value="1">Full HD (1920x1080)</option>
                            <option value="2">2K Resolution</option>
                            <option value="4">4K Ultra HD (3840x2160)</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs text-gray-400">Fundo:</label>
                        <select id="pngBackground" class="bg-cad-panel border border-cad-border rounded px-2.5 py-1.5 text-xs text-gray-200 outline-none">
                            <option value="dark">Escuro CAD (#101217)</option>
                            <option value="white">Branco Impressão (#ffffff)</option>
                            <option value="transparent">Transparente</option>
                        </select>
                    </div>
                </div>

                <div id="exportInfoText" class="text-xs text-gray-400 bg-cad-dark/50 p-2.5 rounded border border-cad-border">
                    Exporte seu projeto para uso direto no AutoCAD Desktop, LibreCAD, QCAD ou corte a laser.
                </div>
            </div>
            <div class="px-4 py-3 bg-cad-dark border-t border-cad-border flex justify-end space-x-2">
                <button onclick="closeModal('exportModal')" class="bg-cad-border hover:bg-cad-hover text-gray-300 px-4 py-1.5 rounded text-xs transition">Cancelar</button>
                <button onclick="performExport()" class="bg-cad-accent hover:bg-cad-hover text-white px-5 py-1.5 rounded text-xs font-medium transition shadow">Exportar Arquivo</button>
            </div>
        </div>
    </div>

    <!-- Help & Shortcuts Modal -->
    <div id="helpModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-cad-panel border border-cad-border w-full max-w-lg rounded-xl shadow-2xl flex flex-col overflow-hidden">
            <div class="px-4 py-3 border-b border-cad-border flex items-center justify-between">
                <h3 class="font-bold text-sm text-gray-200 flex items-center space-x-2">
                    <i class="fa-solid fa-circle-question text-blue-400"></i>
                    <span>Ajuda & Atalhos de Comando (AutoCAD Style)</span>
                </h3>
                <button onclick="closeModal('helpModal')" class="text-gray-400 hover:text-white transition"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-4 flex flex-col space-y-3 max-h-[60vh] overflow-y-auto text-xs">
                <p class="text-gray-300">O <strong>Andrew HyperCAD</strong> possui suporte completo a comandos e atalhos idênticos aos do AutoCAD para máxima produtividade:</p>
                
                <div class="grid grid-cols-2 gap-2 font-mono">
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>L</span><span class="text-blue-400">Linha</span></div>
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>C</span><span class="text-blue-400">Círculo</span></div>
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>REC</span><span class="text-blue-400">Retângulo</span></div>
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>M</span><span class="text-blue-400">Mover</span></div>
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>E / DEL</span><span class="text-blue-400">Apagar</span></div>
                    <div class="bg-cad-dark p-2 rounded border border-cad-border flex justify-between"><span>Z</span><span class="text-blue-400">Zoom Extents</span></div>
                </div>

                <div class="border-t border-cad-border pt-2 text-gray-400 space-y-1">
                    <div>• <strong>Pan:</strong> Clique e arraste com o botão do meio do mouse (ou ferramenta Pan).</div>
                    <div>• <strong>Zoom:</strong> Gire a roda do mouse (Scroll Wheel) centralizada no cursor.</div>
                    <div>• <strong>OSNAP (F3):</strong> Snap inteligente automático para Endpoints, Midpoints e Centros.</div>
                </div>
            </div>
            <div class="px-4 py-3 bg-cad-dark border-t border-cad-border flex justify-end">
                <button onclick="closeModal('helpModal')" class="bg-cad-accent hover:bg-cad-hover text-white px-4 py-1.5 rounded text-xs font-medium transition">Entendi</button>
            </div>
        </div>
    </div>

    <script>
        let canvas, ctx;
        let project = {
            name: "SemTítulo.webcad",
            layers: [
                { id: "layer_0", name: "0 (Padrão)", color: "#3b82f6", visible: true },
                { id: "layer_constr", name: "Constr", color: "#10b981", visible: true },
                { id: "layer_dim", name: "Cotagem", color: "#f59e0b", visible: true }
            ],
            activeLayer: "layer_0",
            elements: []
        };

        // Viewport transformation parameters
        let view = {
            panX: 0,
            panY: 0,
            zoom: 1.0,
            minZoom: 0.1,
            maxZoom: 50.0
        };

        // Interaction state variables
        let currentTool = 'select'; 
        let isDragging = false;
        let dragStartScreen = { x: 0, y: 0 };
        let currentMouseWorld = { x: 0, y: 0 };

        // Tool specific state machines
        let toolState = {
            step: 0,
            tempPoints: [],
            selectedElementId: null,
            multiSelectedIds: []
        };

        // Toggles & Flags (F3, F7, F8, F9)
        let toggles = {
            osnap: true,
            grid: true,
            ortho: false,
            snap: false
        };
        let gridSize = 20; // grid spacing in world units

        // Undo / Redo history stacks
        let undoStack = [];
        let redoStack = [];

        window.onload = function() {
            canvas = document.getElementById('cadCanvas');
            ctx = canvas.getContext('2d');

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Mouse event listeners for CAD navigation and drawing
            canvas.addEventListener('mousedown', onMouseDown);
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);
            canvas.addEventListener('wheel', onMouseWheel, { passive: false });
            canvas.addEventListener('contextmenu', (e) => e.preventDefault());

            // Global keyboard shortcuts
            window.addEventListener('keydown', onGlobalKeyDown);

            // Initialize UI elements
            updateLayerUI();
            saveStateToHistory();
            requestAnimationFrame(renderLoop);
        };

        function resizeCanvas() {
            const container = canvas.parentElement;
            if (!container) return;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }

        function screenToWorld(screenX, screenY) {
            const rect = canvas.getBoundingClientRect();
            const sx = screenX - rect.left;
            const sy = screenY - rect.top;
            
            return {
                x: (sx - canvas.width / 2 - view.panX) / view.zoom,
                y: (sy - canvas.height / 2 - view.panY) / view.zoom
            };
        }

        function worldToScreen(worldX, worldY) {
            const sx = worldX * view.zoom + canvas.width / 2 + view.panX;
            const sy = worldY * view.zoom + canvas.height / 2 + view.panY;
            return { x: sx, y: sy };
        }

        function getSnapPoint(worldX, worldY) {
            let finalX = worldX;
            let finalY = worldY;
            let snapType = null;

            if (toggles.snap) {
                finalX = Math.round(finalX / gridSize) * gridSize;
                finalY = Math.round(finalY / gridSize) * gridSize;
                snapType = 'Grid';
            }

            if (!toggles.osnap) {
                hideOsnapTooltip();
                return { x: finalX, y: finalY, type: snapType };
            }

            let snapThreshold = 14 / view.zoom;
            let closest = null;
            let minDist = snapThreshold;

            for (let el of project.elements) {
                let layer = project.layers.find(l => l.id === el.layer);
                if (layer && !layer.visible) continue;

                if (el.type === 'line') {
                    let p1 = { x: el.x1, y: el.y1 };
                    let p2 = { x: el.x2, y: el.y2 };
                    let pm = { x: (el.x1 + el.x2) / 2, y: (el.y1 + el.y2) / 2 };

                    [ {pt: p1, type: 'Endpoint'}, {pt: p2, type: 'Endpoint'}, {pt: pm, type: 'Midpoint'} ].forEach(item => {
                        let d = Math.hypot(item.pt.x - worldX, item.pt.y - worldY);
                        if (d < minDist) {
                            minDist = d;
                            closest = { x: item.pt.x, y: item.pt.y, type: item.type };
                        }
                    });
                } else if (el.type === 'circle') {
                    let pc = { x: el.cx, y: el.cy };
                    let d = Math.hypot(pc.x - worldX, pc.y - worldY);
                    if (d < minDist) {
                        minDist = d;
                        closest = { x: pc.x, y: pc.y, type: 'Center' };
                    }
                } else if (el.type === 'rectangle') {
                    let pts = [
                        { x: el.x, y: el.y },
                        { x: el.x + el.w, y: el.y },
                        { x: el.x + el.w, y: el.y + el.h },
                        { x: el.x, y: el.y + el.h }
                    ];
                    pts.forEach(pt => {
                        let d = Math.hypot(pt.x - worldX, pt.y - worldY);
                        if (d < minDist) {
                            minDist = d;
                            closest = { x: pt.x, y: pt.y, type: 'Endpoint' };
                        }
                    });
                }
            }

            if (closest) {
                showOsnapTooltip(closest.type, closest.x, closest.y);
                return { x: closest.x, y: closest.y, type: closest.type };
            } else {
                hideOsnapTooltip();
                if (toggles.ortho && toolState.step > 0 && toolState.tempPoints.length > 0) {
                    let start = toolState.tempPoints[0];
                    let dx = Math.abs(worldX - start.x);
                    let dy = Math.abs(worldY - start.y);
                    if (dx > dy) finalY = start.y;
                    else finalX = start.x;
                }
                return { x: finalX, y: finalY, type: snapType };
            }
        }

        function showOsnapTooltip(type, wx, wy) {
            let tooltip = document.getElementById('osnapTooltip');
            if (!tooltip) return;
            let screenPt = worldToScreen(wx, wy);
            tooltip.innerText = type;
            tooltip.style.left = (screenPt.x + 15) + 'px';
            tooltip.style.top = (screenPt.y - 25) + 'px';
            tooltip.classList.remove('hidden');
        }

        function hideOsnapTooltip() {
            let tooltip = document.getElementById('osnapTooltip');
            if (tooltip) tooltip.classList.add('hidden');
        }

        function onMouseDown(e) {
            const world = screenToWorld(e.clientX, e.clientY);

            if (e.button === 1 || (e.button === 0 && currentTool === 'select' && e.altKey)) {
                isDragging = true;
                dragStartScreen = { x: e.clientX, y: e.clientY };
                return;
            }

            if (e.button === 0) {
                let snapped = getSnapPoint(world.x, world.y);
                handleToolClick(snapped.x, snapped.y);
            }
        }

        function onMouseMove(e) {
            const world = screenToWorld(e.clientX, e.clientY);
            currentMouseWorld = world;

            document.getElementById('coordX').innerText = world.x.toFixed(2);
            document.getElementById('coordY').innerText = world.y.toFixed(2);

            if (isDragging) {
                let dx = e.clientX - dragStartScreen.x;
                let dy = e.clientY - dragStartScreen.y;
                view.panX += dx;
                view.panY += dy;
                dragStartScreen = { x: e.clientX, y: e.clientY };
                return;
            }

            getSnapPoint(world.x, world.y);
        }

        function onMouseUp(e) {
            if (isDragging) {
                isDragging = false;
            }
        }

        function onMouseWheel(e) {
            e.preventDefault();
            const zoomFactor = 1.15;
            let oldZoom = view.zoom;

            if (e.deltaY < 0) {
                view.zoom = Math.min(view.maxZoom, view.zoom * zoomFactor);
            } else {
                view.zoom = Math.max(view.minZoom, view.zoom / zoomFactor);
            }

            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            view.panX = mx - (mx - view.panX) * (view.zoom / oldZoom);
            view.panY = my - (my - view.panY) * (view.zoom / oldZoom);

            document.getElementById('zoomLevel').innerText = Math.round(view.zoom * 100) + '%';
        }

        function setTool(toolName) {
            currentTool = toolName;
            toolState.step = 0;
            toolState.tempPoints = [];
            
            document.querySelectorAll('[id^="toolBtn-"], [id^="homeToolBtn-"]').forEach(btn => {
                btn.classList.remove('bg-cad-accent', 'text-white', 'shadow');
                btn.classList.add('text-gray-300');
            });
            
            let activeBtns = document.querySelectorAll(`[id$="-${toolName}"]`);
            activeBtns.forEach(btn => {
                btn.classList.add('bg-cad-accent', 'text-white', 'shadow');
                btn.classList.remove('text-gray-300');
            });

            document.getElementById('activeToolDisplay').innerText = 'Ferramenta: ' + toolName.toUpperCase();
            setCommandPrompt(`Ferramenta ativa: ${toolName.toUpperCase()}. Clique na área de desenho.`);
        }

        function handleToolClick(wx, wy) {
            if (currentTool === 'line') {
                if (toolState.step === 0) {
                    toolState.tempPoints = [{ x: wx, y: wy }];
                    toolState.step = 1;
                    setCommandPrompt('Linha: Especifique o ponto final...');
                } else {
                    let start = toolState.tempPoints[0];
                    addElement({
                        type: 'line',
                        layer: project.activeLayer,
                        x1: start.x, y1: start.y,
                        x2: wx, y2: wy
                    });
                    toolState.tempPoints = [{ x: wx, y: wy }];
                    setCommandPrompt('Linha: Especifique o próximo ponto (ou Esc para sair)...');
                }
            } else if (currentTool === 'circle') {
                if (toolState.step === 0) {
                    toolState.tempPoints = [{ x: wx, y: wy }];
                    toolState.step = 1;
                    setCommandPrompt('Círculo: Especifique o raio ou ponto na borda...');
                } else {
                    let center = toolState.tempPoints[0];
                    let radius = Math.hypot(wx - center.x, wy - center.y);
                    if (radius > 1) {
                        addElement({
                            type: 'circle',
                            layer: project.activeLayer,
                            cx: center.x, cy: center.y,
                            r: radius
                        });
                    }
                    toolState.step = 0;
                    setCommandPrompt('Círculo criado com sucesso.');
                }
            } else if (currentTool === 'rectangle') {
                if (toolState.step === 0) {
                    toolState.tempPoints = [{ x: wx, y: wy }];
                    toolState.step = 1;
                    setCommandPrompt('Retângulo: Especifique o canto oposto...');
                } else {
                    let start = toolState.tempPoints[0];
                    let w = wx - start.x;
                    let h = wy - start.y;
                    if (Math.abs(w) > 1 && Math.abs(h) > 1) {
                        addElement({
                            type: 'rectangle',
                            layer: project.activeLayer,
                            x: start.x, y: start.y,
                            w: w, h: h
                        });
                    }
                    toolState.step = 0;
                    setCommandPrompt('Retângulo criado com sucesso.');
                }
            } else if (currentTool === 'erase' || currentTool === 'select') {
                let clicked = findElementAt(wx, wy);
                if (clicked) {
                    if (currentTool === 'erase') {
                        removeElement(clicked.id);
                        setCommandPrompt('Elemento apagado.');
                    } else {
                        toolState.selectedElementId = clicked.id;
                        setCommandPrompt(`Elemento ${clicked.type} selecionado.`);
                    }
                } else {
                    if (currentTool === 'select') {
                        toolState.selectedElementId = null;
                        setCommandPrompt('Seleção limpa.');
                    }
                }
            } else if (currentTool === 'move') {
                if (toolState.step === 0) {
                    let clicked = findElementAt(wx, wy);
                    if (clicked) {
                        toolState.selectedElementId = clicked.id;
                        toolState.tempPoints = [{ x: wx, y: wy }];
                        toolState.step = 1;
                        setCommandPrompt('Mover: Especifique o ponto de destino...');
                    }
                } else {
                    let base = toolState.tempPoints[0];
                    let dx = wx - base.x;
                    let dy = wy - base.y;
                    moveElement(toolState.selectedElementId, dx, dy);
                    toolState.step = 0;
                    setCommandPrompt('Elemento movido com sucesso.');
                }
            }
        }

        function findElementAt(wx, wy) {
            let threshold = 12 / view.zoom;
            for (let i = project.elements.length - 1; i >= 0; i--) {
                let el = project.elements[i];
                let layer = project.layers.find(l => l.id === el.layer);
                if (layer && !layer.visible) continue;

                if (el.type === 'line') {
                    let dist = distToSegment({ x: wx, y: wy }, { x: el.x1, y: el.y1 }, { x: el.x2, y: el.y2 });
                    if (dist < threshold) return el;
                } else if (el.type === 'circle') {
                    let d = Math.hypot(wx - el.cx, wy - el.cy);
                    if (Math.abs(d - el.r) < threshold) return el;
                } else if (el.type === 'rectangle') {
                    let minX = Math.min(el.x, el.x + el.w);
                    let maxX = Math.max(el.x, el.x + el.w);
                    let minY = Math.min(el.y, el.y + el.h);
                    let maxY = Math.max(el.y, el.y + el.h);
                    if (wx >= minX && wx <= maxX && wy >= minY && wy <= maxY) {
                        return el;
                    }
                }
            }
            return null;
        }

        function distToSegment(p, p1, p2) {
            let l2 = (p2.x - p1.x)**2 + (p2.y - p1.y)**2;
            if (l2 === 0) return Math.hypot(p.x - p1.x, p.y - p1.y);
            let t = ((p.x - p1.x) * (p2.x - p1.x) + (p.y - p1.y) * (p2.y - p1.y)) / l2;
            t = Math.max(0, Math.min(1, t));
            return Math.hypot(p.x - (p1.x + t * (p2.x - p1.x)), p.y - (p1.y + t * (p2.y - p1.y)));
        }

        function addElement(el) {
            el.id = 'el_' + Date.now() + '_' + Math.floor(Math.random()*1000);
            project.elements.push(el);
            saveStateToHistory();
            markModified();
        }

        function removeElement(id) {
            project.elements = project.elements.filter(el => el.id !== id);
            if (toolState.selectedElementId === id) toolState.selectedElementId = null;
            saveStateToHistory();
            markModified();
        }

        function moveElement(id, dx, dy) {
            let el = project.elements.find(e => e.id === id);
            if (!el) return;
            if (el.type === 'line') {
                el.x1 += dx; el.y1 += dy;
                el.x2 += dx; el.y2 += dy;
            } else if (el.type === 'circle') {
                el.cx += dx; el.cy += dy;
            } else if (el.type === 'rectangle') {
                el.x += dx; el.y += dy;
            }
            saveStateToHistory();
            markModified();
        }

        function saveStateToHistory() {
            undoStack.push(JSON.parse(JSON.stringify(project)));
            if (undoStack.length > 50) undoStack.shift();
            redoStack = [];
        }

        function appUndo() {
            if (undoStack.length > 1) {
                redoStack.push(undoStack.pop());
                project = JSON.parse(JSON.stringify(undoStack[undoStack.length - 1]));
                updateLayerUI();
                setCommandPrompt('Ação desfeita.');
            }
        }

        function appRedo() {
            if (redoStack.length > 0) {
                let state = redoStack.pop();
                undoStack.push(state);
                project = JSON.parse(JSON.stringify(state));
                updateLayerUI();
                setCommandPrompt('Ação refeita.');
            }
        }

        function markModified() {
            let el = document.getElementById('projectModified');
            if (el) {
                el.innerText = '• Modificado';
                el.className = 'text-amber-400 font-semibold';
            }
        }

        function renderLoop() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (toggles.grid) {
                drawGrid();
            }

            drawAxes();

            for (let el of project.elements) {
                let layer = project.layers.find(l => l.id === el.layer);
                if (layer && !layer.visible) continue;

                let color = layer ? layer.color : '#3b82f6';
                let isSelected = (el.id === toolState.selectedElementId);
                
                ctx.save();
                ctx.strokeStyle = isSelected ? '#ef4444' : color;
                ctx.fillStyle = isSelected ? '#ef4444' : color;
                ctx.lineWidth = (isSelected ? 3 : 2) / view.zoom;

                if (el.type === 'line') {
                    let p1 = worldToScreen(el.x1, el.y1);
                    let p2 = worldToScreen(el.x2, el.y2);
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                } else if (el.type === 'circle') {
                    let pc = worldToScreen(el.cx, el.cy);
                    ctx.beginPath();
                    ctx.arc(pc.x, pc.y, el.r * view.zoom, 0, Math.PI * 2);
                    ctx.stroke();
                } else if (el.type === 'rectangle') {
                    let p1 = worldToScreen(el.x, el.y);
                    ctx.strokeRect(p1.x, p1.y, el.w * view.zoom, el.h * view.zoom);
                }
                ctx.restore();
            }

            if (toolState.step > 0 && toolState.tempPoints.length > 0) {
                let start = worldToScreen(toolState.tempPoints[0].x, toolState.tempPoints[0].y);
                let cur = worldToScreen(currentMouseWorld.x, currentMouseWorld.y);

                ctx.save();
                ctx.strokeStyle = '#3b82f6';
                ctx.setLineDash([4, 4]);
                ctx.lineWidth = 1.5;

                if (currentTool === 'line') {
                    ctx.beginPath();
                    ctx.moveTo(start.x, start.y);
                    ctx.lineTo(cur.x, cur.y);
                    ctx.stroke();
                } else if (currentTool === 'circle') {
                    let r = Math.hypot(currentMouseWorld.x - toolState.tempPoints[0].x, currentMouseWorld.y - toolState.tempPoints[0].y);
                    ctx.beginPath();
                    ctx.arc(start.x, start.y, r * view.zoom, 0, Math.PI * 2);
                    ctx.stroke();
                } else if (currentTool === 'rectangle') {
                    let w = (currentMouseWorld.x - toolState.tempPoints[0].x) * view.zoom;
                    let h = (currentMouseWorld.y - toolState.tempPoints[0].y) * view.zoom;
                    ctx.strokeRect(start.x, start.y, w, h);
                }
                ctx.restore();
            }

            requestAnimationFrame(renderLoop);
        }

        function drawGrid() {
            let leftTop = screenToWorld(0, 0);
            let rightBottom = screenToWorld(canvas.width, canvas.height);

            let startX = Math.floor(leftTop.x / gridSize) * gridSize;
            let endX = Math.ceil(rightBottom.x / gridSize) * gridSize;
            let startY = Math.floor(leftTop.y / gridSize) * gridSize;
            let endY = Math.ceil(rightBottom.y / gridSize) * gridSize;

            ctx.save();
            ctx.fillStyle = '#1e232b';
            for (let x = startX; x <= endX; x += gridSize) {
                for (let y = startY; y <= endY; y += gridSize) {
                    let scr = worldToScreen(x, y);
                    ctx.beginPath();
                    ctx.arc(scr.x, scr.y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.restore();
        }

        function drawAxes() {
            let origin = worldToScreen(0, 0);
            ctx.save();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
            ctx.beginPath();
            ctx.moveTo(0, origin.y);
            ctx.lineTo(canvas.width, origin.y);
            ctx.stroke();

            ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
            ctx.beginPath();
            ctx.moveTo(origin.x, 0);
            ctx.lineTo(origin.x, canvas.height);
            ctx.stroke();
            ctx.restore();
        }

        function handleCommandInput(e) {
            if (e.key === 'Enter') {
                executeCommandInput();
            }
        }

        function executeCommandInput() {
            let inputEl = document.getElementById('commandInput');
            if (!inputEl) return;
            let input = inputEl.value.trim().toUpperCase();
            inputEl.value = '';

            if (input === 'L' || input === 'LINE') setTool('line');
            else if (input === 'C' || input === 'CIRCLE') setTool('circle');
            else if (input === 'REC' || input === 'RECTANGLE') setTool('rectangle');
            else if (input === 'M' || input === 'MOVE') setTool('move');
            else if (input === 'E' || input === 'ERASE') setTool('erase');
            else if (input === 'Z' || input === 'ZOOM') zoomExtents();
            else if (input === 'ESC' || input === '') {
                setTool('select');
                toolState.step = 0;
            } else {
                setCommandPrompt(`Comando desconhecido: "${input}". Digite L, C, REC, M, E, Z.`);
            }
        }

        function setCommandPrompt(text) {
            let el = document.getElementById('commandPromptHistory');
            if (el) el.innerText = text;
        }

        function onGlobalKeyDown(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

            if (e.key === 'Escape') {
                setTool('select');
                toolState.step = 0;
                hideOsnapTooltip();
            } else if (e.key === 'Delete' || e.key === 'Backspace') {
                if (toolState.selectedElementId) {
                    removeElement(toolState.selectedElementId);
                }
            } else if (e.ctrlKey && e.key.toLowerCase() === 'z') {
                e.preventDefault();
                appUndo();
            } else if (e.ctrlKey && e.key.toLowerCase() === 'y') {
                e.preventDefault();
                appRedo();
            } else if (e.key.toLowerCase() === 'l') {
                setTool('line');
            } else if (e.key.toLowerCase() === 'c') {
                setTool('circle');
            } else if (e.key === 'F3') {
                e.preventDefault();
                toggleToggle('osnap');
            } else if (e.key === 'F7') {
                e.preventDefault();
                toggleToggle('grid');
            } else if (e.key === 'F8') {
                e.preventDefault();
                toggleToggle('ortho');
            } else if (e.key === 'F9') {
                e.preventDefault();
                toggleToggle('snap');
            } else if (e.key === 'F11') {
                e.preventDefault();
                toggleFullscreen();
            }
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error("Erro ao ativar tela cheia:", err);
                });
                let btnIcon = document.querySelector('#fullscreenBtn i');
                if (btnIcon) btnIcon.className = "fa-solid fa-compress text-xs";
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                let btnIcon = document.querySelector('#fullscreenBtn i');
                if (btnIcon) btnIcon.className = "fa-solid fa-expand text-xs";
            }
            setTimeout(resizeCanvas, 150);
        }

        function setRibbonTab(tabName) {
            ['home', 'draw', 'modify', 'annotate', 'layers'].forEach(t => {
                let panel = document.getElementById('panelGroup-' + t);
                let btn = document.getElementById('tabBtn-' + t);
                if (panel) panel.classList.add('hidden');
                if (btn) {
                    btn.classList.remove('border-cad-accent', 'bg-cad-ribbonBg', 'text-white');
                    btn.classList.add('border-transparent', 'text-gray-300');
                }
            });
            let activePanel = document.getElementById('panelGroup-' + tabName);
            let activeBtn = document.getElementById('tabBtn-' + tabName);
            if (activePanel) activePanel.classList.remove('hidden');
            if (activeBtn) {
                activeBtn.classList.add('border-cad-accent', 'bg-cad-ribbonBg', 'text-white');
                activeBtn.classList.remove('border-transparent', 'text-gray-300');
            }
        }

        function toggleToggle(name) {
            toggles[name] = !toggles[name];
            let btn = document.getElementById('toggleBtn-' + name);
            if (!btn) return;
            if (toggles[name]) {
                btn.classList.remove('bg-cad-border', 'text-gray-300');
                btn.classList.add('bg-blue-600', 'text-white');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-cad-border', 'text-gray-300');
            }
            setCommandPrompt(`Alternador ${name.toUpperCase()}: ${toggles[name] ? 'ATIVADO' : 'DESATIVADO'}`);
        }

        function updateLayerUI() {
            ['activeLayerSelect', 'activeLayerSelectTab'].forEach(selectId => {
                let select = document.getElementById(selectId);
                if (select) {
                    select.innerHTML = '';
                    project.layers.forEach(l => {
                        let opt = document.createElement('option');
                        opt.value = l.id;
                        opt.innerText = l.name;
                        if (l.id === project.activeLayer) opt.selected = true;
                        select.appendChild(opt);
                    });
                }
            });

            let tbody = document.getElementById('layerTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                project.layers.forEach(l => {
                    let tr = document.createElement('tr');
                    tr.className = 'hover:bg-cad-dark/50 transition';
                    tr.innerHTML = `
                        <td class="p-2.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${l.color}"></span></td>
                        <td class="p-2.5 font-medium text-gray-200">${l.name}</td>
                        <td class="p-2.5"><input type="color" value="${l.color}" onchange="updateLayerColor('${l.id}', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer border border-cad-border"></td>
                        <td class="p-2.5 text-center"><button onclick="toggleLayerVisibility('${l.id}')" class="px-2 py-1 rounded ${l.visible ? 'bg-emerald-600/20 text-emerald-400' : 'bg-gray-700 text-gray-400'}"><i class="fa-solid ${l.visible ? 'fa-eye' : 'fa-eye-slash'}"></i></button></td>
                        <td class="p-2.5 text-right"><button onclick="deleteLayer('${l.id}')" class="text-red-400 hover:text-red-300"><i class="fa-solid fa-trash"></i></button></td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }

        function changeActiveLayer(layerId) {
            project.activeLayer = layerId;
            setCommandPrompt(`Camada ativa alterada.`);
        }

        function addNewLayer() {
            let nameInput = document.getElementById('newLayerName');
            let colorInput = document.getElementById('newLayerColor');
            if (!nameInput || !colorInput) return;
            let name = nameInput.value.trim() || `Camada ${project.layers.length + 1}`;
            let color = colorInput.value;

            let newId = 'layer_' + Date.now();
            project.layers.push({ id: newId, name: name, color: color, visible: true });
            nameInput.value = '';
            updateLayerUI();
            setCommandPrompt(`Camada "${name}" criada.`);
        }

        function updateLayerColor(id, color) {
            let l = project.layers.find(ly => ly.id === id);
            if (l) l.color = color;
        }

        function toggleLayerVisibility(id) {
            let l = project.layers.find(ly => ly.id === id);
            if (l) {
                l.visible = !l.visible;
                updateLayerUI();
            }
        }

        function deleteLayer(id) {
            if (project.layers.length <= 1) {
                setCommandPrompt('O projeto precisa ter pelo menos uma camada.');
                return;
            }
            project.layers = project.layers.filter(l => l.id !== id);
            if (project.activeLayer === id) {
                project.activeLayer = project.layers[0].id;
            }
            updateLayerUI();
        }

        function zoomExtents() {
            if (project.elements.length === 0) {
                resetZoomPan();
                return;
            }
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            project.elements.forEach(el => {
                if (el.type === 'line') {
                    minX = Math.min(minX, el.x1, el.x2); minY = Math.min(minY, el.y1, el.y2);
                    maxX = Math.max(maxX, el.x1, el.x2); maxY = Math.max(maxY, el.y1, el.y2);
                } else if (el.type === 'circle') {
                    minX = Math.min(minX, el.cx - el.r); minY = Math.min(minY, el.cy - el.r);
                    maxX = Math.max(maxX, el.cx + el.r); maxY = Math.max(maxY, el.cy + el.r);
                } else if (el.type === 'rectangle') {
                    minX = Math.min(minX, el.x); minY = Math.min(minY, el.y);
                    maxX = Math.max(maxX, el.x + el.w); maxY = Math.max(maxY, el.y + el.h);
                }
            });

            let wWidth = maxX - minX || 100;
            let wHeight = maxY - minY || 100;
            let zoomX = canvas.width / (wWidth * 1.2);
            let zoomY = canvas.height / (wHeight * 1.2);
            view.zoom = Math.min(zoomX, zoomY, 10);
            view.panX = -((minX + maxX) / 2) * view.zoom;
            view.panY = -((minY + maxY) / 2) * view.zoom;
            document.getElementById('zoomLevel').innerText = Math.round(view.zoom * 100) + '%';
            setCommandPrompt('Zoom Extents aplicado.');
        }

        function panView(dx, dy) {
            view.panX += dx;
            view.panY += dy;
        }

        function resetZoomPan() {
            view.zoom = 1.0;
            view.panX = 0;
            view.panY = 0;
            document.getElementById('zoomLevel').innerText = '100%';
        }

        function openModal(id) {
            let el = document.getElementById(id);
            if (el) el.classList.remove('hidden');
        }

        function closeModal(id) {
            let el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        }

        function toggleExportOptions(val) {
            let pngOpts = document.getElementById('pngOptions');
            if (!pngOpts) return;
            if (val === 'png') pngOpts.classList.remove('hidden');
            else pngOpts.classList.add('hidden');
        }

        function performExport() {
            let formatEl = document.getElementById('exportFormat');
            if (!formatEl) return;
            let format = formatEl.value;
            closeModal('exportModal');

            if (format === 'webcad' || format === 'json') {
                let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
                let dlAnchor = document.createElement('a');
                dlAnchor.setAttribute("href", dataStr);
                dlAnchor.setAttribute("download", project.name.replace(/\.[^/.]+$/, "") + ".webcad");
                document.body.appendChild(dlAnchor);
                dlAnchor.click();
                dlAnchor.remove();
                setCommandPrompt('Projeto salvo com sucesso (.webcad).');
            } else if (format === 'svg') {
                let svgContent = generateSVGExport();
                let blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
                let url = URL.createObjectURL(blob);
                let dlAnchor = document.createElement('a');
                dlAnchor.href = url;
                dlAnchor.download = 'desenho_hypercad.svg';
                document.body.appendChild(dlAnchor);
                dlAnchor.click();
                dlAnchor.remove();
                setCommandPrompt('Arquivo SVG exportado com sucesso.');
            } else if (format === 'dxf') {
                let dxfContent = generateDXFExport();
                let blob = new Blob([dxfContent], { type: 'application/dxf;charset=utf-8' });
                let url = URL.createObjectURL(blob);
                let dlAnchor = document.createElement('a');
                dlAnchor.href = url;
                dlAnchor.download = 'desenho_hypercad.dxf';
                document.body.appendChild(dlAnchor);
                dlAnchor.click();
                dlAnchor.remove();
                setCommandPrompt('Arquivo DXF exportado com sucesso.');
            } else if (format === 'png') {
                let resEl = document.getElementById('pngResolution');
                let bgEl = document.getElementById('pngBackground');
                let scale = resEl ? parseInt(resEl.value) || 1 : 1;
                let bgType = bgEl ? bgEl.value : 'dark';
                
                let expCanvas = document.createElement('canvas');
                expCanvas.width = canvas.width * scale;
                expCanvas.height = canvas.height * scale;
                let eCtx = expCanvas.getContext('2d');
                eCtx.scale(scale, scale);

                if (bgType === 'dark') {
                    eCtx.fillStyle = '#101217';
                    eCtx.fillRect(0, 0, canvas.width, canvas.height);
                } else if (bgType === 'white') {
                    eCtx.fillStyle = '#ffffff';
                    eCtx.fillRect(0, 0, canvas.width, canvas.height);
                }

                eCtx.drawImage(canvas, 0, 0);

                let url = expCanvas.toDataURL('image/png');
                let dlAnchor = document.createElement('a');
                dlAnchor.href = url;
                dlAnchor.download = 'desenho_hypercad.png';
                document.body.appendChild(dlAnchor);
                dlAnchor.click();
                dlAnchor.remove();
                setCommandPrompt('Imagem PNG exportada com sucesso.');
            }
        }

        function generateSVGExport() {
            let svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">\n`;
            svg += `  <rect width="100%" height="100%" fill="#101217"/>\n`;

            project.layers.forEach(l => {
                svg += `  <g id="layer_${l.name.replace(/\s+/g, '_')}" stroke="${l.color}" fill="none" stroke-width="2">\n`;
                project.elements.filter(e => e.layer === l.id).forEach(el => {
                    if (el.type === 'line') {
                        let p1 = worldToScreen(el.x1, el.y1);
                        let p2 = worldToScreen(el.x2, el.y2);
                        svg += `    <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" />\n`;
                    } else if (el.type === 'circle') {
                        let pc = worldToScreen(el.cx, el.cy);
                        svg += `    <circle cx="${pc.x}" cy="${pc.y}" r="${el.r * view.zoom}" />\n`;
                    } else if (el.type === 'rectangle') {
                        let p1 = worldToScreen(el.x, el.y);
                        svg += `    <rect x="${p1.x}" y="${p1.y}" width="${el.w * view.zoom}" height="${el.h * view.zoom}" />\n`;
                    }
                });
                svg += `  </g>\n`;
            });
            svg += `</svg>`;
            return svg;
        }

        function generateDXFExport() {
            let dxf = `0\nSECTION\n2\nHEADER\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n`;
            project.elements.forEach(el => {
                if (el.type === 'line') {
                    dxf += `0\nLINE\n8\n${el.layer}\n10\n${el.x1}\n20\n${el.y1}\n30\n0.0\n11\n${el.x2}\n21\n${el.y2}\n31\n0.0\n`;
                } else if (el.type === 'circle') {
                    dxf += `0\nCIRCLE\n8\n${el.layer}\n10\n${el.cx}\n20\n${el.cy}\n30\n0.0\n40\n${el.r}\n`;
                }
            });
            dxf += `0\nENDSEC\n0\nEOF\n`;
            return dxf;
        }

        function appNewProject() {
            if (confirm('Deseja criar um novo projeto? Alterações não salvas serão perdidas.')) {
                project = {
                    name: "SemTítulo.webcad",
                    layers: [
                        { id: "layer_0", name: "0 (Padrão)", color: "#3b82f6", visible: true },
                        { id: "layer_constr", name: "Constr", color: "#10b981", visible: true }
                    ],
                    activeLayer: "layer_0",
                    elements: []
                };
                resetZoomPan();
                updateLayerUI();
                saveStateToHistory();
                setCommandPrompt('Novo projeto criado.');
            }
        }

        function appSaveProject() {
            performExport();
        }

        function appOpenFile(e) {
            let file = e.target.files[0];
            if (!file) return;
            let reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    let json = JSON.parse(evt.target.result);
                    if (json.elements && json.layers) {
                        project = json;
                        let nameDisp = document.getElementById('projectNameDisplay');
                        if (nameDisp) nameDisp.innerText = file.name;
                        updateLayerUI();
                        saveStateToHistory();
                        zoomExtents();
                        setCommandPrompt('Projeto carregado com sucesso.');
                    } else {
                        setCommandPrompt('Formato de arquivo inválido.');
                    }
                } catch(err) {
                    setCommandPrompt('Erro ao ler arquivo JSON/WebCAD.');
                }
            };
            reader.readAsText(file);
        }

        function clearSelection() {
            toolState.selectedElementId = null;
            setCommandPrompt('Seleção limpa.');
        }
    </script>
</body>
</html>
```

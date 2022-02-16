import { useState } from "react";
import "./App.css";

function randomIntFromInterval() {
  // min and max included
  return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

function App() {
  const imageNames = {
    1: "Viburnum lantana",
    2: "Viburnum opulus",
    3: "Ulmus glabra",
    4: "Ulmus Laevis",
    5: "Ulmus Minor",
    6: "Wisteria Sinensis",
    7: "Salix Alba",
    8: "Salix Caprea",
    9: "Sorbus Domestica",
    10: "Sorbus Aucuparia",
    11: "Sophora Japonica",
    12: "Sambucus Nigra",
    13: "Salix purpurea",
    14: "Spartium junceum",
    15: "Tilia Cordata",
    16: "Tilia plantyphyllos",
    17: "Tilia tomentosa",
    18: "Sorbus aucuparia",
    19: "Pyrus pyraster",
    20: "Quercus cerris",
    21: "Quercus frainetto",
    22: "Prunus padus",
    23: "Prunus spinosa",
    24: "Quercus petraea",
    25: "Quercus pubescens",
    26: "Quercus robur",
    27: "Quercus rubra",
    28: "Pterocarya fraxinifolia",
    29: "Rhus typhina",
    30: "Robinia pseudoacacia",
    31: "Rhamnus catartius",
    32: "Parthenocissus tricuspidata",
    33: "Populus nigra",
    34: "Populus tremula",
    35: "Prunus avium",
    36: "Platanus hispanica",
    37: "Morus alba",
    38: "Ostrya carpinifolia",
    39: "Paliurus spina-christi",
    40: "Populus alba",
    41: "Fraxinus excelsior",
    42: "Fraxinus ornus",
    43: "Gleaditsia triacanthos",
    44: "Gymnocladus dioicus",
    45: "Juglans regia",
    46: "laburnum alpinum",
    47: "Liquidambar styraciflua",
    48: "Liquidambar tulipifera",
    49: "Magnolia soulangiana",
    50: "Aesculus hippocastanum",
    51: "Ailanthus altissima",
    52: "Alnus glutiniosa",
    53: "Acer saccharinum",
    54: "Acer pseudoplatanus",
    55: "Acer platanoides",
    56: "Acer obtusatum",
    57: "Acer negundo",
    58: "Acer campestre",
    59: "Clematis vitalba",
    60: "Celtis australis",
    61: "Catalpa bignoniodes",
    62: "Castanea sativa",
    63: "Carpinus betulus",
    64: "Berberis vulgaris",
    65: "betula pendula",
    66: "Euonymus europaeus",
    67: "Euonymus latifolius",
    68: "Euonymus verrucosus",
    69: "Fogus sylvatics",
    70: "Ficus carica",
    71: "Fraxinus angustifolia",
    72: "Cornus mas",
    73: "Cornus sanguinea",
    74: "Corylus avellana",
    75: "Pittosporum tobira",
    76: "Platanus hispanica",
    77: "Platanus occidentalis, Prunus persica",
    78: "Prunus armenica, Pterocarya fraxinifolia, Punica granatum",
    79: "Prunus armeniaca, Pterocarya fraxinifolia, Punica granatum",
    80: "Prunus avium , Prunus domestica, Punica granatum, Querqus cerris",
    81: "Prunus Avium Prunus domestica, Quercus cerris, Quercus ciccifera",
    82: "Vitex agnus-castus",
    83: "Robinia pseudocacia, Rosa canina, Staphylea pinnata, Staphylea pinnata, Ulumus laevis, Ulmus minor",
    84: "Ulmus glabra, Ulmus laevis",
    85: "Quercus robur, Quercus rubra",
    86: "Pterocarya fraxinifolia, Quercus robur",
    87: "Quercus petraea",
    88: "Prunus persica",
    89: "Pittosporum tobira, Quercus ilex",
    90: "Tilia cordata, Tilia platyphylios",
    91: "Tilia platyphylios Tilia tomenthosa, Ulmus glabra",
    92: "Ulmus glabra, Ulmus laevis",
    93: "Tilia cordata, Tilia platyphyllos, Wisteria sinensis, Wisteria sinensis",
    94: "Acer saccharium, Aesculus hippocastanum, Carpins betulus, carpinus betulus, Carpinus orientalis",
    95: "Ne vidis se, Acer pseudoplatanus, Campsis radicans, Campsis radicans, Carpinus betulus ",
    96: "Acer monspessulanum, Acer negundo, Acer (ne vidi se), Albizia julibrissin",
    97: "Acer campestre, Acer monspessulanum, Acer negundo, Ailanthis altissima, Albizia julibrissin",
    98: "Ailanthis altissima, Albizia julibrissin, castanea sativa, Catalpa bignonioides, Ceratonia siliqua ",
    99: "Catalpa bignonioides, nema , Euonymus latifolius, Fagus sylvatica",
    100: "Corylus avellana, Corylus colurna, Fraxinus angustifolia, Fraxinus excelsior",
    101: "Magnolia grandiflora, nesto , Prunus spina-christi",
    102: "Juglans Nigra, Juglans regia, Liriodendron tulipifera, Liriodendron tulipifera",
    103: "Liquidambra styraciflua",
    104: "Fraxinus pennsylvanica, Hedera helix",
    105: "Amorpha fruticosa, Clematis vitalba, Colutea arboresens",
    106: "Amorphia fruticosa, Cistus villosus",
    107: "Buxus sempervirens, Buxus dempervirens, Cornus mas, Cornus sanguinea, cotinus coggygria",
    108: "Betula pendula, Cornus mas",
    109: "Alnus glutinosa",
  };

  const [currentImage, setCurrentImage] = useState(randomIntFromInterval());
  const [show, setShow] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const name = imageNames[currentImage] ?? "unknown";

  return (
    <div className="App">
      <header className="App-header">Dendro {currentImage}</header>
      <div className="buttonContainer">
        <button
          disabled={!!showHint}
          style={{ display: "inline" }}
          onClick={() => setShowHint(true)}
        >
          Hint
        </button>
        <button
          disabled={!!show}
          style={{ display: "inline" }}
          onClick={() => setShow(true)}
        >
          Show
        </button>
        <button
          style={{ display: "inline" }}
          onClick={() => {
            setShow(false);
            setShowHint(false);
            setCurrentImage(randomIntFromInterval());
          }}
        >
          Next
        </button>
      </div>

      <div
        style={{
          minHeight: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {show && <h1>{name}</h1>}
        {showHint && !show && <h1>{name.substr(0, 3) + "..."}</h1>}
      </div>
      <img
        onLoadStart={() => {
          console.log("1");
        }}
        onLoadedData={() => {
          console.log("2");
        }}
        key={currentImage}
        src={require(`../public/images/Dendro${currentImage}.jpg`)}
        className="image"
        alt={"Dendrologija"}
      />
    </div>
  );
}

export default App;

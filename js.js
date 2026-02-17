$(function () {
    const $grid = $('.grid_container');

    $.each(data.images, function (_, img) {
        const $item = $(`
            <div class="image_container">
                <img src="raw/${img.file}" alt="${img.title || ''}">
                <h3>${img.title || ''}</h3>
                <h3>${img.description || ''}</h3>
            </div>`);
        $grid.append($item);
    });

    $(".respo_button").on("click", function () { $("nav").slideToggle(500); });



});
  
const data = {
    images: [
      { file: "IMG_20250506_105602_1.jpg", description: "(Stadthagen)", title: "Mary"},
      { file: "IMG_20250506_105611_1.jpg", description: "(Stadthagen)", title: "Geisha 1"},
      { file: "IMG_20260210_082431.jpg", description: "(Glenorchy, New Zealand)", title: "gebundene Blumen"},
      { file: "IMG_20260210_082614.jpg", description: "(Glenorchy, New Zealand)", title: "Blumen" },
      { file: "IMG_20260210_082712.jpg", description: "(Glenorchy, New Zealand)", title: "Caro"  },
      { file: "IMG_20260210_082939.jpg", description: "(Wunstorf)", title: "Pavel Nedved" },
      { file: "IMG_20260210_083443.jpg", description: "(Wunstorf)", title: "Ein Kolibri"},
      { file: "IMG_20260210_083509.jpg", description: "(Wanaka, New Zealand)", title: "Taylor" },
      { file: "IMG_20260210_083651.jpg", description: "(Little River, New Zealand)", title: "Love"},
      { file: "IMG_20260210_083758.jpg", description: "(Little River, New Zealand)", title: "Die Lilie"  },
      { file: "IMG_20260210_083841.jpg", description: "(Little River, New Zealand)", title: "Blumemstrauß"  },
      { file: "IMG_20260210_084026.jpg", description: "(Little River, New Zealand)", title: "Fantasievogel"  },
      { file: "IMG_20260210_084043.jpg", description: "(Little River, New Zealand)", title: "fliegender Kolibir"},
      { file: "IMG_20260210_084120.jpg", description: "(Little River, New Zealand)", title: "Fischvogel"},
      { file: "IMG_20260210_084543.jpg", description: "(Wunstorf)", title: "abstrakt"},
      { file: "IMG_20260210_084645.jpg", description: "(Wunstorf)", title: "lila Blumen"},
      { file: "IMG_20260210_084741.jpg", description: "(Wunstorf)", title: "weiße Blüte"},
      { file: "IMG_20260210_084847.jpg", description: "(Wunstorf)", title: "japanische Frau" },
      { file: "IMG_20260210_084917.jpg", description: "(Riverton, New Zealand)", title: "Hektordelphin 1"},
      { file: "IMG_20260210_084954.jpg", description: "(Wunstorf)", title: "Hektordelphin 2"},
      { file: "IMG_20260210_085106.jpg", description: "(Wunstorf)", title: "Gelbaugen Pinguin"},
      { file: "IMG_20260210_085153.jpg", description: "(Wunstorf)", title: "Möwe im Flug"},
      { file: "IMG_20260210_085309.jpg", description: "(Wunstorf)", title: "Fischsymbol"},
      { file: "IMG_20260210_085325.jpg", description: "(Wunstorf)", title: "Kererū"},
      { file: "IMG_20260210_085340.jpg", description: "(Wunstorf)", title: "abstrakt"},
      { file: "IMG_20260210_085426.jpg", description: "(Wunstorf)", title: "schöner Kolibri"},
      { file: "IMG_20260210_085547.jpg", description: "(Wunstorf)", title: "eine Weihnachtslilie"},
      { file: "IMG_20260210_085707.jpg", description: "(Wunstorf)", title: "Geisha 2"},
      { file: "IMG_20260210_085732.jpg", description: "(Wunstorf)", title: "Wal im Sprung" },
      { file: "IMG_20260210_085850.jpg", description: "(Little River, New Zealand)", title: "transparente Blume"},
      { file: "IMG_20260210_085921.jpg", description: "(Wunstorf)", title: "Geisha 3"}
    ]
  };

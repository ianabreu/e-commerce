const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const smartphonesCategory = await prisma.category.create({
      data: {
        name: "Smartphones",
        slug: "smartphones",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsmartphone_category.png?alt=media&token=423827c9-83ad-4787-b7b3-a36bc5671159",
      },
    });
    const smartphones = [
      {
        name: "Motorola Moto G24 128GB Grafite 4GB RAM",
        slug: "motorola-moto-g24-128gb-grafite-4gb-ram",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-moto-g24-128gb-grafite-4gb-ram%2F01.webp?alt=media&token=d6c063bc-65c2-4189-8e1e-4883ece34d1a",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-moto-g24-128gb-grafite-4gb-ram%2F02.webp?alt=media&token=a24a8a52-b305-4096-90df-24e36fc028ce",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-moto-g24-128gb-grafite-4gb-ram%2F03.webp?alt=media&token=ae5ab7f6-781c-40de-a5ee-5453a8acca2b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-moto-g24-128gb-grafite-4gb-ram%2F04.webp?alt=media&token=3cda434b-e569-4fe7-8934-9b7f3b4ae1d1",
        ],
        base_price: 999,
        category_id: smartphonesCategory.id,
        discount_percentage: 15,
      },
      {
        name: "Samsung Galaxy S23 256 GB 5G Preto 8 GB RAM",
        slug: "samsung-galaxy-s23-256-gb-5g-preto-8-gb-ram",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsamsung-galaxy-s23-256-gb-5g-preto-8-gb-ram%2F01.webp?alt=media&token=b097c9a6-bed1-4c11-8e34-bd62a8650495",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsamsung-galaxy-s23-256-gb-5g-preto-8-gb-ram%2F02.webp?alt=media&token=69469ab1-aba3-4cb8-9a4d-a6a9bec47084",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsamsung-galaxy-s23-256-gb-5g-preto-8-gb-ram%2F03.webp?alt=media&token=a0bee43d-ea30-46d9-a915-0e2a946b22f6",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsamsung-galaxy-s23-256-gb-5g-preto-8-gb-ram%2F04.webp?alt=media&token=411f186c-a7aa-4864-a225-617bc21023ee",
        ],
        base_price: 3099,
        category_id: smartphonesCategory.id,
        discount_percentage: 5,
      },
      {
        name: "Smartphone Samsung Galaxy A11 Tl 6.4 64gb 3gb Ram Preto",
        slug: "smartphone-samsung-galaxy-a11-tl-64-64gb-3gb-ram-preto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsmartphone-samsung-galaxy-a11-tl-6.4-64gb-3gb-ram-preto%2F01.webp?alt=media&token=91587088-debd-4f37-babe-9c626a6e816a",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsmartphone-samsung-galaxy-a11-tl-6.4-64gb-3gb-ram-preto%2F02.webp?alt=media&token=edbc583c-8d83-4b5d-91f6-a4af89aca1a4",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsmartphone-samsung-galaxy-a11-tl-6.4-64gb-3gb-ram-preto%2F03.webp?alt=media&token=9341a6cc-8482-4c4a-a825-cbfc61474c54",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fsmartphone-samsung-galaxy-a11-tl-6.4-64gb-3gb-ram-preto%2F04.webp?alt=media&token=e86e8b7c-3daf-4864-80a0-6a4a46c0e329",
        ],
        base_price: 849,
        category_id: smartphonesCategory.id,
        discount_percentage: 0,
      },
      {
        name: "Apple iPhone 15 Pro (512 GB) - Titânio Natural",
        slug: "apple-iphone-15-pro-512-gb-titanio-natural",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fapple-iphone-15-pro-512-gb-titanio-natural%2F01.webp?alt=media&token=b5d344e8-62e1-459f-9e1a-b51889144fe3",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fapple-iphone-15-pro-512-gb-titanio-natural%2F02.webp?alt=media&token=4a08cd91-98ec-4210-9e3a-bd75fae7acf3",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fapple-iphone-15-pro-512-gb-titanio-natural%2F03.webp?alt=media&token=00d5a48a-c534-4698-948c-1b9d60182399",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fapple-iphone-15-pro-512-gb-titanio-natural%2F04.webp?alt=media&token=c7cb22f9-f26f-4440-ac2e-9c276e333e5d",
        ],
        base_price: 13272.9,
        category_id: smartphonesCategory.id,
        discount_percentage: 10,
      },
      {
        name: "Motorola Edge 40 Neo 5G Dual SIM 256 GB Black beauty 8 GB RAM",
        slug: "motorola-edge-40-neo-5g-dual-sim-256-gb-black-beauty-8-gb-ram",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-edge-40-neo-5g-dual-sim-256-gb-black-beauty-8-gb-ram%2F01.webp?alt=media&token=86d85881-a0d3-4aa9-b7c2-4d25a53b4859",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-edge-40-neo-5g-dual-sim-256-gb-black-beauty-8-gb-ram%2F02.webp?alt=media&token=b64b8b0e-08f8-477a-9c55-94044752992c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-edge-40-neo-5g-dual-sim-256-gb-black-beauty-8-gb-ram%2F03.webp?alt=media&token=0ea7c10e-a5f5-46c4-8b49-443c7c844b1c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fsmartphones%2Fmotorola-edge-40-neo-5g-dual-sim-256-gb-black-beauty-8-gb-ram%2F04.webp?alt=media&token=e89011a7-179f-4bb3-80de-e6dfae45b961",
        ],
        base_price: 2799,
        category_id: smartphonesCategory.id,
        discount_percentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: smartphones,
    });

    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Fmouses_category.webp?alt=media&token=a537a64b-90f8-4c51-b7ba-dc9ec138246f",
      },
    });
    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-mx-master-3s%2F01.webp?alt=media&token=35cc456f-c81a-4959-acd3-a8d9a6cf741c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-mx-master-3s%2F02.webp?alt=media&token=474e24eb-4061-4aae-8bd3-89068e3c8c58",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-mx-master-3s%2F03.webp?alt=media&token=23b86289-63b9-42ff-a527-3015c0673526",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-mx-master-3s%2F04.webp?alt=media&token=11495607-fb85-4815-8a49-3e8fedd92778",
        ],
        base_price: 630,
        category_id: mousesCategory.id,
        discount_percentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-pro-x-superlight%2F01.webp?alt=media&token=6741b6aa-b302-43a6-be89-814993bdfd59",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-pro-x-superlight%2F02.webp?alt=media&token=5fa9ab8d-493f-4015-8ae4-e1cc493c8526",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-pro-x-superlight%2F03.webp?alt=media&token=a571f1c1-477f-40cd-a4c4-ddd6adafcf9b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-pro-x-superlight%2F04.webp?alt=media&token=33d30e46-a5b3-4e27-bd54-915d33350319",
        ],
        base_price: 720,
        category_id: mousesCategory.id,
        discount_percentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-g305-lightspeed%2F01.webp?alt=media&token=d8504461-6ab5-4e8f-8863-1a440b44a55e",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-g305-lightspeed%2F02.webp?alt=media&token=0d420709-ec29-46af-979b-d0fb7b7724b8",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-g305-lightspeed%2F03.webp?alt=media&token=dc94ec16-eb5a-4fcd-acb6-eadc53c6e7d5",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Flogitech-g305-lightspeed%2F04.webp?alt=media&token=e0b5b5ca-8295-451d-ae01-5898a9543ed0",
        ],
        base_price: 300,
        category_id: mousesCategory.id,
        discount_percentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Fhyperx-pulsefire-dart%2F01.webp?alt=media&token=707c22fd-dc61-4302-95f1-43bffded1795",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Fhyperx-pulsefire-dart%2F02.webp?alt=media&token=f3ce4020-2683-4263-b329-2b7e5e858fae",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Fhyperx-pulsefire-dart%2F03.webp?alt=media&token=7b4a4a45-8702-47c1-8769-58ee20ebf5fe",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Fhyperx-pulsefire-dart%2F04.webp?alt=media&token=58ccfed2-1554-49dd-82a6-df40a166f471",
        ],
        base_price: 340,
        category_id: mousesCategory.id,
        discount_percentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Frazer-deathadder-v2-pro%2F01.webp?alt=media&token=183c4dfe-a3a4-40c4-9d33-67c406ae6726",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Frazer-deathadder-v2-pro%2F02.webp?alt=media&token=0773ed22-1ba7-4a20-ad35-9ad10da5b2bf",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Frazer-deathadder-v2-pro%2F03.webp?alt=media&token=ca38cb14-0339-47b5-a984-1c8d5495c089",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fmouses%2Frazer-deathadder-v2-pro%2F04.webp?alt=media&token=115c7c92-d638-4a88-9e10-eab856918900",
        ],
        base_price: 389,
        category_id: mousesCategory.id,
        discount_percentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "teclados",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fteclados_category.png?alt=media&token=872e4c79-09ed-49bc-95de-bb8bcaa0fcec",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-keys-mini%2F01.webp?alt=media&token=5af60909-ecd3-443d-936b-f81a19cdf5f1",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-keys-mini%2F02.webp?alt=media&token=f00947fd-c879-4bc6-8908-663b9de20e37",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-keys-mini%2F03.webp?alt=media&token=77f493b5-b567-4087-8339-d6bbfaa1b103",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-keys-mini%2F04.webp?alt=media&token=d4c74ebf-fe7c-4707-9e5c-06cfcf124f49",
        ],
        base_price: 930,
        category_id: keyboardsCategory.id,
        discount_percentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-pop-keys%2F01.webp?alt=media&token=d1603eb2-623a-4932-b7df-bc7a2a4592d2",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-pop-keys%2F02.webp?alt=media&token=4587af36-e6f2-48c8-9c86-8495b287230f",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-pop-keys%2F03.webp?alt=media&token=aa46bd87-91bd-4a8d-8b9e-22eb7f3360ef",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-pop-keys%2F04.webp?alt=media&token=fac58552-ee0d-4b92-90d6-4160f544cd88",
        ],
        base_price: 440,
        category_id: keyboardsCategory.id,
        discount_percentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-mechanical%2F01.webp?alt=media&token=ec72fa0d-733f-403a-899a-78fc147dfaee",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-mechanical%2F02.webp?alt=media&token=c83ea15a-b364-425d-a0de-b2ea67564b3f",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-mechanical%2F03.webp?alt=media&token=a8f741b1-d808-4115-b9bc-a3ed5b7bfd5e",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Flogitech-mx-mechanical%2F04.webp?alt=media&token=14e27a16-e192-4c59-b870-3b15ade0ac00",
        ],
        base_price: 999,
        category_id: keyboardsCategory.id,
        discount_percentage: 20, // 10% discount
      },
      {
        name: "Teclado Gamer Led Multimídia Anti-ghosting",
        slug: "teclado-gamer-led-multimidia-anti-ghosting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fteclado-gamer-led-multimidia-anti-ghosting%2F01.webp?alt=media&token=f9f6a2f6-d2ef-4404-95fa-f4fc94b4018d",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fteclado-gamer-led-multimidia-anti-ghosting%2F02.webp?alt=media&token=a8656194-197b-4875-8402-aca74a6ae460",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fteclado-gamer-led-multimidia-anti-ghosting%2F03.webp?alt=media&token=0c70fa48-e1ba-4f37-98bd-661866c580ac",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fteclado-gamer-led-multimidia-anti-ghosting%2F04.webp?alt=media&token=2d4dd7e2-2617-42f3-a499-e3f715d24f55",
        ],
        base_price: 149,
        category_id: keyboardsCategory.id,
        discount_percentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fredragon-gamer-ashe%2F01.webp?alt=media&token=78ad7a42-4136-4fa7-bdba-02b94682a91b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fredragon-gamer-ashe%2F02.webp?alt=media&token=493a3008-9fe1-4c06-9b32-4cc96ff21c12",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fredragon-gamer-ashe%2F03.webp?alt=media&token=ea7e9d04-5fd2-4908-bcba-db53ec55cedc",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fteclados%2Fredragon-gamer-ashe%2F04.webp?alt=media&token=3985a053-f2b7-40c4-83ef-2c8e350911bb",
        ],
        base_price: 400,
        category_id: keyboardsCategory.id,
        discount_percentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "fones",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Ffones_category.png?alt=media&token=b5f0875c-3733-4932-bc60-40b70020098c",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-vibe-100%2F01.webp?alt=media&token=041e89b9-886c-484f-a257-17683a07e619",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-vibe-100%2F02.webp?alt=media&token=a6252ee5-f6e3-4070-a630-8215e36e6983",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-vibe-100%2F03.webp?alt=media&token=d7351454-3674-4966-8349-a633781430ae",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-vibe-100%2F04.webp?alt=media&token=893d73dc-becd-4b54-8625-b8691ddecb9d",
        ],
        base_price: 430,
        category_id: headphonesCategory.id,
        discount_percentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-pro-x-2-lightspeed%2F01.webp?alt=media&token=3c771d14-38c6-48eb-bcfd-11afa802cc8c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-pro-x-2-lightspeed%2F02.webp?alt=media&token=80a79913-d471-4352-ba10-1194bd3f5833",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-pro-x-2-lightspeed%2F03.webp?alt=media&token=b5a6280c-ae9f-4ba4-9442-225bd229961b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-pro-x-2-lightspeed%2F04.webp?alt=media&token=37a68dca-8572-4949-8e87-08ba1cb9436e",
        ],
        base_price: 1120,
        category_id: headphonesCategory.id,
        discount_percentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-astro-a30%2F01.webp?alt=media&token=0e7c929f-e856-4b35-b4e8-80258f200c58",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-astro-a30%2F02.webp?alt=media&token=cbed591e-e2b4-4817-9fa1-d248b4a4c13e",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-astro-a30%2F03.webp?alt=media&token=dc56d435-adf2-49c5-9a2e-8b4488568b0c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-astro-a30%2F04.webp?alt=media&token=03a0524e-382e-411b-ae1d-99f94f943262",
        ],
        base_price: 1500,
        category_id: headphonesCategory.id,
        discount_percentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-wired-earbuds%2F01.png?alt=media&token=6d9e909b-4ed4-46fb-a591-1230d4595e18",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-wired-earbuds%2F02.webp?alt=media&token=1e042dca-0067-48b2-9d43-752fdba68f02",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-wired-earbuds%2F03.webp?alt=media&token=6d9cacba-be9f-44d4-b78c-0e4f12d73351",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Flogitech-zone-wired-earbuds%2F04.webp?alt=media&token=7585ac10-136d-4be0-8f94-c7979a4f7178",
        ],
        base_price: 550,
        category_id: headphonesCategory.id,
        discount_percentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Fhyperx-cloud-stinger-2%2F01.webp?alt=media&token=8bc9cf46-37e3-40db-a8e5-94410d147061",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Fhyperx-cloud-stinger-2%2F02.webp?alt=media&token=83af7202-acdf-4fbe-8d0d-682fcd79283b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Fhyperx-cloud-stinger-2%2F03.webp?alt=media&token=24ac2c1d-7d82-4bcb-a374-550c0238f84f",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Fhyperx-cloud-stinger-2%2F04.webp?alt=media&token=09edef5d-c8c1-4e81-910f-91d763be0e8a",
        ],
        base_price: 250,
        category_id: headphonesCategory.id,
        discount_percentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Frazer-kraken-x%2F01.webp?alt=media&token=86e0a412-6f4c-4dcb-9005-305646d01fbd",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Frazer-kraken-x%2F02.webp?alt=media&token=979450ec-b407-430a-903c-085d080f8381",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Frazer-kraken-x%2F03.webp?alt=media&token=67f6c987-090f-42d1-a20c-8091da36be15",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ffones%2Frazer-kraken-x%2F04.webp?alt=media&token=db13f08a-e031-4ed2-9bfe-b1a9a99f0ac1",
        ],
        base_price: 200,
        category_id: headphonesCategory.id,
        discount_percentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const televisoresCategory = await prisma.category.create({
      data: {
        name: "Televisores",
        slug: "televisores",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Ftelevisores_category.png?alt=media&token=bf4397b7-e984-4fc1-863a-77e02d8d4070",
      },
    });

    const televisores = [
      {
        name: "Smart Tv 32 Britânia Led Dolby Audio",
        slug: "smart-tv-32-britania-led-dolby-audio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-32-britania-led-dolby-audio%2F01.webp?alt=media&token=9004bdd1-2bbb-4ba6-a0ab-8c3d7e49e271",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-32-britania-led-dolby-audio%2F02.webp?alt=media&token=197e1d7b-e76d-4847-a4da-5914d1885d55",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-32-britania-led-dolby-audio%2F03.webp?alt=media&token=e35e1c4b-ab44-4f74-97f7-51410dd1cda0",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-32-britania-led-dolby-audio%2F04.webp?alt=media&token=f9a1cab2-b526-478a-ab02-c4b55fdfe666",
        ],
        base_price: 1290,
        category_id: televisoresCategory.id,
        discount_percentage: 0,
      },
      {
        name: "TCL Classic 4K Smart Tv 43 P755 Google Tv Dolby",
        slug: "tcl-classic-4k-smart-tv-43-p755-google-tv-dolby",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Ftcl-classic-4k-smart-tv-43-p755-google-tv-dolby%2F01.webp?alt=media&token=d6de153e-21d7-4bc5-9763-9ccbbb197936",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Ftcl-classic-4k-smart-tv-43-p755-google-tv-dolby%2F02.webp?alt=media&token=93ae826d-95b6-411d-80cd-1d8ce9846f85",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Ftcl-classic-4k-smart-tv-43-p755-google-tv-dolby%2F03.webp?alt=media&token=144d0266-7cb8-488f-b304-759b07b2264f",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Ftcl-classic-4k-smart-tv-43-p755-google-tv-dolby%2F04.webp?alt=media&token=141102bc-6d4a-4696-bf82-6d69e45748af",
        ],
        base_price: 2585.93,
        category_id: televisoresCategory.id,
        discount_percentage: 26, // 10% discount
      },
      {
        name: "Smart Tv Led 32 Hd Samsung",
        slug: "smart-tv-led-32-hd-samsung",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-led-32-hd-samsung%2F01.webp?alt=media&token=8b083684-99cd-441f-be7c-9f04be411901",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-led-32-hd-samsung%2F02.webp?alt=media&token=b65decbd-1df3-4121-aa19-f2fe63417ffb",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-led-32-hd-samsung%2F03.webp?alt=media&token=2ea0e6fb-5e9e-4f2c-820e-6b40107943f8",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-led-32-hd-samsung%2F04.webp?alt=media&token=8dc29e71-79c8-4407-abf7-094b0415467b",
        ],
        base_price: 1599,
        category_id: televisoresCategory.id,
        discount_percentage: 34,
      },
      {
        name: "Smart Tv 43 Philco Dolby Audio",
        slug: "smart-tv-43-philco-dolby-audio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-43-philco-dolby-audio%2F01.webp?alt=media&token=b54ac42c-a051-465d-aca5-b0114c359430",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-43-philco-dolby-audio%2F02.webp?alt=media&token=34f88834-1bac-486d-9e08-a97f49987c14",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-43-philco-dolby-audio%2F03.webp?alt=media&token=39573cc6-3718-4daa-82e2-db3674fe4dbf",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-43-philco-dolby-audio%2F04.webp?alt=media&token=7a684770-5970-4d0f-85a9-e0af39ba948c",
        ],
        base_price: 2415,
        category_id: televisoresCategory.id,
        discount_percentage: 39,
      },
      {
        name: "Smart Tv 4k LG Oled Evo 55 120hz Thinq Ai",
        slug: "smart-tv-4k-lg-oled-evo-55-120hz-thinq-ai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-4k-lg-oled-evo-55-120hz-thinq-ai%2F01.webp?alt=media&token=bbb307d7-59de-4f53-8156-6167dd2ed2b9",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-4k-lg-oled-evo-55-120hz-thinq-ai%2F02.webp?alt=media&token=85f8971b-c3ee-46b5-b06f-cc4b3c392d12",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-4k-lg-oled-evo-55-120hz-thinq-ai%2F03.webp?alt=media&token=a7078727-a4d8-4950-9c4d-c16d51f6327c",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Ftelevisores%2Fsmart-tv-4k-lg-oled-evo-55-120hz-thinq-ai%2F04.webp?alt=media&token=9b775280-ddd2-4dcb-8c5e-b93485e9a591",
        ],
        base_price: 9700,
        category_id: televisoresCategory.id,
        discount_percentage: 15,
      },
    ];

    await prisma.product.createMany({
      data: televisores,
    });

    const impressorasCategory = await prisma.category.create({
      data: {
        name: "Impressoras",
        slug: "impressoras",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressoras_category.png?alt=media&token=ab1cf09c-2fe7-46bd-af8e-8c0121b0c429",
      },
    });

    const impressoras = [
      {
        name: "Impressora multifuncional cor Epson L3250",
        slug: "impressora-multifuncional-cor-epson-l3250",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-cor-epson-l3250%2F01.webp?alt=media&token=61f602fc-ded1-4a64-ba30-f8f11e9a64b3",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-cor-epson-l3250%2F02.webp?alt=media&token=e5c0575b-6633-4dc2-a206-fb937c517e21",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-cor-epson-l3250%2F03.webp?alt=media&token=4c5790c1-17fa-4b40-bb18-771b8423e426",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-cor-epson-l3250%2F04.webp?alt=media&token=18547a9e-fde8-4a96-ade0-85817e449a4b",
        ],
        base_price: 1378.17,
        category_id: impressorasCategory.id,
        discount_percentage: 24,
      },
      {
        name: "Impressora 80mm De Cupom Guilhotina Usb E Rede Rj45 Cor Preto",
        slug: "impressora-80mm-de-cupom-guilhotina-usb-e-rede-rj45-cor-preto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-80mm-de-cupom-guilhotina-usb-e-rede-rj45-cor-preto%2F01.webp?alt=media&token=28c1f6b5-8a71-4454-916f-ecb2cda0424f",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-80mm-de-cupom-guilhotina-usb-e-rede-rj45-cor-preto%2F02.webp?alt=media&token=a57961d0-89fc-487f-aeee-8481165b9be5",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-80mm-de-cupom-guilhotina-usb-e-rede-rj45-cor-preto%2F03.webp?alt=media&token=402b68c0-45ab-430b-b4eb-d0738ff2e2fb",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-80mm-de-cupom-guilhotina-usb-e-rede-rj45-cor-preto%2F04.webp?alt=media&token=8744ea43-46ba-4e52-a961-387e7139763d",
        ],
        base_price: 379.99,
        category_id: impressorasCategory.id,
        discount_percentage: 0,
      },
      {
        name: "Impressora Hp 584 Multifuncional Smart Tank Wifi Bivolt Cor Preto",
        slug: "impressora-hp-584-multifuncional-smart-tank-wifi-bivolt-cor-preto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-hp-584-multifuncional-smart-tank-wifi-bivolt-cor-preto%2F01.webp?alt=media&token=9713d4c8-65d9-4e5e-b1b3-61268b8744f4",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-hp-584-multifuncional-smart-tank-wifi-bivolt-cor-preto%2F02.webp?alt=media&token=f227efb0-62c3-4332-a7c4-846ca993eaca",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-hp-584-multifuncional-smart-tank-wifi-bivolt-cor-preto%2F03.webp?alt=media&token=beba6673-0572-4b89-b04a-a3657096d945",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-hp-584-multifuncional-smart-tank-wifi-bivolt-cor-preto%2F04.webp?alt=media&token=495dd486-69d9-486f-8ac7-e1e0546538bc",
        ],
        base_price: 979.9,
        category_id: impressorasCategory.id,
        discount_percentage: 19,
      },
      {
        name: "Impressora Multifuncional Hp 4103fdw Laserjet Pro Mono Cor Branco",
        slug: "impressora-multifuncional-hp-4103fdw-laserjet-pro-mono-cor-branco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-hp-4103fdw-laserjet-pro-mono-cor-branco%2F01.webp?alt=media&token=d2b24a77-dc8e-4fc4-9e42-f298ba23925b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-hp-4103fdw-laserjet-pro-mono-cor-branco%2F02.webp?alt=media&token=34712458-ea85-4317-b7f4-e62675ee229a",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-hp-4103fdw-laserjet-pro-mono-cor-branco%2F03.webp?alt=media&token=9ef4a9a7-b37f-4e4a-9037-ee853d64625b",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-hp-4103fdw-laserjet-pro-mono-cor-branco%2F04.webp?alt=media&token=affcf0b0-6d97-4c8c-840a-e6a5306fd799",
        ],
        base_price: 2249.9,
        category_id: impressorasCategory.id,
        discount_percentage: 0,
      },
      {
        name: "Impressora multifuncional monocromática HP LaserJet Pro",
        slug: "impressora-multifuncional-monocromática-hp-laserjet-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        image_urls: [
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-monocrom%C3%A1tica-hp-laserjet-pro%2F01.webp?alt=media&token=ce6d9d09-7e6b-44e9-a934-222e1dd06e1a",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-monocrom%C3%A1tica-hp-laserjet-pro%2F02.webp?alt=media&token=e23d1e75-dd43-4b7b-99cd-c527c09aa0dd",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-monocrom%C3%A1tica-hp-laserjet-pro%2F03.webp?alt=media&token=d1935412-07da-47d1-b320-160fa120f6e2",
          "https://firebasestorage.googleapis.com/v0/b/imagens-89f06.appspot.com/o/ecommerce%2Fcategorias%2Fimpressoras%2Fimpressora-multifuncional-monocrom%C3%A1tica-hp-laserjet-pro%2F04.webp?alt=media&token=2c6abf98-ae75-49c1-8266-8e60b2c94a56",
        ],
        base_price: 2190,
        category_id: impressorasCategory.id,
        discount_percentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: impressoras,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

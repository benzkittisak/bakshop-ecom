const PLANTS_DATA = {
  houseplants: {
    id: 1,
    title: "House Plants",
    routeName: "shop/houseplants",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-daniel-frese-1055408.md.jpg",
    items: [
      {
        id: 2,
        name: "มอนสเตอร่า ไจแอนท์",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/16/pexels-huy-phan-3125195.jpg",
        price: 2234,
        description:
          "มอนสเตอร่า (Monstera, Swiss Cheese Plant) หรือที่เรียกทั่วไปว่า พลูฉีก หรือ พลูแฉก มีถิ่นกำเนิดในทวีปอเมริกากลาง พบมากในป่าดิบชื้น เป็นต้นไม้ในวงศ์ Araceae มีชื่อทางวิทยาศาสตร์ว่า Monstera deliciosa Liebm. ลักษณะลำต้นเป็นข้อสั้น จัดอยู่ในกลุ่มไม้เลื้อย สามารถเลื้อยได้ไกล 4 เมตร มีจุดเด่นที่ใบเดี่ยวขนาดใหญ่ โคนใบเว้าลึกเป็นรูปหัวใจ ปลายใบเรียวแหลม ขอบใบหยักลึกเกือบถึงเส้นกลางใบ 5 แฉก ใบหนาผิวมัน มีทั้งสีเขียวเข้มและใบด่าง ออกดอกตามซอกใบ มีผลสีเขียว จะเปลี่ยนเป็นสีน้ำตาลเมื่อผลสุกและส่งกลิ่นแรง",
        showImage: [
          "https://i2.fpic.cc/file/img-b1/2021/12/30/monstera-monkey-mask-2021-09-02-08-32-46-utc.md.jpg",
          "https://i2.fpic.cc/file/img-b1/2021/12/30/houseplants-fittonia-nephrolepis-and-monstera-in-2021-08-31-13-28-45-utc.md.jpg",
          "https://i2.fpic.cc/file/img-b1/2021/12/30/monstera-in-basket-2021-08-29-01-31-32-utc.md.jpg",
          "https://i2.fpic.cc/file/img-b1/2021/12/30/monstera-monkey-mask-2021-09-02-07-13-42-utc.md.jpg"
        ],

        reviews:[
          // {
          //   name:"",
          //   email:'',
          //   detail:""
          // }
        ]
      },
      {
        id: 3,
        name: "เดหลี",
        new: true,
        imageUrl: "https://i2.fpic.cc/file/img-b1/2021/12/17/8ff19ffb.jpg",
        price: 1099,
        description:
          "เป็นพืชที่มีดอกเดี่ยว monocotyledonous ประมาณ 47 ชนิดในตระกูล Araceae ถิ่นกำเนิดในเขตร้อนชื้นของอเมริกาและเอเชียตะวันออกเฉียงใต้ Spathiphyllum บางชนิดเป็นที่รู้จักกันทั่วไปว่าเป็น Spath หรือ Lily Peace พวกเขาเป็นไม้ยืนต้นเป็นต้นไม้เขียวชอุ่มตลอดปีมีใบขนาดใหญ่ 12-65 ซม. และกว้าง 3-25 ซม.",
        showImage: [],
      },
      {
        id: 4,
        name: "แววมยุรา",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/27/potted_maranta_leuconeura_erythroneura_prayer_plant_herringbone_plant_1500272950_051f04080.jpg",
        price: 890,
        description:
          "Maranta leuconeura ยังเป็นที่รู้จักกันในนามพืชอธิษฐานเป็นพรรณไม้ดอกในตระกูล Marantaceae ซึ่งมีถิ่นกำเนิดในป่าเขตร้อนของบราซิล มันเป็นตัวแปรยืนต้น rhizomatous เติบโตสูงถึง 30 ซม. และกว้างกับกอหนาแน่นของเอเวอร์กรีนใบรูปไข่โดดเด่นโดดเด่นแต่ละยาวถึง 12 ซม",
      },
      {
        id: 5,
        name: "กวักมรกต",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/000680105_ZZPlant_3_39ed4a48-9e7a-469c-8147-5478128cf095.webp",
        price: 1099,
        description:
          "Zamioculcas เป็นไม้ดอกในสกุล Araceae ประกอบด้วย Zamioculcas zamiifolia เดียว เป็นไม้ยืนต้นเขตร้อนที่มีถิ่นกำเนิดในแอฟริกาตะวันออก ตั้งแต่เคนยาตอนใต้ไปจนถึงแอฟริกาใต้ตะวันออกเฉียงเหนือ ชื่อสามัญ ได้แก่ Zanzibar gem, ZZ plant, Zuzu plant, aroid palm, eternity plant และ Emerald palm ปลูกเป็นไม้ประดับ",
      },
      {
        id: 6,
        name: "ไอวี่",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/green-polyester-artificial-english-ivy-plant-withhanging-basket-by-odd-croft-green-polyester-artific-dla5bg.jpg",
        price: 599,
        description:
          "Hedera helix, ไม้เลื้อยทั่วไป, ไม้เลื้อยอังกฤษ, ไม้เลื้อยยุโรปหรือไม้เลื้อยเป็นไม้ดอกชนิดหนึ่งในสกุลไม้เลื้อยในตระกูล Araliaceae มีถิ่นกำเนิดในยุโรปและเอเชียตะวันตกส่วนใหญ่ เถาวัลย์ที่เขียวชอุ่มตลอดปี เป็นที่คุ้นเคยในสวน พื้นที่รกร้าง และพื้นที่ป่า ซึ่งเติบโตตามผนัง รั้ว ลำต้นของต้นไม้ ฯลฯ",
      },
      {
        id: 7,
        name: "ว่านหางจระเข้",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/27/aloe-vera-plant-2021-08-26-16-59-51-utc.md.jpg",
        price: 1834,
        description:
          "Hedera helix, ไม้เลื้อยทั่วไป, ไม้เลื้อยอังกฤษ, ไม้เลื้อยยุโรปหรือไม้เลื้อยเป็นไม้ดอกชนิดหนึ่งในสกุลไม้เลื้อยในตระกูล Araliaceae มีถิ่นกำเนิดในยุโรปและเอเชียตะวันตกส่วนใหญ่ เถาวัลย์ที่เขียวชอุ่มตลอดปี เป็นที่คุ้นเคยในสวน พื้นที่รกร้าง และพื้นที่ป่า ซึ่งเติบโตตามผนัง รั้ว ลำต้นของต้นไม้ ฯลฯ",
      },
      {
        id: 8,
        name: "ต้นแมงมุม",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/27/beautiful-spider-plant-hanging-from-a-wooden-brack-2021-10-12-19-41-54-utc.md.jpg",
        price: 800,
        description:
          "เศรษฐีเรือนใน เป็นไม้ในวงศ์ Anthericaceae มีเหง้าใต้ดิน รากสีขาว อวบน้ำ ใบเป็นแถบยาวสีเขียว ขลิบเขียวตามขอบใบ ตรงกลางสีขาว ดอกสีขาว ขนาดเล็ก มีกลิ่นหอม เป็นพืชพื้นเมืองของกาบอง",
      },
      {
        id: 9,
        name: "พลูด่าง",
        new: true,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/27/devil-s-ivy-plant-2021-08-26-23-04-13-utc.md.jpg",
        price: 340,
        description:
          "พลูด่าง เป็นพืชดอกชนิดหนึ่งในวงศ์ Araceae ซึ่งกระจายพันธุ์อยู่ทั่วโลก ตั้งแต่ออสเตรเลีย จีน ญี่ปุ่น อินเดีย พืชชนิดนี้พบในป่าเขตร้อนทั่วโลก ในบางครั้งอาจเป็นสร้างความเสียหายทางนิเวศวิทยาด้วย พืชชนิดนี้มีหลายชื่อ",
      },
      {
        id: 10,
        name: "ลิ้นมังกร",
        new: false,
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/000850105_SnakePlant_1_25e1ca62-1d03-44b9-9791-7d68f3ae6864.webp",
        price: 459,
        description:
          "ลิ้นมังกร เป็นพืชในวงศ์ Asparagaceae เป็นไม้ล้มลุก มีเหง้าใต้ดิน ใบเดี่ยว สีเขียวเข้มแกมเทา อวบน้ำ ดอกช่อ สีขาวมีกลิ่นหอม เป็นพืชท้องถิ่นในแอฟริกาตะวันตกตั้งแต่ไนจีเรียถึงคองโก ใช้เป็นไม้ประดับ ใบใช้ตำละเอียด แก้พิษตะขาบ แมงป่อง ชื่อทวินามเดิม Sansevieria trifasciata ปัจจุบันจัดเป็นชื่อพ้องของลิ้นมังกร",
      },
    ],
  },
  officeplants: {
    id: 11,
    title: "Office Plants",
    routeName: "shop/officeplants",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-daria-shevtsova-970089.md.jpg",
    items: [
      {
        id: 12,
        name: "กุหลาบหิน",
        link: "shop/office-plants/Kalanchoe",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/3d25edc4e2551a855b79ddde68f4dae1.jpg",
        price: 199,
        description:
          "กุหลาบหิน เป็นไม้ในสกุลที่ส่วนใหญ่เป็นไม้พุ่ม อวบน้ำและมีอายุอยู่ได้นานหลายปี มีถิ่นกำเนิดในมาดากัสกาแอฟริกาและเอเชีย เหมาะที่จะปลูกเป็นไม้กระถาง ต้นดั้งเดิมส่วนมากจะมีลักษณะต้นสูงเก้งก้าง ต่อมาได้มีการคัดเลือกพันธุ์ อันเนื่องมาจากการกระจายพันธุ์และการผสมพันธุ์ ทำให้ได้พันธุ์ใหม่ที่มีพุ่มต้นเตี้ยกะทัดรัด",
      },
      {
        id: 13,
        name: "ต้นคลาสซูล่า",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/29/houseplant-crassula-ovata-jade-plant-money-tree-op-2021-08-27-09-39-48-utc.md.jpg",
        price: 799,
        description:
          "สำหรับ “ต้นคลาสซูล่า” ( Crassula Ovata หรือ Jade Plant) นั้นเป็นไม้อวบน้ำซึ่งสามารถเรียกว่าเป็นต้นไม้สวรรค์ ต้นใบเงินก็ได้ โดยลักษณะของต้นคลาสซูล่านั้นมีใบสีเขียวสวยงาม ใบหนาเรียบเนียน เวลาออกดอกจะออกดอกเป็นสีชมพู หรือสีขาว ลักษณะคล้ายรูปดาว ซึ่งดอกจะออกในช่วงฤดูหนาว",
      },
    ],
  },
  gardenplants: {
    id: 14,
    title: "Graden Plants",
    routeName: "shop/gardenplants",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-scott-webb-1048035.md.jpg",
    items: [
      {
        id: 15,
        name: "ไผ่ฟาร์เจีย",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/2156802359815cc0439ebc1cd44019fc.jpg",
        price: 799,
        description:
          "Fargesia murielae ต้นไผ่ร่มเป็นพรรณไม้ดอกในตระกูล Poaceae มันเป็นไผ่เขียวขจีขนาดใหญ่ที่ก่อตัวเป็นกอคล้ายกับฟาร์เซียไนตริดาในสกุลเดียวกัน แต่มีอ้อยสีเหลือง",
      },
      {
        id: 16,
        name: "สนบลู",
        imageUrl: "https://i2.fpic.cc/file/img-b1/2021/12/17/columnars_1.jpg",
        price: 1799,
        description:
          "Chamaecyparis lawsoniana หรือที่รู้จักในชื่อ Port Orford cedar หรือ Lawson cypress เป็นสายพันธุ์ของต้นสนในสกุล Chamaecyparis ตระกูล Cupressaceae มันมีถิ่นกำเนิดในโอเรกอนและแคลิฟอร์เนียทางตะวันตกเฉียงเหนือและเติบโตจากระดับน้ำทะเลถึง 1,500 เมตรในหุบเขาของเทือกเขา Klamath ซึ่งมักจะมีลำธารไหลผ่าน",
      },
      {
        id: 17,
        name: "อะกาเว",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/agave-americana-1.jpg",
        price: 569,
        description:
          "Agave Americana มีชื่อสามัญว่า Century plant, maguey หรือ American aloe เป็นไม้ดอกในวงศ์ Asparagaceae มีถิ่นกำเนิดในเม็กซิโกและสหรัฐอเมริกาในเท็กซัส มีการปลูกทั่วโลกเพื่อเป็นไม้ประดับ และได้รับการแปลงสัญชาติในหลายภูมิภาค รวมถึงบางส่วนของหมู่เกาะอินเดียตะวันตก อเมริกาใต้ ลุ่มน้ำเมดิเตอร์เรเนียน แอฟริกา อินเดีย จีน ไทย",
      },
      {
        id: 18,
        name: "ดอกกุหลาบ",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-nubia-navarro-nubikini-1517358.jpg",
        price: 129,
        description:
          "กุหลาบ คือดอกไม้ในสกุล Rosa ในวงศ์ Rosaceae ที่ได้รับความนิยมปลูกมากที่สุดชนิดหนึ่งของโลกที่มีต้นกำเนิดจากทวีปเอเชีย ผู้คนนิยมปลูกเพื่อความสวยงาม ตกแต่งสวน, ประดับตกแต่งบ้าน, ประดับสถานที่, ปลูกเพื่อการพาณิชย์ อาทิ เพื่อนำไปสกัดน้ำหอม นำไปทำเป็นส่วนประกอบของสปา เป็นต้น",
      },
      {
        id: 19,
        name: "ปาล์มชาแมรอปส์",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/chamaerops-humilis.png",
        price: 1599,
        description:
          "ปาล์มชาแมรอปส์ เป็นปาล์มชนิดเดียวในสกุล Chamaerops มีถิ่นกำเนิดในบริเวณเมดิเตอร์เรเนียน นิยมปลูกเป็นไม้ประดับ ใบอ่อนสามารถรับประทานได้ และนำมาทำของใช้ได้ และมีการใช้พืชชนิดนี้ในการแพทย์ท้องถิ่นของแอลจีเรีย",
      },
      {
        id: 20,
        name: "สือชังผู่",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/Acorus-gramineus-Ogon-March.3-1-e1556837564151-scaled.jpg",
        price: 80,
        description:
          "สือชังผู่ ในภาษาจีนกลางหรือเจียะเซียงผู้ในภาษาจีนแต้จิ๋ว ชื่อวิทยาศาสตร์: Acorus gramineus เป็นพืชท้องถิ่นของญี่ปุ่นและเอเชียตะวันออก ชอบขึ้นในที่ชื้นแฉะ อยู่ในวงศ์ Acoraceae ด้านนอกเป็นสีเทาหรือสีน้ำตาล ด้านในเป็นสีเหลืองอมขาวอ่อนๆ ในตำรายาจีนเป็นยาขับเสมหะ ทำให้จิตใจสงบ",
      },
      {
        id: 21,
        name: "ต้นปรงป่า",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/91C6AE6B9561AA0FB56FE9E88F697597.jpg",
        price: 3500,
        description:
          "Encephalartos altensteinii เป็นปรงเหมือนต้นปาล์มในตระกูล Zamiaceae มันเป็นโรคประจำถิ่นไปยังแอฟริกาใต้ ชื่อสายพันธุ์อัลเทนสไตนินี่เอกสิทธิ์อัลเทนสไตน์นายกรัฐมนตรีและผู้อุปถัมภ์ด้านวิทยาศาสตร์ของเยอรมันในศตวรรษที่ 19 มันเป็นที่รู้จักกันทั่วไปว่าเป็น breadtree, broodboom, ปรงยักษ์ตะวันออก",
      },
    ],
  },
  bonsais: {
    id: 22,
    title: "Bonsais",
    routeName: "shop/bonsais",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/27/small-bonsai-tree-hobbit-growing-in-a-red-flowerpo-2021-08-30-02-30-42-utc.md.jpg",
    items: [
      {
        id: 23,
        name: "เมเปิ้ลญี่ปุ่น",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/japanese-maple-bonsai-tree.jpg",
        price: 2799,
        description:
          "เมเปิ้ลญี่ปุ่น เป็นพันธุ์ไม้ยืนต้นในประเทศญี่ปุ่น เกาหลี จีน มองโกเลียตะวันออก และรัสเซียตะวันออกเฉียงใต้ สายพันธุ์อีกมากมายที่แตกต่างกันของเมเปิ้ลนี้ได้มีการปลูกขึ้นทั่วโลกเนื่องจากรูปร่างที่น่าสนใจจำนวนมาก เช่นรูปทรงใบไม้ และสีที่งดงาม",
      },
      {
        id: 24,
        name: "ต้นหนวดปลาหมึกแคระ",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/KaraRileySchefflera-RECIRC-cdce731067d449d4b4a17e8505ef9f24.jpg",
        price: 1399,
        description:
          "Schefflera arboricola เป็นไม้ดอกในวงศ์ Araliaceae มีถิ่นกำเนิดในไต้หวันและไหหลำ ชื่อสามัญของมันคือต้นไม้ร่มแคระเนื่องจากมีลักษณะคล้ายกับต้นไม้ร่มรุ่นเล็กนั่นคือ Schefflera actinophylla",
      },
      {
        id: 25,
        name: "ไทรย้อยใบทู่",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/Ficus-Ginseng-Indian-Laurel-Large.jpg",
        price: 999,
        description:
          "ไทรย้อยใบทู่ หรือ ไทรย้อย เป็นไม้ประเภทบันยัน ในสกุล Ficus ในวงศ์ Moraceae ",
      },
      {
        id: 26,
        name: "โพ",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/bodhi-tree-seeds.jpg",
        price: 795,
        description:
          "โพ หรือ โพธิ์ เป็นต้นไม้สปีชีส์หนึ่งของไทรหรือมะเดื่อ เป็นพืชพื้นเมืองของอินเดีย, เนปาล, ศรีลังกา, ตะวันตกเฉียงใต้ของจีน และอินโดจีน เป็นต้นไม้ขนาดใหญ่ผลัดใบในฤดูร้อน สูงได้ถึง 30 เมตร ลำต้นมีเส้นผ่านศูนย์กลางได้ถึง 3 เมตร",
      },
      {
        id: 27,
        name: "บีชยุโรป",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/aa35216c7934e6aa9ae7dc00ba81d096.png",
        price: 2187,
        description:
          "บีชยุโรปหรือบีชทั่วไปเป็นต้นไม้ผลัดใบที่อยู่ในวงศ์บีช Fagaceae",
      },
      {
        id: 28,
        name: "ยี่เข่ง",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/dcfc2ecf6f125f08a55ba97c2338890f.jpg",
        price: 1587,
        description:
          "ลาเกอร์สโตรเมียหรือที่เรียกกันทั่วไปว่าเครปไมร์เทิลเป็นพืชสกุลไม้ผลัดใบและป่าดิบชื้นประมาณ 50 สายพันธุ์ มีถิ่นกำเนิดในอนุทวีปอินเดีย เอเชียตะวันออกเฉียงใต้ ทางตอนเหนือของออสเตรเลีย เป็นสมาชิกของวงศ์ Lythraceae ซึ่งเรียกอีกอย่างว่าตระกูล Loosestrife",
      },
      {
        id: 29,
        name: "Buxus",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-raphael-brasileiro-7366943.jpg",
        price: 459,
        description:
          "Buxus เป็นสกุลประมาณเจ็ดสิบชนิดในตระกูล Buxaceae ชื่อสามัญ ได้แก่ กล่องหรือไม้บ็อกซ์วูด",
      },
      {
        id: 30,
        name: "ศุภโชค",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/807c978df850429527b2758235042e02.jpg",
        price: 954,
        description:
          "ศุภโชค เป็นไม้ยืนต้น พืชเขตร้อน มีถิ่นกำเนิดแถบทวีปอเมริกาใต้ เช่น ประเทศเม็กซิโก บราซิล หมู่เกาะฮาวาย นิยมนำมาถักเป็นไม้แคระกระถาง และมีความเชื่อว่าเป็นไม้มงคล ภาษาจีนเรียกว่า “เหยาเฉียนซู่” แปลว่า เรียกเงิน หรือ เขย่าเงิน",
      },
    ],
  },
  orchids: {
    id: 31,
    title: "Orchids",
    routeName: "shop/orchids",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-mariola-3699859.jpg",
    items: [
      {
        id: 32,
        name: "สกุลเขากวางอ่อน",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/1b0354b8501dd97ce0d17826c795460ffdc59f97.jpg",
        price: 499,
        description:
          "สกุลเขากวางอ่อน หรือฟาแลนน็อปซิส เป็นสกุลของกล้วยไม้ พบได้ทั่วไปในประเทศพม่า ไทย ลาว มาเลเซีย อินโดนีเซีย ฟิลิปปินส์ และหมู่เกาะใกล้เคียงในมหาสมุทรแปซิฟิก รวมทั้งตอนเหนือของทวีปออสเตรเลีย จึงกล่าวได้ว่ามีการกระจายพันธุ์อยู่ในทวีปเอเชีย",
      },
      {
        id: 33,
        name: "กล้วยไม้",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/fejka-artificial-potted-plant-orchid-white__0748880_pe745269_s5.webp",
        price: 399,
        description:
          "กล้วยไม้ หรือ เอื้อง เป็นพืชดอกที่มีความหลากหลายมากที่สุดกลุ่มหนึ่ง โดยมีประมาณ 899 สกุล และมีประมาณ 27,000 ชนิดที่มีการยอมรับ คิดเป็น 6–11% ของพืชมีเมล็ด มีการค้นพบราว ๆ 800 ชนิดทุก ๆ ปี มีสกุลใหญ่ ๆ คือ Bulbophyllum, Epidendrum, Dendrobium และ Pleurothallis สายพันธุ์ของกล้วยไม้ที่ขึ้นและเติบโตในป่า",
      },
      {
        id: 34,
        name: "สกุลรองเท้านารี",
        imageUrl: "https://i2.fpic.cc/file/img-b1/2021/12/17/17822.jpg",
        price: 699,
        description:
          "สกุลรองเท้านารี เป็นพันธุ์ไม้ประเภทกล้วยไม้ ตั้งขึ้นเมื่อ พ.ศ. 2429 โดยนักพฤกษศาสตร์ชาวเยอรมัน มาจากรากศัพท์ภาษากรีกคือ Paphia หมายถึงเทพธิดาแห่งความรักและความงาม และ pedilon หมายถึงรองเท้าของผู้หญิง ซึ่งหมายถึงลักษณะกลีบดอกที่เป็นถุงลึกคล้ายรองเท้า พบทั่วไปในเอเชียตะวันออกเฉียงใต้",
      },
      {
        id: 35,
        name: "สกุลหวาย",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/Orchid-Dendrobium-Singapore-TGS-1-910x1155.png",
        price: 185,
        description:
          "สกุลหวาย เป็นสกุลหนึ่งของพืชวงศ์กล้วยไม้ ตั้งขึ้นเมื่อ ค.ศ. 1779 โดย Peter Olof Swartz ชาวสวีเดน มาจากรากศัพท์ภาษากรีก คือ dendron และ bios หมายถึงสิ่งมีชีวิตที่อาศัยบนต้นไม้อื่น ทั่วโลกพบกล้วยไม้ที่อยู่ในสกุลนี้ถึง 900 ชนิด ในไทยพบ 184 ชนิด",
      },
      {
        id: 36,
        name: "สกุลว่านน้ำทอง",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/71dJNwcejYL._AC_SL1500_.jpg",
        price: 1054,
        description:
          "สกุลว่านน้ำทอง หรือ Ludisia เป็นกล้วยไม้สกุลหนึ่ง มีสมาชิกเพียงชนิดเดียวคือว่านน้ำทอง Ludisia discolor มีถิ่นกำเนิดในจีนตอนใต้, อินเดียตะวันออกเฉียงเหนือ, ไทย, เวียดนาม, ฟิลิปปินส์, มาเลเซีย, อินโดนีเซีย และพม่า",
      },
      {
        id: 37,
        name: "สกุลออนซิเดียม",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/432f23ea88218f5e47098d376c77683d.jpg",
        price: 999,
        description:
          "Oncidium ย่อว่า Onc ในการค้าพืชสวนเป็นสกุลที่มีประมาณ 330 ชนิดของกล้วยไม้จาก subtribe Oncidiinae ของครอบครัวกล้วยไม้ ปัจจุบันมีการกระจายไปทั่วอเมริกาใต้อเมริกาใต้เม็กซิโกและหมู่เกาะอินเดียตะวันตกโดยขยายพันธุ์ไปยังฟลอริดา ชื่อสามัญของพืชในประเภทนี้ ได้แก่ กล้วยไม้เต้นรำหญิงและกล้วยไม้อาบน้ำสีทอง",
      },
    ],
  },
  accessories: {
    id: 38,
    title: "Accessories",
    routeName: "shop/accessories",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-rocketmann-team-9507266.jpg",
    items: [
      {
        id: 39,
        name: "ถุงมือ",
        imageUrl: "https://i2.fpic.cc/file/img-b1/2021/12/17/6oqqxw.jpg",
        price: 25,
        description:
          "ถุงมือสำหรับขุดดินทำสวนที่มาพร้อมกรงเล็บแข็งแรงในตัว ให้คุณสวมใส่เพื่อขุดดิน พรวนดิน หรือเตรียมดินปลูกต้นไม้ได้อย่างสะดวกรวดเร็วโดยมือไม่เลอะเทอะเปรอะเปื้อนแม้แต่น้อย! จัดการงานทำสวนให้เสร็จได้รวดเร็วขึ้นทันทีถุงมือขุดดินทำสวน",
      },
      {
        id: 40,
        name: "กรรไกรตัดแต่งกิ่ง",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/hoss-pruning-shears.jpg",
        price: 199,
        description:
          "ออกแบบ และรังสรรค์กิ่งไม้ให้สวยงาม ได้รูปทรง ดูโดดเด่น และเป็นระเบียบ ไม่รกรุงรัง ด้วยกรรไกรแต่งกิ่ง ตัวช่วยอำนวยในงานเกษตร การทำความสะอาด หรือจัดสวนมีความสะดวก และรวดเร็วมากขึ้น ผ่านกระบวนการผลิตที่ได้มาตรฐาน วัสดุคุณภาพ มีความแข็งแรงทนทาน ช่วยตัดแต่งกิ่งไม้ได้ดั่งใจ อีกทั้งให้การตัดขาดได้ง่าย และฉับไว",
      },
      {
        id: 41,
        name: "กรรไกรตัดแต่งกิ่ง",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/8592025_1906z_short-handled-bypass-loppers.jpg",
        price: 754,
        description:
          "Loppersเป็นกรรไกรชนิดหนึ่งที่ใช้สำหรับการตัดแต่งกิ่งกิ่งและกิ่งเล็ก ๆ เช่นกรรไกรตัดแต่งกิ่งที่มีด้ามยาวมาก เป็นเครื่องมือตัดสวนแบบแมนนวลที่ใหญ่ที่สุด.",
      },
      {
        id: 42,
        name: "ส้อมสวน",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/Garden-Tools-Q235-Carbon-Steel-Mini-Fork-for-Gardening.jpg",
        price: 79,
        description:
          "เป็นอุปกรณ์ทำสวนที่มีด้ามจับและหลายอัน (ปกติสี่อัน) สั้น ซี่ ใช้สำหรับการคลายการยกและการพลิก ดิน ในการทำสวนและการทำไร่ มันใช้คล้ายกับ จอบ แต่ในหลาย ๆ สถานการณ์มันจะเหมาะสมกว่าจอบเสียมWikipedia  site:isecosmetic.com",
      },
      {
        id: 43,
        name: "เกรียงมือ",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/9137i_hand-trowel.jpg",
        price: 125,
        description:
          "เหมาะสำหรับนุ่มดิน!มี Scale เฮ้าส์สำหรับ Easy และแม่นยำใช้ ปลอดภัยใช้และไม่เป็นอันตรายต่อ Root System. การออกแบบเสริม,ทนทานและไม่เสียรูปที่จับสบายและลื่นใช้กันอย่างแพร่หลายและทนทาน",
      },
      {
        id: 44,
        name: "บัวรดน้ำ",
        imageUrl:
          "https://i2.fpic.cc/file/img-b1/2021/12/17/swiss-plastic-watering-can-rose.jpg",
        price: 144,
        description:
          "ใช้สำหรับรดน้ำพืช น้ำที่ออกจากฝักบัวจะเป็นฝอยกระจายทั่วต้นพืชทำให้พืชได้รับน้ำอย่างทั่วถึง และส่วนต่างๆ ของพืชไม่หักง่าย การใช้บัวรดน้ำ ถ้าไม่ระมัดระวังจะเสียหายง่ายที่ส่วนคอของฝักบัวจึงควรจับที่หูหิ้วหรือที่มือจับเท่านั้น",
      },
    ],
  },
};

export default PLANTS_DATA;

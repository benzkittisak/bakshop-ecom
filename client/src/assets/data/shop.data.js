const PLANTS_DATA = {
  houseplants: {
    id: 1,
    title: "House Plants",
    routeName: "shop/cat/houseplants",
    previewImage:
      "https://sv1.picz.in.th/images/2022/06/13/V4DZVV.md.jpg",
    items: [
      {
        id: 2,
        name: "มอนสเตอร่า ไจแอนท์",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4wb0S.jpg",
        price: 2234,
        description:
          "มอนสเตอร่า (Monstera, Swiss Cheese Plant) หรือที่เรียกทั่วไปว่า พลูฉีก หรือ พลูแฉก มีถิ่นกำเนิดในทวีปอเมริกากลาง พบมากในป่าดิบชื้น เป็นต้นไม้ในวงศ์ Araceae มีชื่อทางวิทยาศาสตร์ว่า Monstera deliciosa Liebm. ลักษณะลำต้นเป็นข้อสั้น จัดอยู่ในกลุ่มไม้เลื้อย สามารถเลื้อยได้ไกล 4 เมตร มีจุดเด่นที่ใบเดี่ยวขนาดใหญ่ โคนใบเว้าลึกเป็นรูปหัวใจ ปลายใบเรียวแหลม ขอบใบหยักลึกเกือบถึงเส้นกลางใบ 5 แฉก ใบหนาผิวมัน มีทั้งสีเขียวเข้มและใบด่าง ออกดอกตามซอกใบ มีผลสีเขียว จะเปลี่ยนเป็นสีน้ำตาลเมื่อผลสุกและส่งกลิ่นแรง",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4wjZn.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4woyW.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4wA92.jpg",
        ],
      },
      {
        id: 3,
        name: "เดหลี",
        new: true,
        imageUrl: "https://sv1.picz.in.th/images/2022/06/13/V4waTz.jpg",
        price: 1099,
        description:
          "เป็นพืชที่มีดอกเดี่ยว monocotyledonous ประมาณ 47 ชนิดในตระกูล Araceae ถิ่นกำเนิดในเขตร้อนชื้นของอเมริกาและเอเชียตะวันออกเฉียงใต้ Spathiphyllum บางชนิดเป็นที่รู้จักกันทั่วไปว่าเป็น Spath หรือ Lily Peace พวกเขาเป็นไม้ยืนต้นเป็นต้นไม้เขียวชอุ่มตลอดปีมีใบขนาดใหญ่ 12-65 ซม. และกว้าง 3-25 ซม.",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4wVyq.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4w8cf.png",
          "https://sv1.picz.in.th/images/2022/06/13/V4wr0b.jpg",
        ],
      },
      {
        id: 4,
        name: "แววมยุรา",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4KLWI.jpg",
        price: 890,
        description:
          "Maranta leuconeura ยังเป็นที่รู้จักกันในนามพืชอธิษฐานเป็นพรรณไม้ดอกในตระกูล Marantaceae ซึ่งมีถิ่นกำเนิดในป่าเขตร้อนของบราซิล มันเป็นตัวแปรยืนต้น rhizomatous เติบโตสูงถึง 30 ซม. และกว้างกับกอหนาแน่นของเอเวอร์กรีนใบรูปไข่โดดเด่นโดดเด่นแต่ละยาวถึง 12 ซม",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4KGnZ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4KeKP.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4KI3l.jpg",
        ],
      },
      {
        id: 5,
        name: "กวักมรกต",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4cPIb.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4c2wf.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4cCoa.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4cuJq.jpg",
        ],
        price: 1099,
        description:
          "Zamioculcas เป็นไม้ดอกในสกุล Araceae ประกอบด้วย Zamioculcas zamiifolia เดียว เป็นไม้ยืนต้นเขตร้อนที่มีถิ่นกำเนิดในแอฟริกาตะวันออก ตั้งแต่เคนยาตอนใต้ไปจนถึงแอฟริกาใต้ตะวันออกเฉียงเหนือ ชื่อสามัญ ได้แก่ Zanzibar gem, ZZ plant, Zuzu plant, aroid palm, eternity plant และ Emerald palm ปลูกเป็นไม้ประดับ",
      },
      {
        id: 6,
        name: "ไอวี่",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4QjcE.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4QoyV.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4QATQ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4j1h9.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4jtJD.jpg"
        ],
        price: 599,
        description:
          "Hedera helix, ไม้เลื้อยทั่วไป, ไม้เลื้อยอังกฤษ, ไม้เลื้อยยุโรปหรือไม้เลื้อยเป็นไม้ดอกชนิดหนึ่งในสกุลไม้เลื้อยในตระกูล Araliaceae มีถิ่นกำเนิดในยุโรปและเอเชียตะวันตกส่วนใหญ่ เถาวัลย์ที่เขียวชอุ่มตลอดปี เป็นที่คุ้นเคยในสวน พื้นที่รกร้าง และพื้นที่ป่า ซึ่งเติบโตตามผนัง รั้ว ลำต้นของต้นไม้ ฯลฯ",
      },
      {
        id: 7,
        name: "ว่านหางจระเข้",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4l7Wq.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4ld6a.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4jMzb.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4jFXJ.jpg",
        ],
        price: 1834,
        description:
          "Hedera helix, ไม้เลื้อยทั่วไป, ไม้เลื้อยอังกฤษ, ไม้เลื้อยยุโรปหรือไม้เลื้อยเป็นไม้ดอกชนิดหนึ่งในสกุลไม้เลื้อยในตระกูล Araliaceae มีถิ่นกำเนิดในยุโรปและเอเชียตะวันตกส่วนใหญ่ เถาวัลย์ที่เขียวชอุ่มตลอดปี เป็นที่คุ้นเคยในสวน พื้นที่รกร้าง และพื้นที่ป่า ซึ่งเติบโตตามผนัง รั้ว ลำต้นของต้นไม้ ฯลฯ",
      },
      {
        id: 8,
        name: "ต้นแมงมุม",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4lfaZ.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4lkzI.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4ltWe.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4lwKl.webp",
        ],
        price: 800,
        description:
          "เศรษฐีเรือนใน เป็นไม้ในวงศ์ Anthericaceae มีเหง้าใต้ดิน รากสีขาว อวบน้ำ ใบเป็นแถบยาวสีเขียว ขลิบเขียวตามขอบใบ ตรงกลางสีขาว ดอกสีขาว ขนาดเล็ก มีกลิ่นหอม เป็นพืชพื้นเมืองของกาบอง",
      },
      {
        id: 9,
        name: "พลูด่าง",
        new: true,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4luda.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4l6Zq.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4lnsz.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4lrm8.jpg",
        ],
        price: 340,
        description:
          "พลูด่าง เป็นพืชดอกชนิดหนึ่งในวงศ์ Araceae ซึ่งกระจายพันธุ์อยู่ทั่วโลก ตั้งแต่ออสเตรเลีย จีน ญี่ปุ่น อินเดีย พืชชนิดนี้พบในป่าเขตร้อนทั่วโลก ในบางครั้งอาจเป็นสร้างความเสียหายทางนิเวศวิทยาด้วย พืชชนิดนี้มีหลายชื่อ",
      },
      {
        id: 10,
        name: "ลิ้นมังกร",
        new: false,
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4oqBu.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4oRT8.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4oQG0.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4o5qZ.jpg",
        ],
        price: 459,
        description:
          "ลิ้นมังกร เป็นพืชในวงศ์ Asparagaceae เป็นไม้ล้มลุก มีเหง้าใต้ดิน ใบเดี่ยว สีเขียวเข้มแกมเทา อวบน้ำ ดอกช่อ สีขาวมีกลิ่นหอม เป็นพืชท้องถิ่นในแอฟริกาตะวันตกตั้งแต่ไนจีเรียถึงคองโก ใช้เป็นไม้ประดับ ใบใช้ตำละเอียด แก้พิษตะขาบ แมงป่อง ชื่อทวินามเดิม Sansevieria trifasciata ปัจจุบันจัดเป็นชื่อพ้องของลิ้นมังกร",
      },
    ],
  },
  officeplants: {
    id: 11,
    title: "Office Plants",
    routeName: "shop/cat/officeplants",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-daria-shevtsova-970089.md.jpg",
    items: [
      {
        id: 12,
        name: "กุหลาบหิน",
        link: "shop/office-plants/Kalanchoe",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4D21q.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4DPMa.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4DA6f.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4DDRb.jpg",
        ],
        price: 199,
        description:
          "กุหลาบหิน เป็นไม้ในสกุลที่ส่วนใหญ่เป็นไม้พุ่ม อวบน้ำและมีอายุอยู่ได้นานหลายปี มีถิ่นกำเนิดในมาดากัสกาแอฟริกาและเอเชีย เหมาะที่จะปลูกเป็นไม้กระถาง ต้นดั้งเดิมส่วนมากจะมีลักษณะต้นสูงเก้งก้าง ต่อมาได้มีการคัดเลือกพันธุ์ อันเนื่องมาจากการกระจายพันธุ์และการผสมพันธุ์ ทำให้ได้พันธุ์ใหม่ที่มีพุ่มต้นเตี้ยกะทัดรัด",
      },
      {
        id: 13,
        name: "ต้นคลาสซูล่า",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4AYPW.jpg",
        price: 799,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4A7Wn.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4Aze2.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4AN31.jpg",
        ],
        description:
          "สำหรับ “ต้นคลาสซูล่า” ( Crassula Ovata หรือ Jade Plant) นั้นเป็นไม้อวบน้ำซึ่งสามารถเรียกว่าเป็นต้นไม้สวรรค์ ต้นใบเงินก็ได้ โดยลักษณะของต้นคลาสซูล่านั้นมีใบสีเขียวสวยงาม ใบหนาเรียบเนียน เวลาออกดอกจะออกดอกเป็นสีชมพู หรือสีขาว ลักษณะคล้ายรูปดาว ซึ่งดอกจะออกในช่วงฤดูหนาว",
      },
    ],
  },
  gardenplants: {
    id: 14,
    title: "Garden Plants",
    routeName: "shop/cat/gardenplants",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-scott-webb-1048035.md.jpg",
    items: [
      {
        id: 15,
        name: "ไผ่ฟาร์เจีย",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4s0DW.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4s7J2.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4sz5y.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4sYh1.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4s4VD.jpg",
        ],
        price: 799,
        description:
          "Fargesia murielae ต้นไผ่ร่มเป็นพรรณไม้ดอกในตระกูล Poaceae มันเป็นไผ่เขียวขจีขนาดใหญ่ที่ก่อตัวเป็นกอคล้ายกับฟาร์เซียไนตริดาในสกุลเดียวกัน แต่มีอ้อยสีเหลือง",
      },
      {
        id: 16,
        name: "สนบลู",
        imageUrl: "https://sv1.picz.in.th/images/2022/06/13/V4sueW.jpg",
        price: 1799,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4snk2.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4s8Xy.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4srO1.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4sVzD.jpg",
        ],
        description:
          "Chamaecyparis lawsoniana หรือที่รู้จักในชื่อ Port Orford cedar หรือ Lawson cypress เป็นสายพันธุ์ของต้นสนในสกุล Chamaecyparis ตระกูล Cupressaceae มันมีถิ่นกำเนิดในโอเรกอนและแคลิฟอร์เนียทางตะวันตกเฉียงเหนือและเติบโตจากระดับน้ำทะเลถึง 1,500 เมตรในหุบเขาของเทือกเขา Klamath ซึ่งมักจะมีลำธารไหลผ่าน",
      },
      {
        id: 17,
        name: "อะกาเว",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4sM40.jpg",
        price: 569,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V42Wxu.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4sFaR.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4sm3z.jpg",
        ],
        description:
          "Agave Americana มีชื่อสามัญว่า Century plant, maguey หรือ American aloe เป็นไม้ดอกในวงศ์ Asparagaceae มีถิ่นกำเนิดในเม็กซิโกและสหรัฐอเมริกาในเท็กซัส มีการปลูกทั่วโลกเพื่อเป็นไม้ประดับ และได้รับการแปลงสัญชาติในหลายภูมิภาค รวมถึงบางส่วนของหมู่เกาะอินเดียตะวันตก อเมริกาใต้ ลุ่มน้ำเมดิเตอร์เรเนียน แอฟริกา อินเดีย จีน ไทย",
      },
      {
        id: 18,
        name: "ดอกกุหลาบ",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V42zee.jpg",
        price: 129,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V42N3l.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V42Bbk.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V42fav.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V42k4E.jpg",

        ],
        description:
          "กุหลาบ คือดอกไม้ในสกุล Rosa ในวงศ์ Rosaceae ที่ได้รับความนิยมปลูกมากที่สุดชนิดหนึ่งของโลกที่มีต้นกำเนิดจากทวีปเอเชีย ผู้คนนิยมปลูกเพื่อความสวยงาม ตกแต่งสวน, ประดับตกแต่งบ้าน, ประดับสถานที่, ปลูกเพื่อการพาณิชย์ อาทิ เพื่อนำไปสกัดน้ำหอม นำไปทำเป็นส่วนประกอบของสปา เป็นต้น",
      },
      {
        id: 19,
        name: "ปาล์มชาแมรอปส์",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V42Vjl.jpg",
        price: 1599,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V42Xvk.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V42pNv.jpg",
        ],
        description:
          "ปาล์มชาแมรอปส์ เป็นปาล์มชนิดเดียวในสกุล Chamaerops มีถิ่นกำเนิดในบริเวณเมดิเตอร์เรเนียน นิยมปลูกเป็นไม้ประดับ ใบอ่อนสามารถรับประทานได้ และนำมาทำของใช้ได้ และมีการใช้พืชชนิดนี้ในการแพทย์ท้องถิ่นของแอลจีเรีย",
      },
      {
        id: 20,
        name: "สือชังผู่",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4Cz79.jpg",
        price: 80,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4CS8D.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4C4cJ.png",
          "https://sv1.picz.in.th/images/2022/06/13/V4CN2b.webp",
        ],
        description:
          "สือชังผู่ ในภาษาจีนกลางหรือเจียะเซียงผู้ในภาษาจีนแต้จิ๋ว ชื่อวิทยาศาสตร์: Acorus gramineus เป็นพืชท้องถิ่นของญี่ปุ่นและเอเชียตะวันออก ชอบขึ้นในที่ชื้นแฉะ อยู่ในวงศ์ Acoraceae ด้านนอกเป็นสีเทาหรือสีน้ำตาล ด้านในเป็นสีเหลืองอมขาวอ่อนๆ ในตำรายาจีนเป็นยาขับเสมหะ ทำให้จิตใจสงบ",
      },
      {
        id: 21,
        name: "ต้นปรงป่า",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4CL58.jpg",
        price: 3500,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4CeVR.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4CyY0.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4CFiu.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4CIuZ.jpg",
        ],
        description:
          "Encephalartos altensteinii เป็นปรงเหมือนต้นปาล์มในตระกูล c มันเป็นโรคประจำถิ่นไปยังแอฟริกาใต้ ชื่อสายพันธุ์อัลเทนสไตนินี่เอกสิทธิ์อัลเทนสไตน์นายกรัฐมนตรีและผู้อุปถัมภ์ด้านวิทยาศาสตร์ของเยอรมันในศตวรรษที่ 19 มันเป็นที่รู้จักกันทั่วไปว่าเป็น breadtree, broodboom, ปรงยักษ์ตะวันออก",
      },
    ],
  },
  bonsais: {
    id: 22,
    title: "Bonsais",
    routeName: "shop/cat/bonsais",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/27/small-bonsai-tree-hobbit-growing-in-a-red-flowerpo-2021-08-30-02-30-42-utc.md.jpg",
    items: [
      {
        id: 23,
        name: "เมเปิ้ลญี่ปุ่น",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V46xNk.jpg",
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V46ipl.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V46c9t.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V46gbe.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V46QQv.jpg",
        ],
        price: 2799,
        description:
          "เมเปิ้ลญี่ปุ่น เป็นพันธุ์ไม้ยืนต้นในประเทศญี่ปุ่น เกาหลี จีน มองโกเลียตะวันออก และรัสเซียตะวันออกเฉียงใต้ สายพันธุ์อีกมากมายที่แตกต่างกันของเมเปิ้ลนี้ได้มีการปลูกขึ้นทั่วโลกเนื่องจากรูปร่างที่น่าสนใจจำนวนมาก เช่นรูปทรงใบไม้ และสีที่งดงาม",
      },
      {
        id: 24,
        name: "ต้นหนวดปลาหมึกแคระ",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V466c9.jpg",
        price: 1399,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V46u0D.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V462ry.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V46nsJ.jpg",
        ],
        description:
          "Schefflera arboricola เป็นไม้ดอกในวงศ์ Araliaceae มีถิ่นกำเนิดในไต้หวันและไหหลำ ชื่อสามัญของมันคือต้นไม้ร่มแคระเนื่องจากมีลักษณะคล้ายกับต้นไม้ร่มรุ่นเล็กนั่นคือ Schefflera actinophylla",
      },
      {
        id: 25,
        name: "ไทรย้อยใบทู่",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V46ITP.jpg",
        price: 999,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V46yyI.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V46Mlt.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4nWve.jpg",
        ],
        description:
          "ไทรย้อยใบทู่ หรือ ไทรย้อย เป็นไม้ประเภทบันยัน ในสกุล Ficus ในวงศ์ Moraceae ",
      },
      {
        id: 26,
        name: "โพ",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4nqfq.jpg",
        price: 795,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4n55z.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4nQGa.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4nxof.jpg",

        ],
        description:
          "โพ หรือ โพธิ์ เป็นต้นไม้สปีชีส์หนึ่งของไทรหรือมะเดื่อ เป็นพืชพื้นเมืองของอินเดีย, เนปาล, ศรีลังกา, ตะวันตกเฉียงใต้ของจีน และอินโดจีน เป็นต้นไม้ขนาดใหญ่ผลัดใบในฤดูร้อน สูงได้ถึง 30 เมตร ลำต้นมีเส้นผ่านศูนย์กลางได้ถึง 3 เมตร",
      },
      {
        id: 27,
        name: "บีชยุโรป",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4nCfe.jpg",
        price: 2187,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4nrSv.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4n6Vk.jpg",
        ],
        description:
          "บีชยุโรปหรือบีชทั่วไปเป็นต้นไม้ผลัดใบที่อยู่ในวงศ์บีช Fagaceae",
      },
      {
        id: 28,
        name: "ยี่เข่ง",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4neV2.jpg",
        price: 1587,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4nLEW.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4nJhg.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4npDS.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4nvJn.jpg",
        ],
        description:
          "ลาเกอร์สโตรเมียหรือที่เรียกกันทั่วไปว่าเครปไมร์เทิลเป็นพืชสกุลไม้ผลัดใบและป่าดิบชื้นประมาณ 50 สายพันธุ์ มีถิ่นกำเนิดในอนุทวีปอินเดีย เอเชียตะวันออกเฉียงใต้ ทางตอนเหนือของออสเตรเลีย เป็นสมาชิกของวงศ์ Lythraceae ซึ่งเรียกอีกอย่างว่าตระกูล Loosestrife",
      },
      {
        id: 29,
        name: "Buxus",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4riRv.png",
        price: 459,
        description:
          "Buxus เป็นสกุลประมาณเจ็ดสิบชนิดในตระกูล Buxaceae ชื่อสามัญ ได้แก่ กล่องหรือไม้บ็อกซ์วูด",
      },
      {
        id: 30,
        name: "ศุภโชค",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4rm3P.webp",
        price: 954,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4rJPZ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4rGKu.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4rvd0.jpg",
        ],
        description:
          "ศุภโชค เป็นไม้ยืนต้น พืชเขตร้อน มีถิ่นกำเนิดแถบทวีปอเมริกาใต้ เช่น ประเทศเม็กซิโก บราซิล หมู่เกาะฮาวาย นิยมนำมาถักเป็นไม้แคระกระถาง และมีความเชื่อว่าเป็นไม้มงคล ภาษาจีนเรียกว่า “เหยาเฉียนซู่” แปลว่า เรียกเงิน หรือ เขย่าเงิน",
      },
    ],
  },
  orchids: {
    id: 31,
    title: "Orchids",
    routeName: "shop/cat/orchids",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-mariola-3699859.jpg",
    items: [
      {
        id: 32,
        name: "สกุลเขากวางอ่อน",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V48Dvt.jpg",
        price: 499,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V48Osu.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V48byZ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V48l9I.jpg",
        ],
        description:
          "สกุลเขากวางอ่อน หรือฟาแลนน็อปซิส เป็นสกุลของกล้วยไม้ พบได้ทั่วไปในประเทศพม่า ไทย ลาว มาเลเซีย อินโดนีเซีย ฟิลิปปินส์ และหมู่เกาะใกล้เคียงในมหาสมุทรแปซิฟิก รวมทั้งตอนเหนือของทวีปออสเตรเลีย จึงกล่าวได้ว่ามีการกระจายพันธุ์อยู่ในทวีปเอเชีย",
      },
      {
        id: 33,
        name: "กล้วยไม้",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V48VlS.jpg",
        price: 399,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V48HTQ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V48pBg.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V48vqW.jpg",
        ],
        description:
          "กล้วยไม้ หรือ เอื้อง เป็นพืชดอกที่มีความหลากหลายมากที่สุดกลุ่มหนึ่ง โดยมีประมาณ 899 สกุล และมีประมาณ 27,000 ชนิดที่มีการยอมรับ คิดเป็น 6–11% ของพืชมีเมล็ด มีการค้นพบราว ๆ 800 ชนิดทุก ๆ ปี มีสกุลใหญ่ ๆ คือ Bulbophyllum, Epidendrum, Dendrobium และ Pleurothallis สายพันธุ์ของกล้วยไม้ที่ขึ้นและเติบโตในป่า",
      },
      {
        id: 34,
        name: "สกุลรองเท้านารี",
        imageUrl: "https://sv1.picz.in.th/images/2022/06/13/V4Htqe.jpg",
        price: 699,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4H3GP.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4HklI.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4HhtZ.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4HBFu.jpg",
        ],
        description:
          "สกุลรองเท้านารี เป็นพันธุ์ไม้ประเภทกล้วยไม้ ตั้งขึ้นเมื่อ พ.ศ. 2429 โดยนักพฤกษศาสตร์ชาวเยอรมัน มาจากรากศัพท์ภาษากรีกคือ Paphia หมายถึงเทพธิดาแห่งความรักและความงาม และ pedilon หมายถึงรองเท้าของผู้หญิง ซึ่งหมายถึงลักษณะกลีบดอกที่เป็นถุงลึกคล้ายรองเท้า พบทั่วไปในเอเชียตะวันออกเฉียงใต้",
      },
      {
        id: 35,
        name: "สกุลหวาย",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4HMME.jpg",
        price: 185,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4HFRk.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4HyYl.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4HIuv.jpg",
        ],
        description:
          "สกุลหวาย เป็นสกุลหนึ่งของพืชวงศ์กล้วยไม้ ตั้งขึ้นเมื่อ ค.ศ. 1779 โดย Peter Olof Swartz ชาวสวีเดน มาจากรากศัพท์ภาษากรีก คือ dendron และ bios หมายถึงสิ่งมีชีวิตที่อาศัยบนต้นไม้อื่น ทั่วโลกพบกล้วยไม้ที่อยู่ในสกุลนี้ถึง 900 ชนิด ในไทยพบ 184 ชนิด",
      },
      {
        id: 36,
        name: "สกุลว่านน้ำทอง",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4Vh61.jpg",
        price: 1054,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4VkMy.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VTA9.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VtLJ.jpg",
        ],
        description:
          "สกุลว่านน้ำทอง หรือ Ludisia เป็นกล้วยไม้สกุลหนึ่ง มีสมาชิกเพียงชนิดเดียวคือว่านน้ำทอง Ludisia discolor มีถิ่นกำเนิดในจีนตอนใต้, อินเดียตะวันออกเฉียงเหนือ, ไทย, เวียดนาม, ฟิลิปปินส์, มาเลเซีย, อินโดนีเซีย และพม่า",
      },
      {
        id: 37,
        name: "สกุลออนซิเดียม",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4Vjat.jpg",
        price: 999,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4VbOP.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4Voze.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VDxl.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VsWv.jpg",
        ],
        description:
          "Oncidium ย่อว่า Onc ในการค้าพืชสวนเป็นสกุลที่มีประมาณ 330 ชนิดของกล้วยไม้จาก subtribe Oncidiinae ของครอบครัวกล้วยไม้ ปัจจุบันมีการกระจายไปทั่วอเมริกาใต้อเมริกาใต้เม็กซิโกและหมู่เกาะอินเดียตะวันตกโดยขยายพันธุ์ไปยังฟลอริดา ชื่อสามัญของพืชในประเภทนี้ ได้แก่ กล้วยไม้เต้นรำหญิงและกล้วยไม้อาบน้ำสีทอง",
      },
    ],
  },
  accessories: {
    id: 38,
    title: "Accessories",
    routeName: "shop/cat/accessories",
    previewImage:
      "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-rocketmann-team-9507266.jpg",
    items: [
      {
        id: 39,
        name: "ถุงมือ",
        imageUrl: "https://sv1.picz.in.th/images/2022/06/13/V4VLm9.jpg",
        price: 25,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4VJPD.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4Vm3J.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4Vybb.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VFpf.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4VM4a.jpg",
        ],
        description:
          "ถุงมือสำหรับขุดดินทำสวนที่มาพร้อมกรงเล็บแข็งแรงในตัว ให้คุณสวมใส่เพื่อขุดดิน พรวนดิน หรือเตรียมดินปลูกต้นไม้ได้อย่างสะดวกรวดเร็วโดยมือไม่เลอะเทอะเปรอะเปื้อนแม้แต่น้อย! จัดการงานทำสวนให้เสร็จได้รวดเร็วขึ้นทันทีถุงมือขุดดินทำสวน",
      },
      {
        id: 40,
        name: "กรรไกรตัดแต่งกิ่ง",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4XSZR.jpg",
        price: 199,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4X7d8.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4XYs0.png",

        ],
        description:
          "ออกแบบ และรังสรรค์กิ่งไม้ให้สวยงาม ได้รูปทรง ดูโดดเด่น และเป็นระเบียบ ไม่รกรุงรัง ด้วยกรรไกรแต่งกิ่ง ตัวช่วยอำนวยในงานเกษตร การทำความสะอาด หรือจัดสวนมีความสะดวก และรวดเร็วมากขึ้น ผ่านกระบวนการผลิตที่ได้มาตรฐาน วัสดุคุณภาพ มีความแข็งแรงทนทาน ช่วยตัดแต่งกิ่งไม้ได้ดั่งใจ อีกทั้งให้การตัดขาดได้ง่าย และฉับไว",
      },
      {
        id: 41,
        name: "Loppers",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4XkNt.jpg",
        price: 754,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4XfpP.png",
          "https://sv1.picz.in.th/images/2022/06/13/V4X3Qe.jpg",
        ],
        description:
          "Loppersเป็นกรรไกรชนิดหนึ่งที่ใช้สำหรับการตัดแต่งกิ่งกิ่งและกิ่งเล็ก ๆ เช่นกรรไกรตัดแต่งกิ่งที่มีด้ามยาวมาก เป็นเครื่องมือตัดสวนแบบแมนนวลที่ใหญ่ที่สุด.",
      },
      {
        id: 42,
        name: "ส้อมสวน",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4XXvI.jpg",
        price: 79,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4XrF0.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4XVlZ.jpg",
        ],
        description:
          "เป็นอุปกรณ์ทำสวนที่มีด้ามจับและหลายอัน (ปกติสี่อัน) สั้น ซี่ ใช้สำหรับการคลายการยกและการพลิก ดิน ในการทำสวนและการทำไร่ มันใช้คล้ายกับ จอบ แต่ในหลาย ๆ สถานการณ์มันจะเหมาะสมกว่าจอบเสียมWikipedia  site:isecosmetic.com",
      },
      {
        id: 43,
        name: "เกรียงมือ",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4aRw0.jpg",
        price: 125,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4acC8.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4aZiz.webp",
          "https://sv1.picz.in.th/images/2022/06/13/V4agIR.webp",
        ],
        description:
          "เหมาะสำหรับนุ่มดิน!มี Scale เฮ้าส์สำหรับ Easy และแม่นยำใช้ ปลอดภัยใช้และไม่เป็นอันตรายต่อ Root System. การออกแบบเสริม,ทนทานและไม่เสียรูปที่จับสบายและลื่นใช้กันอย่างแพร่หลายและทนทาน",
      },
      {
        id: 44,
        name: "บัวรดน้ำ",
        imageUrl:
          "https://sv1.picz.in.th/images/2022/06/13/V4pCPR.jpg",
        price: 89,
        showImage: [
          "https://sv1.picz.in.th/images/2022/06/13/V4p2K8.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4pum0.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4pn3u.jpg",
          "https://sv1.picz.in.th/images/2022/06/13/V4p8aI.webp",
        ],
        description:
          "ใช้สำหรับรดน้ำพืช น้ำที่ออกจากฝักบัวจะเป็นฝอยกระจายทั่วต้นพืชทำให้พืชได้รับน้ำอย่างทั่วถึง และส่วนต่างๆ ของพืชไม่หักง่าย การใช้บัวรดน้ำ ถ้าไม่ระมัดระวังจะเสียหายง่ายที่ส่วนคอของฝักบัวจึงควรจับที่หูหิ้วหรือที่มือจับเท่านั้น",
      },
    ],
  },
};

export default PLANTS_DATA;

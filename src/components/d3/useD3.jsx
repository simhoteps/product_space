import React, { useEffect, useRef ,useState} from "react";
import * as d3 from "d3";
import { Stack, Typography } from "@mui/material";

const Tooltip = ({ x, y, content1, content2}) => {
  return (
    <div
      style={{
        maxWidth:"500px",
        position: "absolute",
        left: x + 10, // İstediğiniz konumu ayarlayabilirsiniz
        top: y + 10,
        background: "white",
        padding: "5px",
        border: "1px solid #ccc",
      }}
    >
      <Stack direction={"row"} alignItems={"flex-start"} gap={"4px"}>
        <Typography variant="subtitle2" > Ürün:</Typography>
        <Typography variant="subtitle2" fontWeight={300} > {content1}</Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"flex-start"}  gap={"4px"}>
        <Typography variant="subtitle2" > Grup:</Typography>
        <Typography variant="subtitle2"  fontWeight={300}  > {content2}</Typography>
      </Stack>
  
    </div>
  );
};

const ForceDirectedGraph = () => {
  const chartRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  function convertIdToString(id) {
    return id.toString();
  }
  const newNodes =data.nodes.map(item => ({
    ...item,
    id: convertIdToString(item.id)
  }));

  useEffect(() => {
    const width = 3500;
    const height = 2700;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const links = data.links.map((d) => ({ ...d }));
    const nodes = newNodes.map((d) => ({ ...d }));
    const types = Array.from(new Set(data.nodes.map(d => d.group)));
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

      const customColors = d3.scaleOrdinal()
  .domain(types) // `types` is an array of unique group values
  .range(["#5A6FC0", "#9ECA7F", "#F2CA6B", "#DE6F6B", "#85BEDB","#59A075","#EC8A5E","#8354A0","#DC81C8","#5A6FC0","#9ECA7F"]);
    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");


    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 4)
      .selectAll()
      .data(links)
      .join("line")
      .attr("stroke-width", 4)
      /* .attr("stroke-width", (d) => Math.sqrt(d.value*500)) */
     

    const node = svg
      .append("g")
   /*    .attr("stroke", "#999")
      .attr("stroke-width", 3) */
      .selectAll()
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.symbolSize*15)
      .attr("fill", (d) => customColors(d.group))
      .attr("opacity", 1)


    node.append("title").text((d) => d.id);


    // Node üzerine gelme (mouseover) olayı
    node.on("mouseover", (event, d) => {
      /* node.attr("fill", "gray"); */
      node.attr("opacity", 0.1);
      const nodeId = d.id;
      const relatedLinks = links.filter(link => link.source.id === nodeId || link.target.id === nodeId);

      link
      .attr("stroke", linkData => relatedLinks.includes(linkData) ? "#FF0000" : "#999")
      .attr("stroke-width", linkData => relatedLinks.includes(linkData) ? 8 : 2);

      // Seçilen node'u belirgin yap
/*       d3.select(event.target).attr("fill", "red"); */
      d3.select(event.target).attr("opacity", 1);
     

      setTooltip({
        x: event.pageX,
        y: event.pageY,
        content1: d.name,
        content2: `${d.group}`,
      })
    });

    node.on("mouseout", (event, d) => {
      // Tüm nodeların rengini orijinal renklerine döndür
/*       node.attr("fill", (d) => color(d.group)); */
      node.attr("opacity", 1);
      link.attr("stroke", "#999")
    .attr("stroke-width", 2);
    setTooltip(null);
    });


    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    }
  }, [data]);

  return <Stack sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"100vh"
  }}>
    {tooltip && (
  <Tooltip x={tooltip.x} y={tooltip.y} content1={tooltip.content1} content2={tooltip.content2} />
)}
<svg ref={chartRef} />
  </Stack> 
};

export default ForceDirectedGraph;


const data = {
  nodes: [
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 510,
        "name": "510-Taş kömürü madenciliği",
        "symbolSize": 2.320740740740741,
        x: 0, y: 0
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 520,
        "name": "520-Linyit madenciliği",
        "symbolSize": 1.363827160493827
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 610,
        "name": "610-Ham petrol çıkarımı",
        "symbolSize": 1.9220987654320987
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 620,
        "name": "620-Doğal gaz çıkarımı",
        "symbolSize": 1.8582716049382717
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 710,
        "name": "710-Demir cevherleri madenciliği",
        "symbolSize": 2.120987654320987
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 721,
        "name": "721-Uranyum ve toryum cevherleri madenciliği",
        "symbolSize": 1.8372345679012347
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 729,
        "name": "729-Diğer demir dışı metal cevherleri madenciliği",
        "symbolSize": 2.4563668430335075
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 811,
        "name": "811-Süsleme ve yapı taşları ile kireç taşı, alçı taşı, tebeşir ve kayağantaşı (arduvaz-kayraktaşı) ocakçılığı",
        "symbolSize": 1.6198412698412694
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 812,
        "name": "812-Çakıl ve kum ocaklarının faaliyetleri; kil ve kaolin çıkarımı",
        "symbolSize": 1.8916460905349803
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 891,
        "name": "891-Kimyasal ve gübreleme amaçlı mineral madenciliği",
        "symbolSize": 1.0136419753086419
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 892,
        "name": "892-Turba çıkarımı",
        "symbolSize": 1.4335802469135803
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 893,
        "name": "893-Tuz çıkarımı",
        "symbolSize": 1.9300617283950614
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 899,
        "name": "899-Başka yerde sınıflandırılmamış diğer madencilik ve taş ocakçılığı",
        "symbolSize": 1.5239999999999996
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 910,
        "name": "910-Petrol ve doğal gaz çıkarımını destekleyici faaliyetler",
        "symbolSize": 2.467407407407407
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 990,
        "name": "990-Madencilik ve taş ocakçılığını destekleyici diğer faaliyetler",
        "symbolSize": 1.6076543209876546
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1011,
        "name": "1011-Etin işlenmesi ve saklanması",
        "symbolSize": 1.3862962962962968
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1012,
        "name": "1012-Kümes hayvanları etlerinin işlenmesi ve saklanması",
        "symbolSize": 3.3862962962962966
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1013,
        "name": "1013-Et ve kümes hayvanları etlerinden üretilen ürünlerin imalatı",
        "symbolSize": 1.1043518518518507
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1020,
        "name": "1020-Balık, kabuklu deniz hayvanları ve yumuşakçaların işlenmesi ve saklanması",
        "symbolSize": 1.9649176954732508
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1031,
        "name": "1031-Patatesin işlenmesi ve saklanması",
        "symbolSize": 1.225493827160494
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1032,
        "name": "1032-Sebze ve meyve suyu imalatı",
        "symbolSize": 1.5300617283950617
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1039,
        "name": "1039-Başka yerde sınıflandırılmamış meyve ve sebzelerin işlenmesi ve saklanması",
        "symbolSize": 1.0727160493827144
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1041,
        "name": "1041-Sıvı ve katı yağ imalatı",
        "symbolSize": 0.803163580246914
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1042,
        "name": "1042-Margarin ve benzeri yenilebilir katı yağların imalatı",
        "symbolSize": 0.28666666666666674
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1051,
        "name": "1051-Süthane işletmeciliği ve peynir imalatı",
        "symbolSize": 1.2422962962962962
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1052,
        "name": "1052-Dondurma imalatı",
        "symbolSize": 0.6659259259259261
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1061,
        "name": "1061-Öğütülmüş hububat ve sebze ürünleri imalatı",
        "symbolSize": 1.2790895061728398
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1062,
        "name": "1062-Nişasta ve nişastalı ürünlerin imalatı",
        "symbolSize": 1.129358024691358
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1071,
        "name": "1071-Ekmek, taze pastane ürünleri ve taze kek imalatı",
        "symbolSize": 1.1561728395061717
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1072,
        "name": "1072-Peksimet ve bisküvi imalatı; dayanıklı pastane ürünleri ve dayanıklı kek imalatı",
        "symbolSize": 1.5831275720164608
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1073,
        "name": "1073-Makarna, şehriye, kuskus ve benzeri unlu mamullerin imalatı",
        "symbolSize": 1.1083950617283955
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1081,
        "name": "1081-Şeker imalatı",
        "symbolSize": 2.3897530864197525
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1082,
        "name": "1082-Kakao, çikolata ve şekerleme imalatı",
        "symbolSize": 0.813756613756613
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1083,
        "name": "1083-Kahve ve çayın işlenmesi",
        "symbolSize": 1.2362654320987654
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1084,
        "name": "1084-Baharat, sos, sirke ve diğer çeşni maddelerinin imalatı",
        "symbolSize": 1.0376234567901237
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1085,
        "name": "1085-Hazır yemeklerin imalatı",
        "symbolSize": 1.3996296296296293
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1086,
        "name": "1086-Homojenize gıda müstahzarları ve diyetetik gıda imalatı",
        "symbolSize": 0.40806584362139914
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1089,
        "name": "1089-Başka yerde sınıflandırılmamış diğer gıda maddelerinin imalatı",
        "symbolSize": 1.0094567901234572
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1091,
        "name": "1091-Çiftlik hayvanları için hazır yem imalatı",
        "symbolSize": 1.276172839506173
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1092,
        "name": "1092-Ev hayvanları için hazır gıda imalatı",
        "symbolSize": 0.8608641975308643
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1101,
        "name": "1101-Alkollü içeceklerin damıtılması, arıtılması ve harmanlanması",
        "symbolSize": 1.7609053497942388
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1102,
        "name": "1102-Üzümden şarap imalatı",
        "symbolSize": 1.5762962962962963
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1103,
        "name": "1103-Elma şarabı ve diğer meyve şaraplarının imalatı",
        "symbolSize": 0.25469135802469134
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1104,
        "name": "1104-Diğer damıtılmamış mayalı içeceklerin imalatı",
        "symbolSize": 0.13049382716049382
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1105,
        "name": "1105-Bira imalatı",
        "symbolSize": 0.28098765432098766
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1106,
        "name": "1106-Malt imalatı",
        "symbolSize": 1.0722222222222224
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1107,
        "name": "1107-Alkolsüz içeceklerin imalatı; maden sularının ve diğer şişelenmiş suların üretimi",
        "symbolSize": 1.145030864197531
    },
    {
        "group": "C-Gıda ve tarım",
        "id": 1200,
        "name": "1200-Tütün ürünleri imalatı",
        "symbolSize": 0.5746913580246913
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1310,
        "name": "1310-Tekstil elyafının hazırlanması ve bükülmesi",
        "symbolSize": 1.149296296296296
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1320,
        "name": "1320-Dokuma",
        "symbolSize": 0.7319478737997257
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1330,
        "name": "1330-Tekstil ürünlerinin bitirilmesi",
        "symbolSize": 0.6500617283950615
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1391,
        "name": "1391-Örgü (triko) veya tığ işi (kroşe) kumaşların imalatı",
        "symbolSize": 0.7461111111111112
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1392,
        "name": "1392-Giyim eşyası dışındaki tamamlanmış tekstil ürünlerinin imalatı",
        "symbolSize": 0.8696296296296295
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1393,
        "name": "1393-Halı ve kilim imalatı",
        "symbolSize": 0.9338888888888889
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1394,
        "name": "1394-Halat, urgan, kınnap ve ağ imalatı",
        "symbolSize": 0.6558024691358023
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1395,
        "name": "1395-Dokusuz kumaşların ve dokusuz kumaştan yapılan ürünlerin imalatı, giyim eşyası hariç",
        "symbolSize": 0.9787654320987654
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1396,
        "name": "1396-Diğer teknik ve endüstriyel tekstillerin imalatı",
        "symbolSize": 0.5415277777777779
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1399,
        "name": "1399-Başka yerde sınıflandırılmamış diğer tekstillerin imalatı",
        "symbolSize": 0.9062037037037036
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1411,
        "name": "1411-Deri giyim eşyası imalatı",
        "symbolSize": 0.5965432098765432
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1412,
        "name": "1412-İş giysisi imalatı",
        "symbolSize": 1.2545061728395062
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1413,
        "name": "1413-Diğer dış giyim eşyaları imalatı",
        "symbolSize": 0.8106172839506173
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1414,
        "name": "1414-İç giyim eşyası imalatı",
        "symbolSize": 0.9031790123456793
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1419,
        "name": "1419-Diğer giyim eşyalarının ve giysi aksesuarlarının imalatı",
        "symbolSize": 0.9580246913580241
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1420,
        "name": "1420-Kürkten eşya imalatı",
        "symbolSize": 0.09790123456790123
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1431,
        "name": "1431-Örme (trikotaj) ve tığ işi (kroşe) çorap imalatı",
        "symbolSize": 1.275802469135803
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1439,
        "name": "1439-Örme (trikotaj) ve tığ işi (kroşe) diğer giyim eşyası imalatı",
        "symbolSize": 0.7390123456790124
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1511,
        "name": "1511-Derinin tabaklanması ve işlenmesi; kürkün işlenmesi ve boyanması",
        "symbolSize": 0.7326543209876544
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1512,
        "name": "1512-Bavul, el çantası ve benzerleri ile saraçlık ve koşum takımı imalatı (deri giyim eşyası hariç)",
        "symbolSize": 0.5581069958847737
    },
    {
        "group": "C-Tekstil ve giyim",
        "id": 1520,
        "name": "1520-Ayakkabı, bot, terlik vb. imalatı",
        "symbolSize": 0.6696913580246914
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1610,
        "name": "1610-Ağaçların biçilmesi ve planyalanması",
        "symbolSize": 1.5666172839506167
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1621,
        "name": "1621-Ahşap kaplama paneli ve ağaç esaslı panel imalatı",
        "symbolSize": 1.4976543209876543
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1622,
        "name": "1622-Birleştirilmiş parke yer döşemelerinin imalatı",
        "symbolSize": 2.0623456790123456
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1623,
        "name": "1623-Diğer bina doğramacılığı ve marangozluk ürünlerinin imalatı",
        "symbolSize": 1.3813580246913582
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1624,
        "name": "1624-Ahşap konteyner imalatı",
        "symbolSize": 0.7082716049382718
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1629,
        "name": "1629-Diğer ağaç ürünleri imalatı; mantardan, saz, saman ve benzeri örme malzemelerinden yapılmış ürünlerin imalatı",
        "symbolSize": 1.050687830687831
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1711,
        "name": "1711-Kağıt hamuru imalatı",
        "symbolSize": 1.155679012345679
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1712,
        "name": "1712-Kağıt ve mukavva imalatı",
        "symbolSize": 0.7433333333333334
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1721,
        "name": "1721-Oluklu kağıt ve mukavva imalatı ile kağıt ve mukavvadan yapılan muhafazaların imalatı",
        "symbolSize": 0.5366049382716048
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1722,
        "name": "1722-Kağıttan yapılan ev eşyası, sıhhi malzemeler ve tuvalet malzemeleri imalatı",
        "symbolSize": 0.5638683127572016
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1723,
        "name": "1723-Kağıt kırtasiye ürünleri imalatı",
        "symbolSize": 0.23177777777777775
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1724,
        "name": "1724-Duvar kağıdı imalatı",
        "symbolSize": 0.6167901234567902
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 1729,
        "name": "1729-Kağıt ve mukavvadan diğer ürünlerin imalatı",
        "symbolSize": 0.4548148148148148
    },
    {
        "group": "C-Diğer",
        "id": 1811,
        "name": "1811-Gazetelerin basımı",
        "symbolSize": 0.6144444444444443
    },
    {
        "group": "C-Diğer",
        "id": 1812,
        "name": "1812-Diğer matbaacılık",
        "symbolSize": 0.3931569664902999
    },
    {
        "group": "C-Diğer",
        "id": 1813,
        "name": "1813-Basım ve yayım öncesi hizmetler",
        "symbolSize": 0.28592592592592586
    },
    {
        "group": "C-Diğer",
        "id": 1814,
        "name": "1814-Ciltçilik ve ilgili hizmetler",
        "symbolSize": 0.2197530864197531
    },
    {
        "group": "C-Diğer",
        "id": 1820,
        "name": "1820-Kayıtlı medyanın çoğaltılması",
        "symbolSize": 0.3534567901234567
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 1910,
        "name": "1910-Kok fırını ürünlerinin imalatı",
        "symbolSize": 1.7910493827160492
    },
    {
        "group": "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
        "id": 1920,
        "name": "1920-Rafine edilmiş petrol ürünleri imalatı",
        "symbolSize": 1.356888888888889
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2011,
        "name": "2011-Sanayi gazları imalatı",
        "symbolSize": 0.7646913580246911
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2012,
        "name": "2012-Boya maddeleri ve pigment imalatı",
        "symbolSize": 0.6646296296296297
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2013,
        "name": "2013-Diğer inorganik temel kimyasal maddelerin imalatı",
        "symbolSize": 0.6918518518518517
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2014,
        "name": "2014-Diğer organik temel kimyasalların imalatı",
        "symbolSize": 1.1321810699588477
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2015,
        "name": "2015-Kimyasal gübre ve azot bileşiklerinin imalatı",
        "symbolSize": 0.6471604938271605
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2016,
        "name": "2016-Birincil formda plastik hammaddelerin imalatı",
        "symbolSize": 0.7065432098765432
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2017,
        "name": "2017-Birincil formda sentetik kauçuk imalatı",
        "symbolSize": 0.7334567901234568
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2020,
        "name": "2020-Haşere ilaçları ve diğer zirai-kimyasal ürünlerin imalatı",
        "symbolSize": 0.918786008230453
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2030,
        "name": "2030-Boya, vernik ve benzeri kaplayıcı maddeler ile matbaa mürekkebi ve macun imalatı",
        "symbolSize": 0.7519047619047616
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2041,
        "name": "2041-Sabun ve deterjan ile temizlik ve parlatıcı maddeler imalatı",
        "symbolSize": 0.8013888888888888
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2042,
        "name": "2042-Parfümlerin, kozmetiklerin ve kişisel bakım ürünlerinin imalatı",
        "symbolSize": 0.5650308641975307
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2051,
        "name": "2051-Patlayıcı madde imalatı",
        "symbolSize": 3.2714403292181067
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2052,
        "name": "2052-Tutkal imalatı",
        "symbolSize": 0.35049382716049376
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2053,
        "name": "2053-Uçucu yağların imalatı",
        "symbolSize": 0.6365432098765432
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2059,
        "name": "2059-Başka yerde sınıflandırılmamış diğer kimyasal ürünlerin imalatı",
        "symbolSize": 0.7024691358024693
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2060,
        "name": "2060-Suni veya sentetik elyaf imalatı",
        "symbolSize": 1.0383333333333333
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2110,
        "name": "2110-Temel eczacılık ürünleri imalatı",
        "symbolSize": 0.46703703703703686
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2120,
        "name": "2120-Eczacılığa ilişkin ilaçların imalatı",
        "symbolSize": 0.5173456790123457
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2211,
        "name": "2211-İç ve dış lastik imalatı; lastiğe sırt geçirilmesi ve yeniden işlenmesi",
        "symbolSize": 2.67798353909465
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2219,
        "name": "2219-Diğer kauçuk ürünleri imalatı",
        "symbolSize": 0.5438580246913581
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2221,
        "name": "2221-Plastik tabaka, levha, tüp ve profil imalatı",
        "symbolSize": 0.7080246913580249
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2222,
        "name": "2222-Plastik torba, çanta, poşet, çuval, kutu, damacana, şişe, makara vb. paketleme malzemelerinin imalatı",
        "symbolSize": 0.5981481481481484
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2223,
        "name": "2223-Plastik inşaat malzemesi imalatı",
        "symbolSize": 0.8156790123456791
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2229,
        "name": "2229-Diğer plastik ürünlerin imalatı",
        "symbolSize": 0.4778703703703705
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2311,
        "name": "2311-Düz cam imalatı",
        "symbolSize": 0.9553086419753086
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2312,
        "name": "2312-Düz camın şekillendirilmesi ve işlenmesi",
        "symbolSize": 0.7589197530864198
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2313,
        "name": "2313-Çukur cam imalatı",
        "symbolSize": 1.0310493827160496
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2314,
        "name": "2314-Cam elyafı imalatı",
        "symbolSize": 0.7634567901234568
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2319,
        "name": "2319-Diğer camların imalatı ve işlenmesi (teknik amaçlı cam eşyalar dahil)",
        "symbolSize": 0.7337037037037034
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2320,
        "name": "2320-Ateşe dayanıklı (refrakter) ürünlerin imalatı",
        "symbolSize": 1.7649382716049378
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2331,
        "name": "2331-Seramik karo ve kaldırım taşları imalatı",
        "symbolSize": 1.9011111111111105
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2332,
        "name": "2332-Fırınlanmış kilden tuğla, karo ve inşaat malzemeleri imalatı",
        "symbolSize": 1.599382716049383
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2341,
        "name": "2341-Seramik ev ve süs eşyaları imalatı",
        "symbolSize": 1.3467592592592592
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2342,
        "name": "2342-Seramik sıhhi ürünlerin imalatı",
        "symbolSize": 2.115061728395062
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2343,
        "name": "2343-Seramik yalıtkanların (izolatörlerin) ve yalıtkan bağlantı parçalarının imalatı",
        "symbolSize": 0.22407407407407406
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2344,
        "name": "2344-Diğer teknik seramik ürünlerin imalatı",
        "symbolSize": 1.0950617283950617
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2349,
        "name": "2349-Başka yerde sınıflandırılmamış diğer seramik ürünlerin imalatı",
        "symbolSize": 3.0203703703703706
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2351,
        "name": "2351-Çimento imalatı",
        "symbolSize": 2.133950617283951
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2352,
        "name": "2352-Kireç ve alçı imalatı",
        "symbolSize": 1.1058847736625514
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2361,
        "name": "2361-İnşaat amaçlı beton ürünlerin imalatı",
        "symbolSize": 1.409423868312757
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2362,
        "name": "2362-İnşaat amaçlı alçı ürünlerin imalatı",
        "symbolSize": 0.891358024691358
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2363,
        "name": "2363-Hazır beton imalatı",
        "symbolSize": 1.487160493827161
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2364,
        "name": "2364-Toz harç imalatı",
        "symbolSize": 0.9908641975308643
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2365,
        "name": "2365-Lif ve çimento karışımlı ürünlerin imalatı",
        "symbolSize": 1.0144444444444443
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2369,
        "name": "2369-Beton, alçı ve çimentodan yapılmış diğer ürünlerin imalatı",
        "symbolSize": 1.1319135802469134
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2370,
        "name": "2370-Taş ve mermerin kesilmesi, şekil verilmesi ve bitirilmesi",
        "symbolSize": 1.707901234567901
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2391,
        "name": "2391-Aşındırıcı ürünlerin imalatı",
        "symbolSize": 0.5981481481481481
    },
    {
        "group": "C-Kimya ve Eczacılık",
        "id": 2399,
        "name": "2399-Başka yerde sınıflandırılmamış metalik olmayan diğer mineral ürünlerin imalatı",
        "symbolSize": 1.2931790123456786
    },
    {
        "group": "C-Metal ürünler",
        "id": 2410,
        "name": "2410-Ana demir ve çelik ürünleri ile ferro alaşımların imalatı",
        "symbolSize": 1.6893950617283946
    },
    {
        "group": "C-Metal ürünler",
        "id": 2420,
        "name": "2420-Çelikten tüpler, borular, içi boş profiller ve benzeri bağlantı parçalarının imalatı",
        "symbolSize": 0.9496296296296298
    },
    {
        "group": "C-Metal ürünler",
        "id": 2431,
        "name": "2431-Barların soğuk çekilmesi",
        "symbolSize": 0.41185185185185186
    },
    {
        "group": "C-Metal ürünler",
        "id": 2432,
        "name": "2432-Dar şeritlerin soğuk haddelenmesi",
        "symbolSize": 1.3107407407407405
    },
    {
        "group": "C-Metal ürünler",
        "id": 2433,
        "name": "2433-Soğuk şekillendirme veya katlama",
        "symbolSize": 0.9297530864197527
    },
    {
        "group": "C-Metal ürünler",
        "id": 2434,
        "name": "2434-Tellerin soğuk çekilmesi",
        "symbolSize": 0.6135802469135803
    },
    {
        "group": "C-Metal ürünler",
        "id": 2441,
        "name": "2441-Değerli metal üretimi",
        "symbolSize": 0.4737345679012346
    },
    {
        "group": "C-Metal ürünler",
        "id": 2442,
        "name": "2442-Alüminyum üretimi",
        "symbolSize": 0.4971604938271606
    },
    {
        "group": "C-Metal ürünler",
        "id": 2443,
        "name": "2443-Kurşun, çinko ve kalay üretimi",
        "symbolSize": 1.2019223985890652
    },
    {
        "group": "C-Metal ürünler",
        "id": 2444,
        "name": "2444-Bakır üretimi",
        "symbolSize": 1.174320987654321
    },
    {
        "group": "C-Metal ürünler",
        "id": 2445,
        "name": "2445-Demir dışı diğer metallerin üretimi",
        "symbolSize": 1.204567901234568
    },
    {
        "group": "C-Metal ürünler",
        "id": 2446,
        "name": "2446-Nükleer yakıtların işlenmesi",
        "symbolSize": 1.7482716049382718
    },
    {
        "group": "C-Metal ürünler",
        "id": 2451,
        "name": "2451-Demir döküm",
        "symbolSize": 0.9116049382716052
    },
    {
        "group": "C-Metal ürünler",
        "id": 2452,
        "name": "2452-Çelik dökümü",
        "symbolSize": 0.6981481481481482
    },
    {
        "group": "C-Metal ürünler",
        "id": 2453,
        "name": "2453-Hafif metallerin dökümü",
        "symbolSize": 0.8446913580246914
    },
    {
        "group": "C-Metal ürünler",
        "id": 2454,
        "name": "2454-Diğer demir dışı metallerin dökümü",
        "symbolSize": 0.6410493827160495
    },
    {
        "group": "C-Metal ürünler",
        "id": 2511,
        "name": "2511-Metal yapı ve yapı parçaları imalatı",
        "symbolSize": 0.8515226337448559
    },
    {
        "group": "C-Metal ürünler",
        "id": 2512,
        "name": "2512-Metalden kapı ve pencere imalatı",
        "symbolSize": 0.8358024691358017
    },
    {
        "group": "C-Metal ürünler",
        "id": 2521,
        "name": "2521-Merkezi ısıtma radyatörleri (elektrikli radyatörler hariç) ve sıcak su kazanları (boylerleri) imalatı",
        "symbolSize": 1.048148148148148
    },
    {
        "group": "C-Metal ürünler",
        "id": 2529,
        "name": "2529-Metalden diğer tank, rezervuar ve konteynerler imalatı",
        "symbolSize": 0.7829629629629629
    },
    {
        "group": "C-Metal ürünler",
        "id": 2530,
        "name": "2530-Buhar jeneratörü imalatı, merkezi ısıtma sıcak su kazanları (boylerleri) hariç",
        "symbolSize": 0.5259876543209875
    },
    {
        "group": "C-Metal ürünler",
        "id": 2540,
        "name": "2540-Silah ve mühimmat (cephane) imalatı",
        "symbolSize": 1.1561728395061728
    },
    {
        "group": "C-Metal ürünler",
        "id": 2550,
        "name": "2550-Metallerin dövülmesi, preslenmesi, baskılanması ve yuvarlanması; toz metalürjisi",
        "symbolSize": 0.4890123456790124
    },
    {
        "group": "C-Metal ürünler",
        "id": 2561,
        "name": "2561-Metallerin işlenmesi ve kaplanması",
        "symbolSize": 0.39065843621399193
    },
    {
        "group": "C-Metal ürünler",
        "id": 2562,
        "name": "2562-Metallerin makinede işlenmesi ve şekil verilmesi",
        "symbolSize": 0.6798353909465021
    },
    {
        "group": "C-Metal ürünler",
        "id": 2571,
        "name": "2571-Çatal-bıçak takımları ve diğer kesici aletlerin imalatı",
        "symbolSize": 0.3993333333333333
    },
    {
        "group": "C-Metal ürünler",
        "id": 2572,
        "name": "2572-Kilit ve menteşe imalatı",
        "symbolSize": 0.5285185185185185
    },
    {
        "group": "C-Metal ürünler",
        "id": 2573,
        "name": "2573-El aletleri, takım tezgahı uçları, testere ağızları vb. imalatı",
        "symbolSize": 0.45197530864197505
    },
    {
        "group": "C-Metal ürünler",
        "id": 2591,
        "name": "2591-Çelik varil ve benzer muhafazaların imalatı",
        "symbolSize": 0.7274074074074074
    },
    {
        "group": "C-Metal ürünler",
        "id": 2592,
        "name": "2592-Metalden hafif paketleme malzemeleri imalatı",
        "symbolSize": 0.5468724279835389
    },
    {
        "group": "C-Metal ürünler",
        "id": 2593,
        "name": "2593-Tel ürünleri, zincir ve yayların imalatı",
        "symbolSize": 0.7319341563786
    },
    {
        "group": "C-Metal ürünler",
        "id": 2594,
        "name": "2594-Bağlantı malzemelerinin ve vida makinesi ürünlerinin imalatı",
        "symbolSize": 0.4859876543209878
    },
    {
        "group": "C-Metal ürünler",
        "id": 2599,
        "name": "2599-Başka yerde sınıflandırılmamış diğer fabrikasyon metal ürünlerin imalatı",
        "symbolSize": 1.0088327721661046
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2611,
        "name": "2611-Elektronik bileşenlerin imalatı",
        "symbolSize": 0.2967283950617284
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2612,
        "name": "2612-Yüklü elektronik kart imalatı",
        "symbolSize": 0.41444444444444445
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2620,
        "name": "2620-Bilgisayar ve bilgisayar çevre birimleri imalatı",
        "symbolSize": 0.48000000000000004
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2630,
        "name": "2630-İletişim ekipmanlarının imalatı",
        "symbolSize": 0.2041358024691358
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2640,
        "name": "2640-Tüketici elektroniği ürünlerinin imalatı",
        "symbolSize": 0.6036625514403293
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2651,
        "name": "2651-Ölçme, test ve seyrüsefer amaçlı alet ve cihazların imalatı",
        "symbolSize": 0.3766748971193417
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2652,
        "name": "2652-Kol saatlerinin, masa ve duvar saatlerinin ve benzerlerinin imalatı",
        "symbolSize": 0.18037037037037035
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2660,
        "name": "2660-Işınlama, elektro medikal ve elektro terapi ile ilgili cihazların imalatı",
        "symbolSize": 0.44728395061728393
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2670,
        "name": "2670-Optik aletlerin ve fotografik ekipmanların imalatı",
        "symbolSize": 0.6903456790123458
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2680,
        "name": "2680-Manyetik ve optik kaset, bant, CD, vb. ortamların imalatı",
        "symbolSize": 0.16453703703703704
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2711,
        "name": "2711-Elektrik motorlarının, jeneratörlerin ve transformatörlerin imalatı",
        "symbolSize": 0.4660493827160493
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2712,
        "name": "2712-Elektrik dağıtım ve kontrol cihazları imalatı",
        "symbolSize": 0.505
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2720,
        "name": "2720-Akümülatör ve pil imalatı",
        "symbolSize": 0.5604197530864199
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2731,
        "name": "2731-Fiber optik kabloların imalatı",
        "symbolSize": 0.7304938271604937
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2732,
        "name": "2732-Diğer elektronik ve elektrik telleri ve kablolarının imalatı",
        "symbolSize": 0.7187654320987656
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2733,
        "name": "2733-Kablolamada kullanılan gereçlerin imalatı",
        "symbolSize": 0.3941975308641975
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2740,
        "name": "2740-Elektrikli aydınlatma ekipmanlarının imalatı",
        "symbolSize": 0.3566666666666667
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2751,
        "name": "2751-Elektrikli ev aletlerinin imalatı",
        "symbolSize": 0.8768209876543203
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2752,
        "name": "2752-Elektriksiz ev aletlerinin imalatı",
        "symbolSize": 1.054567901234568
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2790,
        "name": "2790-Diğer elektrikli ekipmanların imalatı",
        "symbolSize": 0.37558641975308643
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2811,
        "name": "2811-Motor ve türbin imalatı (hava taşıtı, motorlu taşıt ve motosiklet motorları hariç)",
        "symbolSize": 0.3638271604938271
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2812,
        "name": "2812-Akışkan gücü ile çalışan ekipmanların imalatı",
        "symbolSize": 0.38802469135802464
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2813,
        "name": "2813-Diğer pompaların ve kompresörlerin imalatı",
        "symbolSize": 0.31787037037037036
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2814,
        "name": "2814-Diğer musluk ve valf/vana imalatı",
        "symbolSize": 0.40882716049382717
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2815,
        "name": "2815-Rulman, dişli/dişli takımı, şanzıman ve tahrik elemanlarının imalatı",
        "symbolSize": 0.47203703703703703
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2821,
        "name": "2821-Fırın, ocak (sanayi ocakları) ve brülör (ocak ateşleyicileri) imalatı",
        "symbolSize": 0.8085802469135799
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2822,
        "name": "2822-Kaldırma ve taşıma ekipmanları imalatı",
        "symbolSize": 0.6724691358024693
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2823,
        "name": "2823-Büro makineleri ve ekipmanları imalatı (bilgisayarlar ve çevre birimleri hariç)",
        "symbolSize": 0.28095238095238095
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2824,
        "name": "2824-Motorlu veya pnömatik (hava basınçlı) el aletlerinin imalatı",
        "symbolSize": 0.3392592592592592
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2825,
        "name": "2825-Soğutma ve havalandırma donanımlarının imalatı, evde kullanılanlar hariç",
        "symbolSize": 0.4467901234567902
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2829,
        "name": "2829-Başka yerde sınıflandırılmamış diğer genel amaçlı makinelerin imalatı",
        "symbolSize": 0.4145679012345679
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2830,
        "name": "2830-Tarım ve ormancılık makinelerinin imalatı",
        "symbolSize": 0.8969012345679007
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2841,
        "name": "2841-Metal işleme makinelerinin imalatı",
        "symbolSize": 0.4317283950617283
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2849,
        "name": "2849-Diğer takım tezgahlarının imalatı",
        "symbolSize": 0.4020246913580246
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2891,
        "name": "2891-Metalürji makineleri imalatı",
        "symbolSize": 0.8832098765432098
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2892,
        "name": "2892-Maden, taş ocağı ve inşaat makineleri imalatı",
        "symbolSize": 0.6628395061728393
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2893,
        "name": "2893-Gıda, içecek ve tütün işleme makineleri imalatı",
        "symbolSize": 0.759903978052126
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2894,
        "name": "2894-Tekstil, giyim eşyası ve deri üretiminde kullanılan makinelerin imalatı",
        "symbolSize": 0.4358847736625516
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2895,
        "name": "2895-Kağıt ve mukavva üretiminde kullanılan makinelerin imalatı",
        "symbolSize": 0.23617283950617288
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2896,
        "name": "2896-Plastik ve kauçuk makinelerinin imalatı",
        "symbolSize": 0.22790123456790123
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 2899,
        "name": "2899-Başka yerde sınıflandırılmamış diğer özel amaçlı makinelerin imalatı",
        "symbolSize": 0.45836762688614535
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 2910,
        "name": "2910-Motorlu kara taşıtlarının imalatı",
        "symbolSize": 0.4600176366843034
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 2920,
        "name": "2920-Motorlu kara taşıtları karoseri (kaporta) imalatı; treyler (römork) ve yarı treyler (yarı römork) imalatı",
        "symbolSize": 0.603662551440329
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 2931,
        "name": "2931-Motorlu kara taşıtları için elektrik ve elektronik donanımların imalatı",
        "symbolSize": 0.8036728395061727
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 2932,
        "name": "2932-Motorlu kara taşıtları için diğer parça ve aksesuarların imalatı",
        "symbolSize": 0.5182304526748973
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3011,
        "name": "3011-Gemilerin ve yüzen yapıların inşası",
        "symbolSize": 0.9760339506172842
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3012,
        "name": "3012-Eğlence ve spor amaçlı teknelerin yapımı",
        "symbolSize": 0.37329218106995876
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3020,
        "name": "3020-Demir yolu lokomotifleri ve vagonlarının imalatı",
        "symbolSize": 1.0423148148148147
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3030,
        "name": "3030-Hava taşıtları ve uzay araçları ile bunlarla ilgili makinelerin imalatı",
        "symbolSize": 0.6682716049382715
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3040,
        "name": "3040-Askeri savaş araçlarının imalatı",
        "symbolSize": 0.4798765432098766
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3091,
        "name": "3091-Motosiklet imalatı",
        "symbolSize": 1.7013580246913578
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3092,
        "name": "3092-Bisiklet ve engelli aracı imalatı",
        "symbolSize": 0.8770864197530864
    },
    {
        "group": "C-Araç ve ekipman",
        "id": 3099,
        "name": "3099-Başka yerde sınıflandırılmamış diğer ulaşım ekipmanlarının imalatı",
        "symbolSize": 0.724156378600823
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 3101,
        "name": "3101-Büro ve mağaza mobilyaları imalatı",
        "symbolSize": 0.7065432098765426
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 3102,
        "name": "3102-Mutfak mobilyalarının imalatı",
        "symbolSize": 1.1576543209876544
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 3103,
        "name": "3103-Yatak imalatı",
        "symbolSize": 0.7030864197530865
    },
    {
        "group": "C-Mobilya, kağıt ve diğer ağaç ürünleri",
        "id": 3109,
        "name": "3109-Diğer mobilyaların imalatı",
        "symbolSize": 0.7499537037037035
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3211,
        "name": "3211-Madeni para basımı",
        "symbolSize": 0.5046913580246913
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3212,
        "name": "3212-Mücevher ve benzeri eşyaların imalatı",
        "symbolSize": 0.22938271604938273
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3213,
        "name": "3213-İmitasyon (taklit) takılar ve ilgili eşyaların imalatı",
        "symbolSize": 0.15506172839506174
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3220,
        "name": "3220-Müzik aletleri imalatı",
        "symbolSize": 0.4013227513227514
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3230,
        "name": "3230-Spor malzemeleri imalatı",
        "symbolSize": 1.000864197530864
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3240,
        "name": "3240-Oyun ve oyuncak imalatı",
        "symbolSize": 0.5103928170594837
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3250,
        "name": "3250-Tıbbi ve dişçilik ile ilgili araç ve gereçlerin imalatı",
        "symbolSize": 0.47057929724596426
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3291,
        "name": "3291-Süpürge ve fırça imalatı",
        "symbolSize": 0.2661728395061727
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3299,
        "name": "3299-Başka yerde sınıflandırılmamış diğer imalatlar",
        "symbolSize": 0.5306971677559911
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3311,
        "name": "3311-Fabrikasyon metal ürünlerin onarımı",
        "symbolSize": 0.8451146384479719
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3312,
        "name": "3312-Makinelerin onarımı",
        "symbolSize": 0.7954783950617287
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3313,
        "name": "3313-Elektronik veya optik ekipmanların onarımı",
        "symbolSize": 0.4268518518518518
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3314,
        "name": "3314-Elektrikli ekipmanların onarımı",
        "symbolSize": 1.1956790123456795
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3315,
        "name": "3315-Gemilerin ve teknelerin bakım ve onarımı",
        "symbolSize": 0.6917283950617283
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3316,
        "name": "3316-Hava taşıtlarının ve uzay araçlarının bakım ve onarımı",
        "symbolSize": 0.23728395061728397
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3317,
        "name": "3317-Diğer ulaşım ekipmanlarının bakım ve onarımı",
        "symbolSize": 0.9062345679012342
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3319,
        "name": "3319-Diğer ekipmanların onarımı",
        "symbolSize": 0.7400411522633745
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3320,
        "name": "3320-Sanayi makine ve ekipmanlarının kurulumu",
        "symbolSize": 0.698742985409652
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3511,
        "name": "3511-Elektrik enerjisi üretimi",
        "symbolSize": 1.644938271604938
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3512,
        "name": "3512-Elektrik enerjisinin iletimi",
        "symbolSize": 1.9329629629629632
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3513,
        "name": "3513-Elektrik enerjisinin dağıtımı",
        "symbolSize": 1.4416049382716043
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3514,
        "name": "3514-Elektrik enerjisinin ticareti",
        "symbolSize": 1.4854732510288065
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3521,
        "name": "3521-Gaz imalatı",
        "symbolSize": 1.6178395061728394
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3522,
        "name": "3522-Ana şebeke üzerinden gaz yakıtların dağıtımı",
        "symbolSize": 1.2477160493827155
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3523,
        "name": "3523-Ana şebeke üzerinden gaz ticareti",
        "symbolSize": 1.4451234567901234
    },
    {
        "group": "C-Makine ve ekipman imalatı",
        "id": 3530,
        "name": "3530-Buhar ve iklimlendirme temini",
        "symbolSize": 1.1973456790123456
    },
    {
        "group": "Diğer Hizmet",
        "id": 3600,
        "name": "3600-Suyun toplanması, arıtılması ve dağıtılması",
        "symbolSize": 1.4058024691358024
    },
    {
        "group": "Diğer Hizmet",
        "id": 3700,
        "name": "3700-Kanalizasyon",
        "symbolSize": 1.1345679012345682
    },
    {
        "group": "Diğer Hizmet",
        "id": 3811,
        "name": "3811-Tehlikesiz atıkların toplanması",
        "symbolSize": 1.1933333333333336
    },
    {
        "group": "Diğer Hizmet",
        "id": 3812,
        "name": "3812-Tehlikeli atıkların toplanması",
        "symbolSize": 0.9301234567901235
    },
    {
        "group": "Diğer Hizmet",
        "id": 3821,
        "name": "3821-Tehlikesiz atıkların ıslahı ve bertaraf edilmesi",
        "symbolSize": 2.1018518518518516
    },
    {
        "group": "Diğer Hizmet",
        "id": 3822,
        "name": "3822-Tehlikeli atıkların ıslahı ve bertaraf edilmesi",
        "symbolSize": 0.7946296296296298
    },
    {
        "group": "Diğer Hizmet",
        "id": 3831,
        "name": "3831-Hurdaların parçalara ayrılması",
        "symbolSize": 0.7566666666666667
    },
    {
        "group": "Diğer Hizmet",
        "id": 3832,
        "name": "3832-Tasnif edilmiş materyallerin geri kazanımı",
        "symbolSize": 1.027962962962963
    },
    {
        "group": "Diğer Hizmet",
        "id": 3900,
        "name": "3900-İyileştirme faaliyetleri ve diğer atık yönetimi hizmetleri",
        "symbolSize": 1.1562962962962964
    },
    {
        "group": "Diğer Hizmet",
        "id": 4110,
        "name": "4110-İnşaat projelerinin geliştirilmesi",
        "symbolSize": 1.0925925925925926
    },
    {
        "group": "Diğer Hizmet",
        "id": 4120,
        "name": "4120-İkamet amaçlı olan veya ikamet amaçlı olmayan binaların inşaatı",
        "symbolSize": 1.0897037037037045
    },
    {
        "group": "Diğer Hizmet",
        "id": 4211,
        "name": "4211-Kara yolları ve otoyolların inşaatı",
        "symbolSize": 1.500699588477366
    },
    {
        "group": "Diğer Hizmet",
        "id": 4212,
        "name": "4212-Demir yolları ve metroların inşaatı",
        "symbolSize": 0.6455555555555554
    },
    {
        "group": "Diğer Hizmet",
        "id": 4213,
        "name": "4213-Köprüler ve tünellerin inşaatı",
        "symbolSize": 1.8900617283950614
    },
    {
        "group": "Diğer Hizmet",
        "id": 4221,
        "name": "4221-Akışkanlar için hizmet projelerinin inşaatı",
        "symbolSize": 1.8448148148148162
    },
    {
        "group": "Diğer Hizmet",
        "id": 4222,
        "name": "4222-Elektrik ve telekomünikasyon için hizmet projelerinin inşaatı",
        "symbolSize": 1.4599794238683115
    },
    {
        "group": "Diğer Hizmet",
        "id": 4291,
        "name": "4291-Su projeleri inşaatı",
        "symbolSize": 1.9227777777777781
    },
    {
        "group": "Diğer Hizmet",
        "id": 4299,
        "name": "4299-Başka yerde sınıflandırılmamış bina dışı diğer yapılara ait projelerin inşaatı",
        "symbolSize": 1.610154320987654
    },
    {
        "group": "Diğer Hizmet",
        "id": 4311,
        "name": "4311-Yıkım",
        "symbolSize": 0.9924691358024691
    },
    {
        "group": "Diğer Hizmet",
        "id": 4312,
        "name": "4312-Şantiyenin hazırlanması",
        "symbolSize": 1.8982716049382704
    },
    {
        "group": "Diğer Hizmet",
        "id": 4313,
        "name": "4313-Test sondajı ve delme",
        "symbolSize": 1.1077777777777782
    },
    {
        "group": "Diğer Hizmet",
        "id": 4321,
        "name": "4321-Elektrik tesisatı",
        "symbolSize": 1.4162345679012356
    },
    {
        "group": "Diğer Hizmet",
        "id": 4322,
        "name": "4322-Sıhhi tesisat, ısıtma ve iklimlendirme tesisatı",
        "symbolSize": 0.9131172839506178
    },
    {
        "group": "Diğer Hizmet",
        "id": 4329,
        "name": "4329-Diğer inşaat tesisatı",
        "symbolSize": 0.7831481481481477
    },
    {
        "group": "Diğer Hizmet",
        "id": 4331,
        "name": "4331-Sıva işleri",
        "symbolSize": 0.6817283950617287
    },
    {
        "group": "Diğer Hizmet",
        "id": 4332,
        "name": "4332-Doğrama tesisatı",
        "symbolSize": 0.7453086419753086
    },
    {
        "group": "Diğer Hizmet",
        "id": 4333,
        "name": "4333-Yer ve duvar kaplama",
        "symbolSize": 0.6441975308641976
    },
    {
        "group": "Diğer Hizmet",
        "id": 4334,
        "name": "4334-Boya ve cam işleri",
        "symbolSize": 0.7376131687242797
    },
    {
        "group": "Diğer Hizmet",
        "id": 4339,
        "name": "4339-İnşaatlardaki diğer bütünleyici ve tamamlayıcı işler",
        "symbolSize": 0.6479012345679007
    },
    {
        "group": "Diğer Hizmet",
        "id": 4391,
        "name": "4391-Çatı işleri",
        "symbolSize": 0.7479012345679013
    },
    {
        "group": "Diğer Hizmet",
        "id": 4399,
        "name": "4399-Başka yerde sınıflandırılmamış diğer özel inşaat faaliyetleri",
        "symbolSize": 0.8739858906525574
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4511,
        "name": "4511-Otomobillerin ve hafif motorlu kara taşıtlarının ticareti",
        "symbolSize": 0.7603395061728389
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4519,
        "name": "4519-Diğer motorlu kara taşıtlarının ticareti",
        "symbolSize": 0.9580246913580251
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4520,
        "name": "4520-Motorlu kara taşıtlarının bakım ve onarımı",
        "symbolSize": 1.0097256515775022
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4531,
        "name": "4531-Motorlu kara taşıtlarının parça ve aksesuarlarının toptan ticareti",
        "symbolSize": 0.600395061728395
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4532,
        "name": "4532-Motorlu kara taşıtlarının parça ve aksesuarlarının perakende ticareti",
        "symbolSize": 0.8741512345679018
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4540,
        "name": "4540-Motosiklet ve ilgili parça ve aksesuarların ticareti, bakımı ve onarımı",
        "symbolSize": 0.6338800705467372
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4611,
        "name": "4611-Tarımsal hammaddelerin, canlı hayvanların, tekstil hammaddelerinin ve yarı mamul malların satışı ile ilgili aracılar",
        "symbolSize": 1.1691358024691356
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4612,
        "name": "4612-Yakıtların, maden cevherlerinin, metallerin ve endüstriyel kimyasalların satışı ile ilgili aracılar",
        "symbolSize": 0.4720576131687242
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4613,
        "name": "4613-Kereste ve inşaat malzemelerinin satışı ile ilgili aracılar",
        "symbolSize": 0.8567283950617284
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4614,
        "name": "4614-Makine, sanayi araç ve gereçleri ile deniz ve hava taşıtlarının satışı ile ilgili aracılar",
        "symbolSize": 0.2727160493827161
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4615,
        "name": "4615-Mobilya, ev eşyaları, madeni eşyalar ve hırdavatların satışı ile ilgili aracılar",
        "symbolSize": 0.749537037037037
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4616,
        "name": "4616-Tekstil, giysi, kürk, ayakkabı ve deri eşyaların satışı ile ilgili aracılar",
        "symbolSize": 0.2550000000000001
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4617,
        "name": "4617-Gıda, içecek ve tütün satışı ile ilgili aracılar",
        "symbolSize": 0.9839506172839514
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4618,
        "name": "4618-Belirli diğer ürünlerin satışı ile ilgili uzmanlaşmış aracılar",
        "symbolSize": 0.30788065843621404
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4619,
        "name": "4619-Çeşitli malların satışı ile ilgili aracılar",
        "symbolSize": 0.3004320987654321
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4621,
        "name": "4621-Tahıl, işlenmemiş tütün, tohum ve hayvan yemi toptan ticareti",
        "symbolSize": 1.1292455418381349
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4622,
        "name": "4622-Çiçeklerin ve bitkilerin toptan ticareti",
        "symbolSize": 0.7497530864197531
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4623,
        "name": "4623-Canlı hayvanların toptan ticareti",
        "symbolSize": 1.3830246913580249
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4624,
        "name": "4624-Ham deri, post ve deri toptan ticareti",
        "symbolSize": 0.44358024691358017
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4631,
        "name": "4631-Meyve ve sebzelerin toptan ticareti",
        "symbolSize": 1.0179115226337463
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4632,
        "name": "4632-Et ve et ürünlerinin toptan ticareti",
        "symbolSize": 0.904753086419753
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4633,
        "name": "4633-Süt ürünleri, yumurta ve yenilebilir sıvı ve katı yağların toptan ticareti",
        "symbolSize": 0.893086419753086
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4634,
        "name": "4634-İçecek toptan ticareti",
        "symbolSize": 0.7224691358024691
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4635,
        "name": "4635-Tütün ürünlerinin toptan ticareti",
        "symbolSize": 0.7979012345679014
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4636,
        "name": "4636-Şeker, çikolata ve şekerleme toptan ticareti",
        "symbolSize": 0.6484567901234568
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4637,
        "name": "4637-Kahve, çay, kakao ve baharat toptan ticareti",
        "symbolSize": 0.6455144032921811
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4638,
        "name": "4638-Balık, kabuklular ve yumuşakçalar da dahil diğer gıda maddelerinin toptan ticareti",
        "symbolSize": 0.6353086419753085
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4639,
        "name": "4639-Belirli bir mala tahsis edilmemiş mağazalardaki gıda, içecek ve tütün toptan ticareti",
        "symbolSize": 0.9897530864197535
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4641,
        "name": "4641-Tekstil ürünlerinin toptan ticareti",
        "symbolSize": 0.27891358024691343
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4642,
        "name": "4642-Giysi ve ayakkabı toptan ticareti",
        "symbolSize": 0.1738734567901234
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4643,
        "name": "4643-Elektrikli ev aletleri toptan ticareti",
        "symbolSize": 0.3208916323731141
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4644,
        "name": "4644-Porselen ve cam eşya ile temizlik maddelerinin toptan ticareti",
        "symbolSize": 0.5942798353909464
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4645,
        "name": "4645-Parfüm ve kozmetik ürünlerinin toptan ticareti",
        "symbolSize": 0.23635802469135803
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4646,
        "name": "4646-Eczacılık ürünlerinin toptan ticareti",
        "symbolSize": 0.45969135802469135
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4647,
        "name": "4647-Mobilya, halı ve aydınlatma ekipmanlarının toptan ticareti",
        "symbolSize": 0.3982716049382718
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4648,
        "name": "4648-Saat ve mücevher toptan ticareti",
        "symbolSize": 0.17401234567901236
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4649,
        "name": "4649-Diğer ev eşyalarının toptan ticareti",
        "symbolSize": 0.3995767195767195
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4651,
        "name": "4651-Bilgisayar, bilgisayar çevre birimleri ve yazılım toptan ticareti",
        "symbolSize": 0.2774074074074074
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4652,
        "name": "4652-Elektronik ve telekomünikasyon ekipmanlarının ve parçalarının toptan ticareti",
        "symbolSize": 0.2783641975308642
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4661,
        "name": "4661-Tarımsal amaçlı makine ve ekipmanlar ile aksam ve parçalarının toptan ticareti",
        "symbolSize": 1.1016666666666668
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4662,
        "name": "4662-Takım tezgahlarının toptan ticareti",
        "symbolSize": 0.3117283950617284
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4663,
        "name": "4663-Madencilik, bina ve bina dışı inşaat makinelerinin toptan ticareti",
        "symbolSize": 0.2811728395061728
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4664,
        "name": "4664-Tekstil endüstrisi makineleri ile dikiş ve örgü makinelerinin toptan ticareti",
        "symbolSize": 0.3439506172839506
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4665,
        "name": "4665-Büro mobilyalarının toptan ticareti",
        "symbolSize": 0.3733333333333333
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4666,
        "name": "4666-Diğer büro makine ve ekipmanlarının toptan ticareti",
        "symbolSize": 0.3008641975308642
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4669,
        "name": "4669-Diğer makine ve ekipmanların toptan ticareti",
        "symbolSize": 0.349451303155007
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4671,
        "name": "4671-Katı, sıvı ve gazlı yakıtlar ile bunlarla ilgili ürünlerin toptan ticareti",
        "symbolSize": 1.1017283950617278
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4672,
        "name": "4672-Metallerin ve metal cevherlerinin toptan ticareti",
        "symbolSize": 0.3552469135802469
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4673,
        "name": "4673-Ağaç, inşaat malzemesi ve sıhhi teçhizat toptan ticareti",
        "symbolSize": 0.7038217928072983
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4674,
        "name": "4674-Hırdavat, sıhhi tesisat ve ısıtma tesisatı malzemelerinin toptan ticareti",
        "symbolSize": 0.7746296296296292
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4675,
        "name": "4675-Kimyasal ürünlerin toptan ticareti",
        "symbolSize": 0.8080246913580252
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4676,
        "name": "4676-Diğer ara ürünlerin toptan ticareti",
        "symbolSize": 0.3086625514403292
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4677,
        "name": "4677-Atık ve hurda toptan ticareti",
        "symbolSize": 0.673024691358025
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4690,
        "name": "4690-Belirli bir mala tahsis edilmemiş mağazalardaki toptan ticaret",
        "symbolSize": 0.5137654320987655
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4711,
        "name": "4711-Belirli bir mala tahsis edilmemiş mağazalarda gıda, içecek veya tütün ağırlıklı perakende ticaret",
        "symbolSize": 0.9237654320987653
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4719,
        "name": "4719-Belirli bir mala tahsis edilmemiş mağazalarda yapılan diğer perakende ticaret",
        "symbolSize": 0.8713580246913581
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4721,
        "name": "4721-Belirli bir mala tahsis edilmiş mağazalardaki meyve ve sebze perakende ticareti",
        "symbolSize": 1.165506172839505
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4722,
        "name": "4722-Belirli bir mala tahsis edilmiş mağazalardaki et ve et ürünlerinin perakende ticareti",
        "symbolSize": 1.2108641975308652
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4723,
        "name": "4723-Belirli bir mala tahsis edilmiş mağazalardaki balık, kabuklu hayvanlar ve yumuşakçaların perakende ticareti",
        "symbolSize": 0.9608641975308642
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4724,
        "name": "4724-Belirli bir mala tahsis edilmiş mağazalardaki ekmek, pastalar, unlu mamuller ve şekerli ürünlerin perakende ticareti",
        "symbolSize": 0.8220576131687244
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4725,
        "name": "4725-Belirli bir mala tahsis edilmiş mağazalardaki içeceklerin perakende ticareti",
        "symbolSize": 0.8117283950617286
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4726,
        "name": "4726-Belirli bir mala tahsis edilmiş mağazalardaki tütün ürünlerinin perakende ticareti",
        "symbolSize": 0.8241975308641972
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4729,
        "name": "4729-Belirli bir mala tahsis edilmiş mağazalardaki diğer gıda ürünlerinin perakende ticareti",
        "symbolSize": 0.9945524691358029
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4730,
        "name": "4730-Belirli bir mala tahsis edilmiş mağazalarda otomotiv yakıtının perakende ticareti",
        "symbolSize": 1.2905555555555557
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4741,
        "name": "4741-Belirli bir mala tahsis edilmiş mağazalarda bilgisayarların, çevre donanımlarının ve yazılım programlarının perakende ticareti",
        "symbolSize": 0.6266666666666666
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4742,
        "name": "4742-Belirli bir mala tahsis edilmiş mağazalarda telekomünikasyon teçhizatının perakende ticareti",
        "symbolSize": 1.0429629629629626
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4743,
        "name": "4743-Belirli bir mala tahsis edilmiş mağazalarda ses ve görüntü cihazlarının perakende ticareti",
        "symbolSize": 1.1045679012345682
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4751,
        "name": "4751-Belirli bir mala tahsis edilmiş mağazalarda tekstil ürünleri perakende ticareti",
        "symbolSize": 0.8345925925925929
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4752,
        "name": "4752-Belirli bir mala tahsis edilmiş mağazalarda hırdavat, boya ve cam perakende ticareti",
        "symbolSize": 1.2356010396361286
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4753,
        "name": "4753-Belirli bir mala tahsis edilmiş mağazalarda halı, kilim, duvar ve yer kaplamalarının perakende ticareti",
        "symbolSize": 0.9385185185185186
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4754,
        "name": "4754-Belirli bir mala tahsis edilmiş mağazalarda elektrikli ev aletlerinin perakende ticareti",
        "symbolSize": 1.056625514403292
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4759,
        "name": "4759-Belirli bir mala tahsis edilmiş mağazalarda mobilya, aydınlatma teçhizatı ve diğer ev eşyalarının perakende ticareti",
        "symbolSize": 0.9113909465020575
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4761,
        "name": "4761-Belirli bir mala tahsis edilmiş mağazalarda kitapların perakende ticareti",
        "symbolSize": 0.6158024691358025
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4762,
        "name": "4762-Belirli bir mala tahsis edilmiş mağazalarda gazeteler ve kırtasiye ürünlerinin perakende ticareti",
        "symbolSize": 1.1827777777777775
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4763,
        "name": "4763-Belirli bir mala tahsis edilmiş mağazalarda müzik ve video kayıtlarının perakende ticareti",
        "symbolSize": 0.621358024691358
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4764,
        "name": "4764-Belirli bir mala tahsis edilmiş mağazalarda spor malzemelerinin perakende ticareti",
        "symbolSize": 0.5779188712522046
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4765,
        "name": "4765-Belirli bir mala tahsis edilmiş mağazalarda oyunlar ve oyuncakların perakende ticareti",
        "symbolSize": 0.7512345679012347
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4771,
        "name": "4771-Belirli bir mala tahsis edilmiş mağazalarda giyim eşyalarının perakende ticareti",
        "symbolSize": 0.8324691358024684
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4772,
        "name": "4772-Belirli bir mala tahsis edilmiş mağazalarda ayakkabı ve deri eşyaların perakende ticareti",
        "symbolSize": 0.6640987654320989
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4773,
        "name": "4773-Belirli bir mala tahsis edilmiş mağazalarda eczacılık ürünlerinin perakende ticareti",
        "symbolSize": 1.2161111111111103
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4774,
        "name": "4774-Belirli bir mala tahsis edilmiş mağazalarda tıbbi ve ortopedik ürünlerin perakende ticareti",
        "symbolSize": 0.7407407407407409
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4775,
        "name": "4775-Belirli bir mala tahsis edilmiş mağazalarda kozmetik ve kişisel bakım malzemelerinin perakende ticareti",
        "symbolSize": 0.6791358024691361
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4776,
        "name": "4776-Belirli bir mala tahsis edilmiş mağazalarda çiçek, bitki, tohum, gübre, ev hayvanları ve ev hayvanları yemleri perakende ticareti",
        "symbolSize": 0.9433744855967072
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4777,
        "name": "4777-Belirli bir mala tahsis edilmiş mağazalarda saat ve mücevher perakende ticareti",
        "symbolSize": 0.5988888888888885
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4778,
        "name": "4778-Belirli bir mala tahsis edilmiş mağazalarda diğer yeni malların perakende ticareti",
        "symbolSize": 1.0182407407407412
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4779,
        "name": "4779-Kullanılmış malların satıldığı mağazalardaki perakende ticaret",
        "symbolSize": 0.6114814814814813
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4781,
        "name": "4781-Tezgahlar ve pazar yerleri vasıtasıyla gıda, içecek ve tütün ürünleri perakende ticareti",
        "symbolSize": 1.0483539094650198
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4782,
        "name": "4782-Tezgahlar ve pazar yerleri vasıtasıyla tekstil, giyim eşyası ve ayakkabı perakende ticareti",
        "symbolSize": 1.0218106995884775
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4789,
        "name": "4789-Tezgahlar ve pazar yerleri vasıtasıyla diğer malların perakende ticareti",
        "symbolSize": 1.085296296296296
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4791,
        "name": "4791-Posta yoluyla veya internet üzerinden yapılan perakende ticaret",
        "symbolSize": 0.27938271604938275
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4799,
        "name": "4799-Mağazalar, tezgahlar ve pazar yerleri dışında yapılan diğer perakende ticaret",
        "symbolSize": 0.9377366255144037
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4910,
        "name": "4910-Demir yolu ile şehirler arası yolcu taşımacılığı",
        "symbolSize": 0.558641975308642
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4920,
        "name": "4920-Demir yolu ile yük taşımacılığı",
        "symbolSize": 1.5823456790123456
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4931,
        "name": "4931-Kara taşımacılığı ile yapılan şehir içi ve banliyö yolcu taşımacılığı",
        "symbolSize": 1.004790123456789
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4932,
        "name": "4932-Taksi taşımacılığı",
        "symbolSize": 0.8145061728395063
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4939,
        "name": "4939-Başka yerde sınıflandırılmamış kara taşımacılığı ile yapılan diğer yolcu taşımacılığı",
        "symbolSize": 1.2603174603174598
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4941,
        "name": "4941-Kara yolu ile yük taşımacılığı",
        "symbolSize": 1.1112469135802456
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4942,
        "name": "4942-Ev ve iş yerlerine verilen taşımacılık hizmetleri",
        "symbolSize": 1.1254320987654325
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 4950,
        "name": "4950-Boru hattı taşımacılığı",
        "symbolSize": 1.4031481481481483
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5010,
        "name": "5010-Deniz ve kıyı sularında yolcu taşımacılığı",
        "symbolSize": 0.42917695473251016
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5020,
        "name": "5020-Deniz ve kıyı sularında yük taşımacılığı",
        "symbolSize": 0.15123456790123457
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5030,
        "name": "5030-İç sularda yolcu taşımacılığı",
        "symbolSize": 0.7206790123456789
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5040,
        "name": "5040-İç sularda yük taşımacılığı",
        "symbolSize": 2.124279835390946
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5110,
        "name": "5110-Hava yolu ile yolcu taşımacılığı",
        "symbolSize": 0.5448971193415638
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5121,
        "name": "5121-Hava yolu ile yük taşımacılığı",
        "symbolSize": 0.08666666666666666
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5122,
        "name": "5122-Uzay taşımacılığı",
        "symbolSize": 0.20320987654320988
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5210,
        "name": "5210-Depolama ve ambarlama",
        "symbolSize": 0.7393827160493827
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5221,
        "name": "5221-Kara taşımacılığını destekleyici hizmet faaliyetleri",
        "symbolSize": 1.092506172839506
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5222,
        "name": "5222-Su yolu taşımacılığını destekleyici hizmet faaliyetleri",
        "symbolSize": 0.4576543209876543
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5223,
        "name": "5223-Hava yolu taşımacılığını destekleyici hizmet faaliyetleri",
        "symbolSize": 0.3989382716049381
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5224,
        "name": "5224-Kargo yükleme boşaltma hizmetleri",
        "symbolSize": 0.7408333333333336
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5229,
        "name": "5229-Taşımacılığı destekleyici diğer faaliyetler",
        "symbolSize": 0.4895833333333335
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5310,
        "name": "5310-Evrensel hizmet yükümlülüğü altında postacılık faaliyetleri",
        "symbolSize": 1.0141975308641975
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5320,
        "name": "5320-Diğer posta ve kurye faaliyetleri",
        "symbolSize": 0.5674485596707821
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5510,
        "name": "5510-Oteller ve benzeri konaklama yerleri",
        "symbolSize": 0.7628395061728394
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5520,
        "name": "5520-Tatil ve diğer kısa süreli konaklama yerleri",
        "symbolSize": 1.0958847736625514
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5530,
        "name": "5530-Kamp alanları, motorlu karavan ve karavan tipi treyler (römork) park hizmetleri",
        "symbolSize": 1.0516049382716048
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5590,
        "name": "5590-Diğer konaklama yerleri",
        "symbolSize": 1.9009876543209865
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5610,
        "name": "5610-Lokantalar ve seyyar yemek hizmeti faaliyetleri",
        "symbolSize": 0.9538416848220757
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5621,
        "name": "5621-Özel günlerde dışarıya yemek hizmeti sunan işletmelerin faaliyetleri",
        "symbolSize": 0.6437037037037037
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5629,
        "name": "5629-Diğer yiyecek hizmeti faaliyetleri",
        "symbolSize": 0.8295884773662554
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5630,
        "name": "5630-İçecek sunum hizmetleri",
        "symbolSize": 0.6976014109347437
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5811,
        "name": "5811-Kitap yayımı",
        "symbolSize": 0.12559670781893004
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5812,
        "name": "5812-Rehberlerin ve posta adres listelerinin yayımlanması",
        "symbolSize": 0.22592592592592595
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5813,
        "name": "5813-Gazetelerin yayımlanması",
        "symbolSize": 1.0485185185185184
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5814,
        "name": "5814-Dergi ve süreli yayınların yayımlanması",
        "symbolSize": 0.4750617283950617
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5819,
        "name": "5819-Diğer yayıncılık faaliyetleri",
        "symbolSize": 0.2753086419753087
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5821,
        "name": "5821-Bilgisayar oyunlarının yayımlanması",
        "symbolSize": 0.15790123456790123
    },
    {
        "group": "Ticaret,ulaşım ve konaklama",
        "id": 5829,
        "name": "5829-Diğer yazılım programlarının yayımlanması",
        "symbolSize": 0.23876543209876544
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 5911,
        "name": "5911-Sinema filmi, video ve televizyon programları yapım faaliyetleri",
        "symbolSize": 0.09629629629629628
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 5912,
        "name": "5912-Sinema filmi, video ve televizyon programları çekim sonrası faaliyetleri",
        "symbolSize": 0.21790123456790125
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 5913,
        "name": "5913-Sinema filmi, video ve televizyon programları dağıtım faaliyetleri",
        "symbolSize": 0.1319753086419753
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 5914,
        "name": "5914-Sinema filmi gösterim faaliyetleri",
        "symbolSize": 0.7334567901234568
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 5920,
        "name": "5920-Ses kaydı ve müzik yayıncılığı faaliyetleri",
        "symbolSize": 0.12450617283950625
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6010,
        "name": "6010-Radyo yayıncılığı",
        "symbolSize": 0.6370370370370373
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6020,
        "name": "6020-Televizyon programcılığı ve yayıncılığı faaliyetleri",
        "symbolSize": 0.2217283950617284
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6110,
        "name": "6110-Kablolu telekomünikasyon faaliyetleri",
        "symbolSize": 0.3973456790123457
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6120,
        "name": "6120-Kablosuz telekomünikasyon faaliyetleri",
        "symbolSize": 0.6970987654320988
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6130,
        "name": "6130-Uydu üzerinden telekomünikasyon faaliyetleri",
        "symbolSize": 0.3264197530864198
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6190,
        "name": "6190-Diğer telekomünikasyon faaliyetleri",
        "symbolSize": 0.6297222222222223
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6201,
        "name": "6201-Bilgisayar programlama faaliyetleri",
        "symbolSize": 0.2980246913580246
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6202,
        "name": "6202-Bilgisayar danışmanlık faaliyetleri",
        "symbolSize": 0.2764197530864198
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6203,
        "name": "6203-Bilgisayar tesisleri yönetim faaliyetleri",
        "symbolSize": 0.36543209876543203
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6209,
        "name": "6209-Diğer bilgi teknolojisi ve bilgisayar hizmet faaliyetleri",
        "symbolSize": 0.3174074074074075
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6311,
        "name": "6311-Veri işleme, barındırma ve ilgili faaliyetler",
        "symbolSize": 1.5297530864197535
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6312,
        "name": "6312-Web portalları",
        "symbolSize": 0.2581481481481482
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6391,
        "name": "6391-Haber ajanslarının faaliyetleri",
        "symbolSize": 0.3762962962962963
    },
    {
        "group": "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
        "id": 6399,
        "name": "6399-Başka yerde sınıflandırılmamış diğer bilgi hizmet faaliyetleri",
        "symbolSize": 0.5080246913580246
    },
    {
        "group": "Diğer Hizmet",
        "id": 6810,
        "name": "6810-Kendine ait gayrimenkulun alınıp satılması",
        "symbolSize": 0.4240740740740741
    },
    {
        "group": "Diğer Hizmet",
        "id": 6820,
        "name": "6820-Kendine ait veya kiralanan gayrimenkulun kiraya verilmesi veya işletilmesi",
        "symbolSize": 0.6249382716049381
    },
    {
        "group": "Diğer Hizmet",
        "id": 6831,
        "name": "6831-Gayrimenkul acenteleri",
        "symbolSize": 0.5016666666666666
    },
    {
        "group": "Diğer Hizmet",
        "id": 6832,
        "name": "6832-Bir ücret veya sözleşme temeline dayalı olarak gayrimenkulun yönetilmesi",
        "symbolSize": 0.5383950617283951
    },
    {
        "group": "Diğer Hizmet",
        "id": 6910,
        "name": "6910-Hukuk faaliyetleri",
        "symbolSize": 0.8244290123456787
    },
    {
        "group": "Diğer Hizmet",
        "id": 6920,
        "name": "6920-Muhasebe, defter tutma ve denetim faaliyetleri; vergi danışmanlığı",
        "symbolSize": 0.5277283950617281
    },
    {
        "group": "Diğer Hizmet",
        "id": 7010,
        "name": "7010-İdare merkezi faaliyetleri",
        "symbolSize": 0.42938271604938266
    },
    {
        "group": "Diğer Hizmet",
        "id": 7021,
        "name": "7021-Halkla ilişkiler ve iletişim faaliyetleri",
        "symbolSize": 0.2624691358024692
    },
    {
        "group": "Diğer Hizmet",
        "id": 7022,
        "name": "7022-İşletme ve diğer idari danışmanlık faaliyetleri",
        "symbolSize": 0.4776543209876542
    },
    {
        "group": "Diğer Hizmet",
        "id": 7111,
        "name": "7111-Mimarlık faaliyetleri",
        "symbolSize": 0.8127160493827156
    },
    {
        "group": "Diğer Hizmet",
        "id": 7112,
        "name": "7112-Mühendislik faaliyetleri ve ilgili teknik danışmanlık",
        "symbolSize": 0.8443771043771041
    },
    {
        "group": "Diğer Hizmet",
        "id": 7120,
        "name": "7120-Teknik test ve analiz faaliyetleri",
        "symbolSize": 0.584787379972565
    },
    {
        "group": "Diğer Hizmet",
        "id": 7211,
        "name": "7211-Biyoteknolojiyle ilgili araştırma ve deneysel geliştirme faaliyetleri",
        "symbolSize": 0.32839506172839494
    },
    {
        "group": "Diğer Hizmet",
        "id": 7219,
        "name": "7219-Doğal bilimler ve mühendislikle ilgili diğer araştırma ve deneysel geliştirme faaliyetleri",
        "symbolSize": 0.431604938271605
    },
    {
        "group": "Diğer Hizmet",
        "id": 7220,
        "name": "7220-Sosyal bilimlerle ve beşeri bilimlerle ilgili araştırma ve deneysel geliştirme faaliyetleri",
        "symbolSize": 0.9379012345679012
    },
    {
        "group": "Diğer Hizmet",
        "id": 7311,
        "name": "7311-Reklam ajanslarının faaliyetleri",
        "symbolSize": 0.2848765432098764
    },
    {
        "group": "Diğer Hizmet",
        "id": 7312,
        "name": "7312-Çeşitli medya reklamları için alan ve zamanın bir ücret veya sözleşmeye dayalı olarak satışı",
        "symbolSize": 0.3372839506172839
    },
    {
        "group": "Diğer Hizmet",
        "id": 7320,
        "name": "7320-Piyasa ve kamuoyu araştırma faaliyetleri",
        "symbolSize": 0.23000000000000007
    },
    {
        "group": "Diğer Hizmet",
        "id": 7410,
        "name": "7410-Uzmanlaşmış tasarım faaliyetleri",
        "symbolSize": 0.2602880658436214
    },
    {
        "group": "Diğer Hizmet",
        "id": 7420,
        "name": "7420-Fotoğrafçılık faaliyetleri",
        "symbolSize": 0.5555908289241622
    },
    {
        "group": "Diğer Hizmet",
        "id": 7430,
        "name": "7430-Tercüme ve sözlü tercüme faaliyetleri",
        "symbolSize": 0.264074074074074
    },
    {
        "group": "Diğer Hizmet",
        "id": 7490,
        "name": "7490-Başka yerde sınıflandırılmamış diğer mesleki, bilimsel ve teknik faaliyetler",
        "symbolSize": 0.8164373897707229
    },
    {
        "group": "Diğer Hizmet",
        "id": 7500,
        "name": "7500-Veterinerlik hizmetleri",
        "symbolSize": 0.9304938271604941
    },
    {
        "group": "Diğer Hizmet",
        "id": 7711,
        "name": "7711-Motorlu hafif kara taşıtlarının ve arabaların kiralanması ve leasingi",
        "symbolSize": 0.6139506172839508
    },
    {
        "group": "Diğer Hizmet",
        "id": 7712,
        "name": "7712-Kamyonların kiralanması ve leasingi",
        "symbolSize": 1.0058024691358027
    },
    {
        "group": "Diğer Hizmet",
        "id": 7721,
        "name": "7721-Eğlence ve spor eşyalarının kiralanması ve leasingi",
        "symbolSize": 1.1408641975308642
    },
    {
        "group": "Diğer Hizmet",
        "id": 7722,
        "name": "7722-Video kasetlerin ve disklerin kiralanması",
        "symbolSize": 0.7174074074074074
    },
    {
        "group": "Diğer Hizmet",
        "id": 7729,
        "name": "7729-Başka yerde sınıflandırılmamış diğer kişisel ve ev eşyalarının kiralanması ve leasingi",
        "symbolSize": 0.7538683127572017
    },
    {
        "group": "Diğer Hizmet",
        "id": 7731,
        "name": "7731-Tarımsal makine ve ekipmanların kiralanması ve leasingi",
        "symbolSize": 1.0471604938271606
    },
    {
        "group": "Diğer Hizmet",
        "id": 7732,
        "name": "7732-Bina ve bina dışı inşaatlarda kullanılan makine ve ekipmanların kiralanması ve leasingi",
        "symbolSize": 0.9766666666666668
    },
    {
        "group": "Diğer Hizmet",
        "id": 7733,
        "name": "7733-Büro makine ve ekipmanlarının (bilgisayarlar dahil) kiralanması ve leasingi",
        "symbolSize": 0.7801234567901235
    },
    {
        "group": "Diğer Hizmet",
        "id": 7734,
        "name": "7734-Su yolu taşımacılığı ekipmanının kiralanması ve leasingi",
        "symbolSize": 0.14506172839506173
    },
    {
        "group": "Diğer Hizmet",
        "id": 7735,
        "name": "7735-Hava taşımacılığı araçlarının kiralanması ve leasingi",
        "symbolSize": 0.4138271604938272
    },
    {
        "group": "Diğer Hizmet",
        "id": 7739,
        "name": "7739-Başka yerde sınıflandırılmamış diğer makine, ekipman ve eşyaların kiralanması ve leasingi",
        "symbolSize": 0.6536934156378602
    },
    {
        "group": "Diğer Hizmet",
        "id": 7740,
        "name": "7740-Fikri mülkiyet haklarının ve benzer ürünlerin leasingi (Telif hakkı alınmış olan çalışmalar hariç)",
        "symbolSize": 0.07037037037037036
    },
    {
        "group": "Diğer Hizmet",
        "id": 7810,
        "name": "7810-İş bulma acentelerinin faaliyetleri",
        "symbolSize": 0.2245679012345679
    },
    {
        "group": "Diğer Hizmet",
        "id": 7820,
        "name": "7820-Geçici iş bulma acentelerinin faaliyetleri",
        "symbolSize": 0.7528395061728397
    },
    {
        "group": "Diğer Hizmet",
        "id": 7830,
        "name": "7830-Diğer insan kaynaklarının sağlanması",
        "symbolSize": 0.6718518518518515
    },
    {
        "group": "Diğer Hizmet",
        "id": 7911,
        "name": "7911-Seyahat acentesi faaliyetleri",
        "symbolSize": 0.5541975308641974
    },
    {
        "group": "Diğer Hizmet",
        "id": 7912,
        "name": "7912-Tur operatörü faaliyetleri",
        "symbolSize": 0.3622222222222222
    },
    {
        "group": "Diğer Hizmet",
        "id": 7990,
        "name": "7990-Diğer rezervasyon hizmetleri ve ilgili faaliyetler",
        "symbolSize": 0.45008230452674897
    },
    {
        "group": "Diğer Hizmet",
        "id": 8010,
        "name": "8010-Özel güvenlik faaliyetleri",
        "symbolSize": 0.7386419753086422
    },
    {
        "group": "Diğer Hizmet",
        "id": 8020,
        "name": "8020-Güvenlik sistemleri hizmet faaliyetleri",
        "symbolSize": 1.2931481481481482
    },
    {
        "group": "Diğer Hizmet",
        "id": 8030,
        "name": "8030-Soruşturma faaliyetleri",
        "symbolSize": 0.4375925925925926
    },
    {
        "group": "Diğer Hizmet",
        "id": 8110,
        "name": "8110-Tesis bünyesindeki kombine destek hizmetleri",
        "symbolSize": 0.8567901234567901
    },
    {
        "group": "Diğer Hizmet",
        "id": 8121,
        "name": "8121-Binaların genel temizliği",
        "symbolSize": 1.2076543209876542
    },
    {
        "group": "Diğer Hizmet",
        "id": 8122,
        "name": "8122-Diğer bina ve endüstriyel temizlik faaliyetleri",
        "symbolSize": 1.0142592592592594
    },
    {
        "group": "Diğer Hizmet",
        "id": 8129,
        "name": "8129-Diğer temizlik faaliyetleri",
        "symbolSize": 1.2908333333333326
    },
    {
        "group": "Diğer Hizmet",
        "id": 8130,
        "name": "8130-Çevre düzenlemesi ve bakımı faaliyetleri",
        "symbolSize": 1.3264197530864192
    },
    {
        "group": "Diğer Hizmet",
        "id": 8211,
        "name": "8211-Kombine büro yönetim hizmeti faaliyetleri",
        "symbolSize": 1.0837037037037038
    },
    {
        "group": "Diğer Hizmet",
        "id": 8219,
        "name": "8219-Fotokopi çekme, doküman hazırlama ve diğer uzmanlaşmış büro destek hizmetleri",
        "symbolSize": 1.546604938271605
    },
    {
        "group": "Diğer Hizmet",
        "id": 8220,
        "name": "8220-Çağrı merkezlerinin faaliyetleri",
        "symbolSize": 1.2928395061728393
    },
    {
        "group": "Diğer Hizmet",
        "id": 8230,
        "name": "8230-Kongre ve ticari gösteri organizasyonu",
        "symbolSize": 0.2567901234567901
    },
    {
        "group": "Diğer Hizmet",
        "id": 8291,
        "name": "8291-Tahsilat daireleri ve kredi kayıt bürolarının faaliyetleri",
        "symbolSize": 0.8583950617283951
    },
    {
        "group": "Diğer Hizmet",
        "id": 8292,
        "name": "8292-Paketleme faaliyetleri",
        "symbolSize": 1.1185802469135802
    },
    {
        "group": "Diğer Hizmet",
        "id": 8299,
        "name": "8299-Başka yerde sınıflandırılmamış diğer işletme destek hizmet faaliyetleri",
        "symbolSize": 0.4992063492063493
    },
    {
        "group": "Diğer Hizmet",
        "id": 8510,
        "name": "8510-Okul öncesi eğitim",
        "symbolSize": 1.057962962962963
    },
    {
        "group": "Diğer Hizmet",
        "id": 8520,
        "name": "8520-İlköğretim",
        "symbolSize": 1.2688888888888892
    },
    {
        "group": "Diğer Hizmet",
        "id": 8531,
        "name": "8531-Genel ortaöğretim",
        "symbolSize": 1.4662037037037037
    },
    {
        "group": "Diğer Hizmet",
        "id": 8532,
        "name": "8532-Teknik ve mesleki orta öğretim",
        "symbolSize": 1.3892283950617283
    },
    {
        "group": "Diğer Hizmet",
        "id": 8541,
        "name": "8541-Ortaöğretim sonrası yükseköğretim derecesinde olmayan eğitim",
        "symbolSize": 1.508024691358025
    },
    {
        "group": "Diğer Hizmet",
        "id": 8542,
        "name": "8542-Yükseköğretim",
        "symbolSize": 0.9319753086419752
    },
    {
        "group": "Diğer Hizmet",
        "id": 8551,
        "name": "8551-Spor ve eğlence eğitimi",
        "symbolSize": 1.8432098765432101
    },
    {
        "group": "Diğer Hizmet",
        "id": 8552,
        "name": "8552-Kültürel eğitim",
        "symbolSize": 0.7520987654320986
    },
    {
        "group": "Diğer Hizmet",
        "id": 8553,
        "name": "8553-Sürücü kursu faaliyetleri",
        "symbolSize": 1.2313580246913587
    },
    {
        "group": "Diğer Hizmet",
        "id": 8559,
        "name": "8559-Başka yerde sınıflandırılmamış diğer eğitim",
        "symbolSize": 1.2585409652076307
    },
    {
        "group": "Diğer Hizmet",
        "id": 8560,
        "name": "8560-Eğitimi destekleyici faaliyetler",
        "symbolSize": 1.6483950617283956
    },
    {
        "group": "Diğer Hizmet",
        "id": 8610,
        "name": "8610-Hastane hizmetleri",
        "symbolSize": 1.0508950617283954
    },
    {
        "group": "Diğer Hizmet",
        "id": 8621,
        "name": "8621-Genel hekimlik uygulama faaliyetleri",
        "symbolSize": 0.7458024691358017
    },
    {
        "group": "Diğer Hizmet",
        "id": 8622,
        "name": "8622-Uzman hekimlik ile ilgili uygulama faaliyetleri",
        "symbolSize": 0.7787160493827165
    },
    {
        "group": "Diğer Hizmet",
        "id": 8623,
        "name": "8623-Dişçilik ile ilgili uygulama faaliyetleri",
        "symbolSize": 0.971851851851852
    },
    {
        "group": "Diğer Hizmet",
        "id": 8690,
        "name": "8690-İnsan sağlığı ile ilgili diğer hizmetler",
        "symbolSize": 1.9082921810699587
    },
    {
        "group": "Diğer Hizmet",
        "id": 8710,
        "name": "8710-Hemşireli yatılı bakım faaliyetleri",
        "symbolSize": 1.5728395061728395
    },
    {
        "group": "Diğer Hizmet",
        "id": 8720,
        "name": "8720-Zihinsel engellilik, ruh sağlığı ve madde bağımlılığına yönelik yatılı bakım faaliyetleri",
        "symbolSize": 2.2962962962962967
    },
    {
        "group": "Diğer Hizmet",
        "id": 8730,
        "name": "8730-Yaşlılara ve bedensel engellilere yönelik yatılı bakım faaliyetleri",
        "symbolSize": 1.4001234567901237
    },
    {
        "group": "Diğer Hizmet",
        "id": 8790,
        "name": "8790-Diğer yatılı bakım faaliyetleri",
        "symbolSize": 1.9769958847736617
    },
    {
        "group": "Diğer Hizmet",
        "id": 8810,
        "name": "8810-Yaşlılar ve bedensel engelliler için barınacak yer sağlanmaksızın verilen sosyal hizmetler",
        "symbolSize": 1.6561728395061726
    },
    {
        "group": "Diğer Hizmet",
        "id": 8891,
        "name": "8891-Çocuk gündüz bakım (kreş) faaliyetleri",
        "symbolSize": 1.1437037037037034
    },
    {
        "group": "Diğer Hizmet",
        "id": 8899,
        "name": "8899-Başka yerde sınıflandırılmamış barınacak yer sağlanmaksızın verilen diğer sosyal yardım hizmetleri",
        "symbolSize": 1.4574897119341554
    },
    {
        "group": "Diğer Hizmet",
        "id": 9001,
        "name": "9001-Gösteri sanatları",
        "symbolSize": 0.2545326278659613
    },
    {
        "group": "Diğer Hizmet",
        "id": 9002,
        "name": "9002-Gösteri sanatlarını destekleyici faaliyetler",
        "symbolSize": 0.2923456790123457
    },
    {
        "group": "Diğer Hizmet",
        "id": 9003,
        "name": "9003-Sanatsal yaratıcılık faaliyetleri",
        "symbolSize": 0.5225925925925925
    },
    {
        "group": "Diğer Hizmet",
        "id": 9004,
        "name": "9004-Sanat tesislerinin işletilmesi",
        "symbolSize": 0.3034567901234567
    },
    {
        "group": "Diğer Hizmet",
        "id": 9101,
        "name": "9101-Kütüphane ve arşivlerin faaliyetleri",
        "symbolSize": 1.167654320987654
    },
    {
        "group": "Diğer Hizmet",
        "id": 9102,
        "name": "9102-Müzelerin faaliyetleri",
        "symbolSize": 1.6416049382716045
    },
    {
        "group": "Diğer Hizmet",
        "id": 9103,
        "name": "9103-Tarihi alanlar ve yapılar ile benzeri turistik yerlerin işletilmesi",
        "symbolSize": 1.8216049382716046
    },
    {
        "group": "Diğer Hizmet",
        "id": 9104,
        "name": "9104-Botanik bahçeleri, hayvanat bahçeleri ve tabiatı koruma alanlarıyla ilgili faaliyetler",
        "symbolSize": 0.6108641975308642
    },
    {
        "group": "Diğer Hizmet",
        "id": 9200,
        "name": "9200-Kumar ve müşterek bahis faaliyetleri",
        "symbolSize": 0.9455967078189299
    },
    {
        "group": "Diğer Hizmet",
        "id": 9311,
        "name": "9311-Spor tesislerinin işletilmesi",
        "symbolSize": 0.32827160493827157
    },
    {
        "group": "Diğer Hizmet",
        "id": 9312,
        "name": "9312-Spor kulüplerinin faaliyetleri",
        "symbolSize": 0.42217592592592557
    },
    {
        "group": "Diğer Hizmet",
        "id": 9313,
        "name": "9313-Form tutma salonları ile vücut geliştirme salonları",
        "symbolSize": 0.6969135802469133
    },
    {
        "group": "Diğer Hizmet",
        "id": 9319,
        "name": "9319-Diğer spor faaliyetleri",
        "symbolSize": 1.3631746031746037
    },
    {
        "group": "Diğer Hizmet",
        "id": 9321,
        "name": "9321-Eğlence parkları ve lunaparkların faaliyetleri",
        "symbolSize": 0.7882716049382715
    },
    {
        "group": "Diğer Hizmet",
        "id": 9329,
        "name": "9329-Diğer eğlence ve dinlence faaliyetleri",
        "symbolSize": 0.677543209876543
    },
    {
        "group": "Diğer Hizmet",
        "id": 9511,
        "name": "9511-Bilgisayarların ve bilgisayar çevre birimlerinin onarımı",
        "symbolSize": 0.4927160493827162
    },
    {
        "group": "Diğer Hizmet",
        "id": 9512,
        "name": "9512-İletişim araç ve gereçlerinin onarımı",
        "symbolSize": 0.7993827160493829
    },
    {
        "group": "Diğer Hizmet",
        "id": 9521,
        "name": "9521-Tüketici elektroniği ürünlerinin onarımı",
        "symbolSize": 0.8729629629629629
    },
    {
        "group": "Diğer Hizmet",
        "id": 9522,
        "name": "9522-Evde kullanılan cihazlar ile ev ve bahçe gereçlerinin onarımı",
        "symbolSize": 0.8753497942386831
    },
    {
        "group": "Diğer Hizmet",
        "id": 9523,
        "name": "9523-Ayakkabı ve deri eşyaların onarımı",
        "symbolSize": 0.9223456790123457
    },
    {
        "group": "Diğer Hizmet",
        "id": 9524,
        "name": "9524-Mobilyaların ve ev döşemelerinin onarımı",
        "symbolSize": 1.2444444444444445
    },
    {
        "group": "Diğer Hizmet",
        "id": 9525,
        "name": "9525-Saatlerin ve mücevherlerin onarımı",
        "symbolSize": 0.6824074074074075
    },
    {
        "group": "Diğer Hizmet",
        "id": 9529,
        "name": "9529-Başka yerde sınıflandırılmamış diğer kişisel eşyaların ve ev eşyalarının onarımı",
        "symbolSize": 0.956172839506173
    },
    {
        "group": "Diğer Hizmet",
        "id": "9601",
        "name": "9601-Tekstil ve kürk ürünlerinin yıkanması ve (kuru) temizlenmesi",
        "symbolSize": 0.6227160493827164
    },
    {
        "group": "Diğer Hizmet",
        "id": 9602,
        "name": "9602-Kuaförlük ve diğer güzellik salonlarının faaliyetleri",
        "symbolSize": 0.8811111111111117
    },
    {
        "group": "Diğer Hizmet",
        "id": 9603,
        "name": "9603-Cenaze işleri ile ilgili faaliyetler",
        "symbolSize": 0.6085185185185185
    },
    {
        "group": "Diğer Hizmet",
        "id": 9604,
        "name": "9604-Hamam, sauna, solaryum salonu, masaj salonu ve benzeri yerlerin faaliyetleri",
        "symbolSize": 0.7958024691358019
    }
],
  links: [
    {
        "source": "510",
        "target": "2433",
        "value": 0.037037037037037
    },
    {
        "source": "510",
        "target": "2362",
        "value": 0.0476190476190476
    },
    {
        "source": "510",
        "target": "8623",
        "value": 0.0476190476190476
    },
    {
        "source": "510",
        "target": "9321",
        "value": 0.0476190476190476
    },
    {
        "source": "510",
        "target": "4615",
        "value": 0.05
    },
    {
        "source": "510",
        "target": "4637",
        "value": 0.0526315789473684
    },
    {
        "source": "510",
        "target": "4673",
        "value": 0.0555555555555556
    },
    {
        "source": "510",
        "target": "1092",
        "value": 0.0588235294117647
    },
    {
        "source": "510",
        "target": "4763",
        "value": 0.0625
    },
    {
        "source": "520",
        "target": "7732",
        "value": 0.04
    },
    {
        "source": "520",
        "target": "7112",
        "value": 0.0476190476190476
    },
    {
        "source": "520",
        "target": "9512",
        "value": 0.0526315789473684
    },
    {
        "source": "610",
        "target": "4752",
        "value": 0.02
    },
    {
        "source": "610",
        "target": "4722",
        "value": 0.0222222222222222
    },
    {
        "source": "610",
        "target": "3102",
        "value": 0.0232558139534884
    },
    {
        "source": "610",
        "target": "4623",
        "value": 0.0238095238095238
    },
    {
        "source": "610",
        "target": "1051",
        "value": 0.025
    },
    {
        "source": "610",
        "target": "4742",
        "value": 0.0256410256410256
    },
    {
        "source": "610",
        "target": "1011",
        "value": 0.027027027027027
    },
    {
        "source": "610",
        "target": "4762",
        "value": 0.027027027027027
    },
    {
        "source": "610",
        "target": "4942",
        "value": 0.027027027027027
    },
    {
        "source": "610",
        "target": "9101",
        "value": 0.027027027027027
    },
    {
        "source": "610",
        "target": "811",
        "value": 0.0277777777777778
    },
    {
        "source": "610",
        "target": "1091",
        "value": 0.0285714285714286
    },
    {
        "source": "610",
        "target": "3811",
        "value": 0.0303030303030303
    },
    {
        "source": "610",
        "target": "4613",
        "value": 0.03125
    },
    {
        "source": "610",
        "target": "1623",
        "value": 0.0333333333333333
    },
    {
        "source": "610",
        "target": "4782",
        "value": 0.0333333333333333
    },
    {
        "source": "610",
        "target": "7500",
        "value": 0.0333333333333333
    },
    {
        "source": "610",
        "target": "1629",
        "value": 0.0344827586206897
    },
    {
        "source": "610",
        "target": "3600",
        "value": 0.0344827586206897
    },
    {
        "source": "610",
        "target": "8130",
        "value": 0.0357142857142857
    },
    {
        "source": "610",
        "target": "2433",
        "value": 0.037037037037037
    },
    {
        "source": "610",
        "target": "4635",
        "value": 0.0384615384615385
    },
    {
        "source": "610",
        "target": "4725",
        "value": 0.0384615384615385
    },
    {
        "source": "610",
        "target": "9529",
        "value": 0.0384615384615385
    },
    {
        "source": "610",
        "target": "9602",
        "value": 0.0384615384615385
    },
    {
        "source": "610",
        "target": "1107",
        "value": 0.04
    },
    {
        "source": "610",
        "target": "2370",
        "value": 0.04
    },
    {
        "source": "610",
        "target": "4532",
        "value": 0.04
    },
    {
        "source": "610",
        "target": "8292",
        "value": 0.04
    },
    {
        "source": "610",
        "target": "9200",
        "value": 0.04
    },
    {
        "source": "610",
        "target": "1624",
        "value": 0.0416666666666667
    },
    {
        "source": "610",
        "target": "4391",
        "value": 0.0416666666666667
    },
    {
        "source": "610",
        "target": "1621",
        "value": 0.0434782608695652
    },
    {
        "source": "610",
        "target": "4322",
        "value": 0.0434782608695652
    },
    {
        "source": "610",
        "target": "4632",
        "value": 0.0434782608695652
    },
    {
        "source": "610",
        "target": "8110",
        "value": 0.0434782608695652
    },
    {
        "source": "610",
        "target": "9103",
        "value": 0.0454545454545455
    },
    {
        "source": "610",
        "target": "3831",
        "value": 0.0476190476190476
    },
    {
        "source": "610",
        "target": "4311",
        "value": 0.0476190476190476
    },
    {
        "source": "610",
        "target": "5914",
        "value": 0.0476190476190476
    },
    {
        "source": "610",
        "target": "2221",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "2593",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "3317",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "4636",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "7420",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "9313",
        "value": 0.05
    },
    {
        "source": "610",
        "target": "2521",
        "value": 0.0526315789473684
    },
    {
        "source": "610",
        "target": "4677",
        "value": 0.0526315789473684
    },
    {
        "source": "610",
        "target": "1712",
        "value": 0.0555555555555556
    },
    {
        "source": "610",
        "target": "2830",
        "value": 0.0555555555555556
    },
    {
        "source": "610",
        "target": "1910",
        "value": 0.0588235294117647
    },
    {
        "source": "620",
        "target": "812",
        "value": 0.0178571428571429
    },
    {
        "source": "620",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "620",
        "target": "3821",
        "value": 0.0222222222222222
    },
    {
        "source": "620",
        "target": "4312",
        "value": 0.0222222222222222
    },
    {
        "source": "620",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "620",
        "target": "3530",
        "value": 0.0277777777777778
    },
    {
        "source": "620",
        "target": "1085",
        "value": 0.0285714285714286
    },
    {
        "source": "620",
        "target": "2223",
        "value": 0.0285714285714286
    },
    {
        "source": "620",
        "target": "5813",
        "value": 0.0285714285714286
    },
    {
        "source": "620",
        "target": "5221",
        "value": 0.0294117647058824
    },
    {
        "source": "620",
        "target": "3700",
        "value": 0.0303030303030303
    },
    {
        "source": "620",
        "target": "4639",
        "value": 0.0303030303030303
    },
    {
        "source": "620",
        "target": "1419",
        "value": 0.032258064516129
    },
    {
        "source": "620",
        "target": "729",
        "value": 0.0333333333333333
    },
    {
        "source": "620",
        "target": "4778",
        "value": 0.0333333333333333
    },
    {
        "source": "620",
        "target": "4781",
        "value": 0.0333333333333333
    },
    {
        "source": "620",
        "target": "5610",
        "value": 0.0357142857142857
    },
    {
        "source": "620",
        "target": "2399",
        "value": 0.037037037037037
    },
    {
        "source": "620",
        "target": "9102",
        "value": 0.037037037037037
    },
    {
        "source": "620",
        "target": "9329",
        "value": 0.037037037037037
    },
    {
        "source": "620",
        "target": "8542",
        "value": 0.0416666666666667
    },
    {
        "source": "620",
        "target": "1412",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "2446",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "4333",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "4334",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "4724",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "5520",
        "value": 0.0434782608695652
    },
    {
        "source": "620",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "620",
        "target": "4765",
        "value": 0.0476190476190476
    },
    {
        "source": "620",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "620",
        "target": "4110",
        "value": 0.05
    },
    {
        "source": "620",
        "target": "4638",
        "value": 0.05
    },
    {
        "source": "620",
        "target": "2599",
        "value": 0.0526315789473684
    },
    {
        "source": "620",
        "target": "4777",
        "value": 0.0526315789473684
    },
    {
        "source": "620",
        "target": "1089",
        "value": 0.0555555555555556
    },
    {
        "source": "620",
        "target": "2529",
        "value": 0.0555555555555556
    },
    {
        "source": "620",
        "target": "5530",
        "value": 0.0555555555555556
    },
    {
        "source": "620",
        "target": "4761",
        "value": 0.0588235294117647
    },
    {
        "source": "620",
        "target": "4771",
        "value": 0.0588235294117647
    },
    {
        "source": "710",
        "target": "2352",
        "value": 0.0476190476190476
    },
    {
        "source": "710",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "721",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "721",
        "target": "9523",
        "value": 0.0476190476190476
    },
    {
        "source": "721",
        "target": "3311",
        "value": 0.05
    },
    {
        "source": "729",
        "target": "1073",
        "value": 0.0333333333333333
    },
    {
        "source": "811",
        "target": "4646",
        "value": 0.0277777777777778
    },
    {
        "source": "811",
        "target": "4665",
        "value": 0.0277777777777778
    },
    {
        "source": "811",
        "target": "4674",
        "value": 0.0277777777777778
    },
    {
        "source": "812",
        "target": "1103",
        "value": 0.0178571428571429
    },
    {
        "source": "812",
        "target": "7735",
        "value": 0.0178571428571429
    },
    {
        "source": "891",
        "target": "1085",
        "value": 0.0285714285714286
    },
    {
        "source": "891",
        "target": "4743",
        "value": 0.0294117647058824
    },
    {
        "source": "891",
        "target": "1413",
        "value": 0.03125
    },
    {
        "source": "891",
        "target": "4671",
        "value": 0.0333333333333333
    },
    {
        "source": "891",
        "target": "1013",
        "value": 0.0384615384615385
    },
    {
        "source": "891",
        "target": "4329",
        "value": 0.0384615384615385
    },
    {
        "source": "891",
        "target": "4299",
        "value": 0.04
    },
    {
        "source": "891",
        "target": "4772",
        "value": 0.0526315789473684
    },
    {
        "source": "892",
        "target": "8220",
        "value": 0.0303030303030303
    },
    {
        "source": "893",
        "target": "1413",
        "value": 0.03125
    },
    {
        "source": "899",
        "target": "1052",
        "value": 0.0277777777777778
    },
    {
        "source": "899",
        "target": "2571",
        "value": 0.0277777777777778
    },
    {
        "source": "910",
        "target": "1081",
        "value": 0.0416666666666667
    },
    {
        "source": "910",
        "target": "8542",
        "value": 0.0416666666666667
    },
    {
        "source": "990",
        "target": "1106",
        "value": 0.0285714285714286
    },
    {
        "source": "1011",
        "target": "3313",
        "value": 0.027027027027027
    },
    {
        "source": "1011",
        "target": "8622",
        "value": 0.027027027027027
    },
    {
        "source": "1012",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "1012",
        "target": "8621",
        "value": 0.032258064516129
    },
    {
        "source": "1012",
        "target": "3523",
        "value": 0.04
    },
    {
        "source": "1020",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "1031",
        "target": "4613",
        "value": 0.03125
    },
    {
        "source": "1031",
        "target": "4751",
        "value": 0.0357142857142857
    },
    {
        "source": "1031",
        "target": "5630",
        "value": 0.04
    },
    {
        "source": "1032",
        "target": "1083",
        "value": 0.0476190476190476
    },
    {
        "source": "1039",
        "target": "1104",
        "value": 0.0476190476190476
    },
    {
        "source": "1041",
        "target": "8542",
        "value": 0.0416666666666667
    },
    {
        "source": "1042",
        "target": "8559",
        "value": 0.02
    },
    {
        "source": "1042",
        "target": "3522",
        "value": 0.0204081632653061
    },
    {
        "source": "1042",
        "target": "8690",
        "value": 0.0217391304347826
    },
    {
        "source": "1042",
        "target": "8121",
        "value": 0.0232558139534884
    },
    {
        "source": "1042",
        "target": "1610",
        "value": 0.0256410256410256
    },
    {
        "source": "1042",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "1042",
        "target": "5310",
        "value": 0.0294117647058824
    },
    {
        "source": "1042",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "1042",
        "target": "2364",
        "value": 0.0357142857142857
    },
    {
        "source": "1042",
        "target": "4719",
        "value": 0.0384615384615385
    },
    {
        "source": "1042",
        "target": "4950",
        "value": 0.0416666666666667
    },
    {
        "source": "1042",
        "target": "2011",
        "value": 0.0555555555555556
    },
    {
        "source": "1051",
        "target": "7320",
        "value": 0.025
    },
    {
        "source": "1052",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "1052",
        "target": "4321",
        "value": 0.0277777777777778
    },
    {
        "source": "1052",
        "target": "8219",
        "value": 0.03125
    },
    {
        "source": "1052",
        "target": "4779",
        "value": 0.0434782608695652
    },
    {
        "source": "1052",
        "target": "9521",
        "value": 0.0526315789473684
    },
    {
        "source": "1052",
        "target": "1520",
        "value": 0.0588235294117647
    },
    {
        "source": "1061",
        "target": "1083",
        "value": 0.03125
    },
    {
        "source": "1061",
        "target": "6311",
        "value": 0.03125
    },
    {
        "source": "1062",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "1062",
        "target": "4759",
        "value": 0.027027027027027
    },
    {
        "source": "1062",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "1062",
        "target": "4729",
        "value": 0.0303030303030303
    },
    {
        "source": "1062",
        "target": "8220",
        "value": 0.0303030303030303
    },
    {
        "source": "1062",
        "target": "4222",
        "value": 0.03125
    },
    {
        "source": "1062",
        "target": "9312",
        "value": 0.032258064516129
    },
    {
        "source": "1062",
        "target": "4723",
        "value": 0.037037037037037
    },
    {
        "source": "1062",
        "target": "4920",
        "value": 0.037037037037037
    },
    {
        "source": "1062",
        "target": "5621",
        "value": 0.0555555555555556
    },
    {
        "source": "1071",
        "target": "1103",
        "value": 0.0196078431372549
    },
    {
        "source": "1071",
        "target": "2640",
        "value": 0.0196078431372549
    },
    {
        "source": "1071",
        "target": "4663",
        "value": 0.0196078431372549
    },
    {
        "source": "1071",
        "target": "5229",
        "value": 0.0196078431372549
    },
    {
        "source": "1072",
        "target": "4725",
        "value": 0.0384615384615385
    },
    {
        "source": "1072",
        "target": "8510",
        "value": 0.0476190476190476
    },
    {
        "source": "1073",
        "target": "4313",
        "value": 0.0384615384615385
    },
    {
        "source": "1081",
        "target": "2410",
        "value": 0.0416666666666667
    },
    {
        "source": "1081",
        "target": "4775",
        "value": 0.0416666666666667
    },
    {
        "source": "1082",
        "target": "7112",
        "value": 0.0476190476190476
    },
    {
        "source": "1083",
        "target": "2361",
        "value": 0.0192307692307692
    },
    {
        "source": "1083",
        "target": "4661",
        "value": 0.0208333333333333
    },
    {
        "source": "1083",
        "target": "4789",
        "value": 0.0303030303030303
    },
    {
        "source": "1083",
        "target": "4633",
        "value": 0.032258064516129
    },
    {
        "source": "1083",
        "target": "4519",
        "value": 0.037037037037037
    },
    {
        "source": "1083",
        "target": "7712",
        "value": 0.0416666666666667
    },
    {
        "source": "1083",
        "target": "3314",
        "value": 0.05
    },
    {
        "source": "1083",
        "target": "8552",
        "value": 0.0555555555555556
    },
    {
        "source": "1084",
        "target": "1107",
        "value": 0.04
    },
    {
        "source": "1086",
        "target": "3821",
        "value": 0.0222222222222222
    },
    {
        "source": "1091",
        "target": "5040",
        "value": 0.0285714285714286
    },
    {
        "source": "1101",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "1101",
        "target": "7729",
        "value": 0.0357142857142857
    },
    {
        "source": "1102",
        "target": "4637",
        "value": 0.0526315789473684
    },
    {
        "source": "1103",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "1103",
        "target": "3513",
        "value": 0.0166666666666667
    },
    {
        "source": "1103",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "1103",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "1103",
        "target": "8532",
        "value": 0.0204081632653061
    },
    {
        "source": "1103",
        "target": "8899",
        "value": 0.0208333333333333
    },
    {
        "source": "1103",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "1103",
        "target": "8531",
        "value": 0.0222222222222222
    },
    {
        "source": "1103",
        "target": "8610",
        "value": 0.0227272727272727
    },
    {
        "source": "1103",
        "target": "3511",
        "value": 0.0238095238095238
    },
    {
        "source": "1103",
        "target": "2562",
        "value": 0.0294117647058824
    },
    {
        "source": "1103",
        "target": "4799",
        "value": 0.0294117647058824
    },
    {
        "source": "1103",
        "target": "4511",
        "value": 0.0384615384615385
    },
    {
        "source": "1103",
        "target": "3812",
        "value": 0.04
    },
    {
        "source": "1103",
        "target": "7732",
        "value": 0.04
    },
    {
        "source": "1103",
        "target": "4617",
        "value": 0.0416666666666667
    },
    {
        "source": "1103",
        "target": "3832",
        "value": 0.0434782608695652
    },
    {
        "source": "1103",
        "target": "2511",
        "value": 0.0526315789473684
    },
    {
        "source": "1104",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "1104",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "1104",
        "target": "2363",
        "value": 0.0166666666666667
    },
    {
        "source": "1104",
        "target": "4221",
        "value": 0.0169491525423729
    },
    {
        "source": "1104",
        "target": "4773",
        "value": 0.0169491525423729
    },
    {
        "source": "1104",
        "target": "8553",
        "value": 0.0169491525423729
    },
    {
        "source": "1104",
        "target": "8551",
        "value": 0.0172413793103448
    },
    {
        "source": "1104",
        "target": "4711",
        "value": 0.0188679245283019
    },
    {
        "source": "1104",
        "target": "4752",
        "value": 0.02
    },
    {
        "source": "1104",
        "target": "4120",
        "value": 0.0204081632653061
    },
    {
        "source": "1104",
        "target": "4931",
        "value": 0.0208333333333333
    },
    {
        "source": "1104",
        "target": "8730",
        "value": 0.0222222222222222
    },
    {
        "source": "1104",
        "target": "8891",
        "value": 0.025
    },
    {
        "source": "1104",
        "target": "2351",
        "value": 0.0256410256410256
    },
    {
        "source": "1104",
        "target": "3514",
        "value": 0.0256410256410256
    },
    {
        "source": "1104",
        "target": "4776",
        "value": 0.027027027027027
    },
    {
        "source": "1104",
        "target": "3512",
        "value": 0.0285714285714286
    },
    {
        "source": "1104",
        "target": "4941",
        "value": 0.0285714285714286
    },
    {
        "source": "1104",
        "target": "8129",
        "value": 0.0294117647058824
    },
    {
        "source": "1104",
        "target": "4332",
        "value": 0.037037037037037
    },
    {
        "source": "1104",
        "target": "8299",
        "value": 0.0434782608695652
    },
    {
        "source": "1105",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "1105",
        "target": "8720",
        "value": 0.0196078431372549
    },
    {
        "source": "1105",
        "target": "1414",
        "value": 0.0303030303030303
    },
    {
        "source": "1105",
        "target": "2369",
        "value": 0.0344827586206897
    },
    {
        "source": "1105",
        "target": "3822",
        "value": 0.04
    },
    {
        "source": "1106",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "1106",
        "target": "8559",
        "value": 0.02
    },
    {
        "source": "1106",
        "target": "9522",
        "value": 0.0232558139534884
    },
    {
        "source": "1106",
        "target": "4754",
        "value": 0.024390243902439
    },
    {
        "source": "1106",
        "target": "4611",
        "value": 0.0344827586206897
    },
    {
        "source": "1107",
        "target": "9311",
        "value": 0.04
    },
    {
        "source": "1200",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "1310",
        "target": "4779",
        "value": 0.0434782608695652
    },
    {
        "source": "1310",
        "target": "4339",
        "value": 0.0555555555555556
    },
    {
        "source": "1320",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "1330",
        "target": "4711",
        "value": 0.0188679245283019
    },
    {
        "source": "1391",
        "target": "2511",
        "value": 0.0526315789473684
    },
    {
        "source": "1391",
        "target": "2920",
        "value": 0.0555555555555556
    },
    {
        "source": "1392",
        "target": "2446",
        "value": 0.0434782608695652
    },
    {
        "source": "1393",
        "target": "9522",
        "value": 0.0232558139534884
    },
    {
        "source": "1394",
        "target": "1412",
        "value": 0.0434782608695652
    },
    {
        "source": "1395",
        "target": "5310",
        "value": 0.0294117647058824
    },
    {
        "source": "1396",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "1399",
        "target": "7500",
        "value": 0.0333333333333333
    },
    {
        "source": "1411",
        "target": "1419",
        "value": 0.032258064516129
    },
    {
        "source": "1412",
        "target": "4540",
        "value": 0.0434782608695652
    },
    {
        "source": "1412",
        "target": "9319",
        "value": 0.0434782608695652
    },
    {
        "source": "1413",
        "target": "2670",
        "value": 0.03125
    },
    {
        "source": "1413",
        "target": "5510",
        "value": 0.03125
    },
    {
        "source": "1414",
        "target": "4764",
        "value": 0.0303030303030303
    },
    {
        "source": "1414",
        "target": "5210",
        "value": 0.0303030303030303
    },
    {
        "source": "1414",
        "target": "7721",
        "value": 0.0303030303030303
    },
    {
        "source": "1419",
        "target": "1811",
        "value": 0.032258064516129
    },
    {
        "source": "1419",
        "target": "2431",
        "value": 0.032258064516129
    },
    {
        "source": "1419",
        "target": "2823",
        "value": 0.032258064516129
    },
    {
        "source": "1419",
        "target": "6910",
        "value": 0.032258064516129
    },
    {
        "source": "1419",
        "target": "7711",
        "value": 0.032258064516129
    },
    {
        "source": "1419",
        "target": "7733",
        "value": 0.032258064516129
    },
    {
        "source": "1420",
        "target": "3513",
        "value": 0.0166666666666667
    },
    {
        "source": "1420",
        "target": "2361",
        "value": 0.0192307692307692
    },
    {
        "source": "1420",
        "target": "4621",
        "value": 0.025
    },
    {
        "source": "1420",
        "target": "4726",
        "value": 0.0303030303030303
    },
    {
        "source": "1431",
        "target": "2364",
        "value": 0.0357142857142857
    },
    {
        "source": "1439",
        "target": "4299",
        "value": 0.04
    },
    {
        "source": "1511",
        "target": "8531",
        "value": 0.0222222222222222
    },
    {
        "source": "1512",
        "target": "8621",
        "value": 0.032258064516129
    },
    {
        "source": "1622",
        "target": "4637",
        "value": 0.0526315789473684
    },
    {
        "source": "1623",
        "target": "1820",
        "value": 0.0333333333333333
    },
    {
        "source": "1623",
        "target": "4622",
        "value": 0.0333333333333333
    },
    {
        "source": "1623",
        "target": "7022",
        "value": 0.0333333333333333
    },
    {
        "source": "1711",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "1721",
        "target": "4762",
        "value": 0.027027027027027
    },
    {
        "source": "1722",
        "target": "4759",
        "value": 0.027027027027027
    },
    {
        "source": "1723",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "1724",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "1729",
        "target": "4762",
        "value": 0.027027027027027
    },
    {
        "source": "1812",
        "target": "4221",
        "value": 0.0169491525423729
    },
    {
        "source": "1813",
        "target": "8551",
        "value": 0.0172413793103448
    },
    {
        "source": "1814",
        "target": "4661",
        "value": 0.0208333333333333
    },
    {
        "source": "1920",
        "target": "8621",
        "value": 0.032258064516129
    },
    {
        "source": "2012",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "2013",
        "target": "8899",
        "value": 0.0208333333333333
    },
    {
        "source": "2014",
        "target": "3530",
        "value": 0.0277777777777778
    },
    {
        "source": "2015",
        "target": "4299",
        "value": 0.04
    },
    {
        "source": "2016",
        "target": "5610",
        "value": 0.0357142857142857
    },
    {
        "source": "2017",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "2017",
        "target": "4520",
        "value": 0.03125
    },
    {
        "source": "2020",
        "target": "3523",
        "value": 0.04
    },
    {
        "source": "2030",
        "target": "8551",
        "value": 0.0172413793103448
    },
    {
        "source": "2041",
        "target": "4299",
        "value": 0.04
    },
    {
        "source": "2042",
        "target": "4721",
        "value": 0.0212765957446809
    },
    {
        "source": "2042",
        "target": "4753",
        "value": 0.0285714285714286
    },
    {
        "source": "2051",
        "target": "4777",
        "value": 0.0526315789473684
    },
    {
        "source": "2052",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "2053",
        "target": "4931",
        "value": 0.0208333333333333
    },
    {
        "source": "2059",
        "target": "3523",
        "value": 0.04
    },
    {
        "source": "2060",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "2110",
        "target": "8720",
        "value": 0.0196078431372549
    },
    {
        "source": "2110",
        "target": "4721",
        "value": 0.0212765957446809
    },
    {
        "source": "2120",
        "target": "8690",
        "value": 0.0217391304347826
    },
    {
        "source": "2211",
        "target": "8610",
        "value": 0.0227272727272727
    },
    {
        "source": "2219",
        "target": "4639",
        "value": 0.0303030303030303
    },
    {
        "source": "2222",
        "target": "7112",
        "value": 0.0476190476190476
    },
    {
        "source": "2229",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "2311",
        "target": "4311",
        "value": 0.0476190476190476
    },
    {
        "source": "2312",
        "target": "4299",
        "value": 0.04
    },
    {
        "source": "2313",
        "target": "8559",
        "value": 0.02
    },
    {
        "source": "2314",
        "target": "4221",
        "value": 0.0169491525423729
    },
    {
        "source": "2319",
        "target": "4222",
        "value": 0.03125
    },
    {
        "source": "2320",
        "target": "8510",
        "value": 0.0476190476190476
    },
    {
        "source": "2331",
        "target": "4751",
        "value": 0.0357142857142857
    },
    {
        "source": "2332",
        "target": "8510",
        "value": 0.0476190476190476
    },
    {
        "source": "2341",
        "target": "4752",
        "value": 0.02
    },
    {
        "source": "2342",
        "target": "8121",
        "value": 0.0232558139534884
    },
    {
        "source": "2343",
        "target": "2363",
        "value": 0.0166666666666667
    },
    {
        "source": "2344",
        "target": "8730",
        "value": 0.0222222222222222
    },
    {
        "source": "2349",
        "target": "4711",
        "value": 0.0188679245283019
    },
    {
        "source": "2351",
        "target": "7911",
        "value": 0.0256410256410256
    },
    {
        "source": "2351",
        "target": "9601",
        "value": 0.0256410256410256
    },
    {
        "source": "2361",
        "target": "6203",
        "value": 0.0192307692307692
    },
    {
        "source": "2361",
        "target": "6391",
        "value": 0.0192307692307692
    },
    {
        "source": "2361",
        "target": "7021",
        "value": 0.0192307692307692
    },
    {
        "source": "2361",
        "target": "7111",
        "value": 0.0384615384615385
    },
    {
        "source": "2363",
        "target": "2731",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "2814",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "2910",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "3020",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "4642",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "4669",
        "value": 0.0166666666666667
    },
    {
        "source": "2363",
        "target": "6130",
        "value": 0.0166666666666667
    },
    {
        "source": "2365",
        "target": "3530",
        "value": 0.0555555555555556
    },
    {
        "source": "2369",
        "target": "7220",
        "value": 0.0344827586206897
    },
    {
        "source": "2370",
        "target": "2829",
        "value": 0.04
    },
    {
        "source": "2370",
        "target": "6110",
        "value": 0.04
    },
    {
        "source": "2391",
        "target": "4754",
        "value": 0.024390243902439
    },
    {
        "source": "2420",
        "target": "8621",
        "value": 0.032258064516129
    },
    {
        "source": "2432",
        "target": "5813",
        "value": 0.0285714285714286
    },
    {
        "source": "2433",
        "target": "8010",
        "value": 0.037037037037037
    },
    {
        "source": "2434",
        "target": "9101",
        "value": 0.027027027027027
    },
    {
        "source": "2441",
        "target": "9602",
        "value": 0.0384615384615385
    },
    {
        "source": "2442",
        "target": "5221",
        "value": 0.0294117647058824
    },
    {
        "source": "2443",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "2444",
        "target": "9602",
        "value": 0.0384615384615385
    },
    {
        "source": "2445",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "2446",
        "target": "9525",
        "value": 0.0434782608695652
    },
    {
        "source": "2451",
        "target": "4632",
        "value": 0.0434782608695652
    },
    {
        "source": "2452",
        "target": "4632",
        "value": 0.0434782608695652
    },
    {
        "source": "2453",
        "target": "8623",
        "value": 0.0476190476190476
    },
    {
        "source": "2454",
        "target": "8551",
        "value": 0.0172413793103448
    },
    {
        "source": "2512",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "2521",
        "target": "3319",
        "value": 0.0526315789473684
    },
    {
        "source": "2530",
        "target": "8219",
        "value": 0.03125
    },
    {
        "source": "2540",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "2550",
        "target": "4222",
        "value": 0.03125
    },
    {
        "source": "2561",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "2562",
        "target": "7912",
        "value": 0.0294117647058824
    },
    {
        "source": "2572",
        "target": "8553",
        "value": 0.0169491525423729
    },
    {
        "source": "2573",
        "target": "4120",
        "value": 0.0204081632653061
    },
    {
        "source": "2591",
        "target": "3530",
        "value": 0.0277777777777778
    },
    {
        "source": "2592",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "2593",
        "target": "4774",
        "value": 0.05
    },
    {
        "source": "2594",
        "target": "3530",
        "value": 0.0277777777777778
    },
    {
        "source": "2611",
        "target": "3513",
        "value": 0.0166666666666667
    },
    {
        "source": "2612",
        "target": "4120",
        "value": 0.0204081632653061
    },
    {
        "source": "2620",
        "target": "4221",
        "value": 0.0169491525423729
    },
    {
        "source": "2630",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "2651",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "2652",
        "target": "3522",
        "value": 0.0204081632653061
    },
    {
        "source": "2652",
        "target": "5629",
        "value": 0.0217391304347826
    },
    {
        "source": "2660",
        "target": "5630",
        "value": 0.04
    },
    {
        "source": "2680",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "2711",
        "target": "8219",
        "value": 0.0625
    },
    {
        "source": "2712",
        "target": "3600",
        "value": 0.0344827586206897
    },
    {
        "source": "2720",
        "target": "5813",
        "value": 0.0285714285714286
    },
    {
        "source": "2732",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "2733",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "2740",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "2751",
        "target": "8610",
        "value": 0.0227272727272727
    },
    {
        "source": "2752",
        "target": "3812",
        "value": 0.04
    },
    {
        "source": "2790",
        "target": "8690",
        "value": 0.0217391304347826
    },
    {
        "source": "2811",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "2812",
        "target": "4120",
        "value": 0.0204081632653061
    },
    {
        "source": "2813",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "2815",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "2821",
        "target": "4639",
        "value": 0.0303030303030303
    },
    {
        "source": "2822",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "2824",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "2825",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "2841",
        "target": "8730",
        "value": 0.0222222222222222
    },
    {
        "source": "2849",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "2891",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "2892",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "2893",
        "target": "5221",
        "value": 0.0294117647058824
    },
    {
        "source": "2894",
        "target": "8610",
        "value": 0.0227272727272727
    },
    {
        "source": "2895",
        "target": "4120",
        "value": 0.0204081632653061
    },
    {
        "source": "2896",
        "target": "4773",
        "value": 0.0169491525423729
    },
    {
        "source": "2899",
        "target": "4639",
        "value": 0.0303030303030303
    },
    {
        "source": "2931",
        "target": "8899",
        "value": 0.0208333333333333
    },
    {
        "source": "2932",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "3011",
        "target": "3513",
        "value": 0.0166666666666667
    },
    {
        "source": "3012",
        "target": "4661",
        "value": 0.0208333333333333
    },
    {
        "source": "3030",
        "target": "4773",
        "value": 0.0169491525423729
    },
    {
        "source": "3040",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "3091",
        "target": "8121",
        "value": 0.0232558139534884
    },
    {
        "source": "3092",
        "target": "8219",
        "value": 0.03125
    },
    {
        "source": "3099",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "3101",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "3103",
        "target": "8211",
        "value": 0.0263157894736842
    },
    {
        "source": "3109",
        "target": "9102",
        "value": 0.037037037037037
    },
    {
        "source": "3211",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "3212",
        "target": "4291",
        "value": 0.0188679245283019
    },
    {
        "source": "3213",
        "target": "5629",
        "value": 0.0217391304347826
    },
    {
        "source": "3220",
        "target": "8520",
        "value": 0.032258064516129
    },
    {
        "source": "3230",
        "target": "4671",
        "value": 0.0333333333333333
    },
    {
        "source": "3240",
        "target": "4721",
        "value": 0.0212765957446809
    },
    {
        "source": "3250",
        "target": "8690",
        "value": 0.0434782608695652
    },
    {
        "source": "3291",
        "target": "4211",
        "value": 0.0185185185185185
    },
    {
        "source": "3299",
        "target": "4723",
        "value": 0.037037037037037
    },
    {
        "source": "3312",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "3315",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "3316",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "3320",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "3511",
        "target": "9004",
        "value": 0.0238095238095238
    },
    {
        "source": "3512",
        "target": "3900",
        "value": 0.0285714285714286
    },
    {
        "source": "3512",
        "target": "4612",
        "value": 0.0285714285714286
    },
    {
        "source": "3512",
        "target": "9002",
        "value": 0.0285714285714286
    },
    {
        "source": "3513",
        "target": "4641",
        "value": 0.0166666666666667
    },
    {
        "source": "3513",
        "target": "4645",
        "value": 0.0166666666666667
    },
    {
        "source": "3513",
        "target": "5010",
        "value": 0.0166666666666667
    },
    {
        "source": "3513",
        "target": "6831",
        "value": 0.0166666666666667
    },
    {
        "source": "3513",
        "target": "7810",
        "value": 0.0166666666666667
    },
    {
        "source": "3521",
        "target": "4110",
        "value": 0.05
    },
    {
        "source": "3522",
        "target": "4647",
        "value": 0.0204081632653061
    },
    {
        "source": "3522",
        "target": "8030",
        "value": 0.0204081632653061
    },
    {
        "source": "3523",
        "target": "4644",
        "value": 0.04
    },
    {
        "source": "3821",
        "target": "4675",
        "value": 0.0222222222222222
    },
    {
        "source": "3821",
        "target": "5829",
        "value": 0.0222222222222222
    },
    {
        "source": "3821",
        "target": "6209",
        "value": 0.0222222222222222
    },
    {
        "source": "4110",
        "target": "8710",
        "value": 0.05
    },
    {
        "source": "4120",
        "target": "4672",
        "value": 0.0204081632653061
    },
    {
        "source": "4211",
        "target": "6202",
        "value": 0.0185185185185185
    },
    {
        "source": "4211",
        "target": "7722",
        "value": 0.0185185185185185
    },
    {
        "source": "4212",
        "target": "9329",
        "value": 0.037037037037037
    },
    {
        "source": "4213",
        "target": "8623",
        "value": 0.0476190476190476
    },
    {
        "source": "4213",
        "target": "4631",
        "value": 0.05
    },
    {
        "source": "4213",
        "target": "7739",
        "value": 0.05
    },
    {
        "source": "4213",
        "target": "8020",
        "value": 0.05
    },
    {
        "source": "4221",
        "target": "4662",
        "value": 0.0169491525423729
    },
    {
        "source": "4291",
        "target": "4616",
        "value": 0.0188679245283019
    },
    {
        "source": "4291",
        "target": "4664",
        "value": 0.0188679245283019
    },
    {
        "source": "4299",
        "target": "5320",
        "value": 0.04
    },
    {
        "source": "4311",
        "target": "6820",
        "value": 0.0476190476190476
    },
    {
        "source": "4331",
        "target": "7112",
        "value": 0.0476190476190476
    },
    {
        "source": "4333",
        "target": "7731",
        "value": 0.0434782608695652
    },
    {
        "source": "4333",
        "target": "9003",
        "value": 0.0434782608695652
    },
    {
        "source": "4391",
        "target": "6010",
        "value": 0.0416666666666667
    },
    {
        "source": "4399",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "4531",
        "target": "4939",
        "value": 0.027027027027027
    },
    {
        "source": "4532",
        "target": "7830",
        "value": 0.04
    },
    {
        "source": "4614",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "4618",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "4619",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "4621",
        "target": "5814",
        "value": 0.025
    },
    {
        "source": "4624",
        "target": "4742",
        "value": 0.0512820512820513
    },
    {
        "source": "4634",
        "target": "9101",
        "value": 0.0540540540540541
    },
    {
        "source": "4643",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "4648",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "4649",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "4651",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "4652",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "4661",
        "target": "5030",
        "value": 0.0208333333333333
    },
    {
        "source": "4661",
        "target": "6399",
        "value": 0.0208333333333333
    },
    {
        "source": "4666",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "4671",
        "target": "6120",
        "value": 0.0333333333333333
    },
    {
        "source": "4676",
        "target": "4730",
        "value": 0.0153846153846154
    },
    {
        "source": "4690",
        "target": "5629",
        "value": 0.0217391304347826
    },
    {
        "source": "4711",
        "target": "5020",
        "value": 0.0188679245283019
    },
    {
        "source": "4711",
        "target": "5122",
        "value": 0.0188679245283019
    },
    {
        "source": "4730",
        "target": "5121",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "5821",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "5912",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "6020",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "6201",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "6312",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "7211",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "7734",
        "value": 0.0153846153846154
    },
    {
        "source": "4730",
        "target": "8230",
        "value": 0.0153846153846154
    },
    {
        "source": "4741",
        "target": "7731",
        "value": 0.0526315789473684
    },
    {
        "source": "4753",
        "target": "4910",
        "value": 0.0285714285714286
    },
    {
        "source": "4773",
        "target": "6190",
        "value": 0.0169491525423729
    },
    {
        "source": "4789",
        "target": "7490",
        "value": 0.0303030303030303
    },
    {
        "source": "4791",
        "target": "8532",
        "value": 0.0204081632653061
    },
    {
        "source": "4932",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "4950",
        "target": "9104",
        "value": 0.0416666666666667
    },
    {
        "source": "5110",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "5222",
        "target": "8690",
        "value": 0.0217391304347826
    },
    {
        "source": "5223",
        "target": "5590",
        "value": 0.0161290322580645
    },
    {
        "source": "5224",
        "target": "8291",
        "value": 0.0476190476190476
    },
    {
        "source": "5590",
        "target": "5812",
        "value": 0.0161290322580645
    },
    {
        "source": "5590",
        "target": "7410",
        "value": 0.0161290322580645
    },
    {
        "source": "5629",
        "target": "5911",
        "value": 0.0217391304347826
    },
    {
        "source": "5630",
        "target": "5819",
        "value": 0.04
    },
    {
        "source": "5811",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "5913",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "5920",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "6810",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "6832",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "6920",
        "target": "8122",
        "value": 0.0454545454545455
    },
    {
        "source": "7010",
        "target": "8690",
        "value": 0.0217391304347826
    },
    {
        "source": "7120",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "7219",
        "target": "8810",
        "value": 0.0217391304347826
    },
    {
        "source": "7311",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "7312",
        "target": "8560",
        "value": 0.025
    },
    {
        "source": "7430",
        "target": "8553",
        "value": 0.0169491525423729
    },
    {
        "source": "7740",
        "target": "8790",
        "value": 0.0169491525423729
    },
    {
        "source": "7820",
        "target": "9101",
        "value": 0.027027027027027
    },
    {
        "source": "7830",
        "target": "9603",
        "value": 0.0526315789473684
    },
    {
        "source": "7990",
        "target": "8219",
        "value": 0.03125
    },
    {
        "source": "8291",
        "target": "9604",
        "value": 0.0476190476190476
    },
    {
        "source": "8299",
        "target": "9524",
        "value": 0.0434782608695652
    },
    {
        "source": "8541",
        "target": "9319",
        "value": 0.0526315789473684
    },
    {
        "source": "8720",
        "target": "9001",
        "value": 0.0196078431372549
    },
    {
        "source": "8899",
        "target": "9511",
        "value": 0.0208333333333333
    }
]
};
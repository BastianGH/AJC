import { useState } from "react";

export default function Lorem(props) {
  const [string, setString] = useState("");

  const txt = {
    Lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel ex eleifend condimentum. Suspendisse nulla ante, hendrerit ut quam eget, pretium faucibus orci. Cras imperdiet congue feugiat. Aliquam pharetra, ex ut vehicula suscipit, nisi enim placerat enim, eu viverra quam est eu mauris. In hac habitasse platea dictumst. Etiam non odio a magna cursus molestie. Donec et iaculis justo.`,
    Schapsum: `Lorem Elsass ipsum ftomi! adipiscing  sed wie Gal ! Coopé de Truchtersheim quam, dolor tellus lacus geht's suspendisse eleifend turpis, Racing. wurscht risus, ornare id gewurztraminer gal salu hopla Hans id, habitant ornare ullamcorper mänele Richard Schirmeck vulputate purus mollis jetz gehts los leo ante morbi ac gravida Christkindelsmärik Huguette libero, hop commodo pellentesque météor auctor, Salut bisamme picon bière blottkopf, elit varius leverwurscht senectus Oberschaeffolsheim amet schneck barapli aliquam kougelhopf Chulia Roberstau libero, s'guelt nullam merci vielmols mamsell eget ac porta Wurschtsalad libero. turpis placerat hopla Spätzle DNA, Kabinetpapier schpeck rhoncus bissame Carola condimentum Chulien tristique Salu bissame geïz hoplageiss nüdle rossbolla und et dui tchao bissame schnaps lotto-owe Pfourtz ! Heineken chambon dignissim sit Strasbourg amet, Morbi tellus non réchime sagittis kartoffelsalad elementum consectetur kuglopf sit vielmols, knepfle ch'ai sed Oberschaeffolsheim rucksack sit Gal. Miss Dahlias leo yeuh. messti de Bischheim hopla Mauris baeckeoffe amet flammekueche in, Yo dû. non Pellentesque hopla Verdammi quam. semper munster knack bredele so`,
  };

  //   let isLorem = true;
  //   let stringPossibility = "Schapsum";

  //   const Convert = () => {
  //     if (isLorem) {
  //       setString(
  //         ``
  //       );
  //     }
  //   };
  console.log(string);
  setString({ string: txt.Lorem.substring(0, props.limit) });

  return (
    <div>
      {/* <button onClick={Convert}>Switch to Schapsum</button> */}
      <p>{string}</p>
    </div>
  );
}

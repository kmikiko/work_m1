// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {
    // 審査員の点数（入力値）を取得して合計点と平均点を出すロジック
    function score_indicate() {
      // 変数「evaluation_points」に評価点の配列を代入します。
      // 評価点をNumberで数値に置き換える。
      // 各審査員の評価点として入力された値を.valで取得する。
      let evaluation_points = [Number($('#downtown').val()),
      Number($('#jinnai').val()),
      Number($('#shidara').val()),
      Number($('#hikorohi').val()),
      Number($('#shiraku').val())
      ];
      // 変数「sum」に評価点の配列を足します。
      // 配列のインデックスをiとおいて、iを0と定義する。
      // iを１つずつ増やしてsumに足すことを配列の要素数繰り返す。
      let sum = 0;
      for (let i = 0; i < evaluation_points.length; i++){
        sum = sum + evaluation_points[i];
      }
      // 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
      $("#sum_indicate").text(sum);
  
      // 「平均点：」に各審査員の平均点を出力する処理を記述する。
      let average = sum / evaluation_points.length;
      $("#average_indicate").text(average);
      
    };
    // 平均点数を取得し、取得した平均点数から評価が表示されるロジックを記述する。
    function get_achievement() {
      // 変数「averageIndicate」に
      // 平均点数をHTML上のid="average_indicate"から取得して代入します。
      let averageIndicate = $("#average_indicate").text();
      console.log(averageIndicate);
      // もし「averageIndicate」が90以上なら"バカウケ！！！"を返します。
      if (averageIndicate >= 90) {
        return "バカウケ！！！";
      }
      // もし「averageIndicate」が75以上なら"ややウケ"を返します。
      else if(averageIndicate >= 75) {
        return "ややウケ";
      }
      // もし「averageIndicate」が30以上なら"あともうひと笑い"を返します。
      else if(averageIndicate >= 30) {
        return "あともうひと笑い";
      }
      // もし「averageIndicate」がそれ以外なら"また来年！"を返します。
      else{
        return "また来年！";
      }
    };

    $('#downtown, #jinnai, #shidara, #hikorohi, #shiraku').change(function () {
      score_indicate();
    });
    $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
    });
    
  });
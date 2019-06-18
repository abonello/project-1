var app = angular.module("app", []);

app.controller("ctrl", [
  "$scope",
  function($scope) {
    // $scope.data = [
    //     {
    //         composer: "Puccini",
    //         pieces: [
    //             {
    //                 name: "O mio babbino caro",
    //                 info: "from Gianni Schicchi",
    //                 parts: [
    //                     {
    //                         part: "Score",
    //                         fileName: "OMBC_scoreTitle.pdf",
    //                         image: "OMBC_ScoreTitle.png"
    //                     },
    //                     {
    //                         part: "Vocal Part",
    //                         fileName: "OMBC_Lauretta.pdf",
    //                         image: "OMBC_Lauretta.png"
    //                     },
    //                     {
    //                         part: "Flute 1",
    //                         fileName: "OMBC_Flute1.pdf",
    //                         image: "OMBC_Flute1.png"
    //                     },
    //                     {
    //                         part: "Oboe 1",
    //                         fileName: "OMBC_Oboe1.pdf",
    //                         image: "OMBC_Oboe1.png"
    //                     },
    //                     {
    //                         part: "Cor Anglais",
    //                         fileName: "OMBC_CorAnglais.pdf",
    //                         image: "OMBC_CorAnglais.png"
    //                     },
    //                     {
    //                         part: "Clarinet 1",
    //                         fileName: "OMBC_Clarinet1.pdf",
    //                         image: "OMBC_Clarinet1.png"
    //                     },
    //                     {
    //                         part: "Clarinet 2",
    //                         fileName: "OMBC_Clarinet2.pdf",
    //                         image: "OMBC_Clarinet2.png"
    //                     },
    //                     {
    //                         part: "Bass Clarinet",
    //                         fileName: "OMBC_BassClarinet.pdf",
    //                         image: "OMBC_BassClarinet.png"
    //                     },
    //                     {
    //                         part: "Bassoon 1",
    //                         fileName: "OMBC_Bassoon1.pdf",
    //                         image: "OMBC_Bassoon1.png"
    //                     },
    //                     {
    //                         part: "Bassoon 2",
    //                         fileName: "OMBC_Bassoon2.pdf",
    //                         image: "OMBC_Bassoon2.png"
    //                     },
    //                     {
    //                         part: "French Horn 1",
    //                         fileName: "OMBC_Horn1.pdf",
    //                         image: "OMBC_Horn1.png"
    //                     },
    //                     {
    //                         part: "French Horn 2",
    //                         fileName: "OMBC_Horn2.pdf",
    //                         image: "OMBC_Horn2.png"
    //                     },
    //                     {
    //                         part: "Harp",
    //                         fileName: "OMBC_Bassoon2.pdf",
    //                         image: "OMBC_Bassoon2.png"
    //                     },
    //                     {
    //                         part: "Violin 1",
    //                         fileName: "OMBC_Violin1.pdf",
    //                         image: "OMBC_Violin1.png"
    //                     },
    //                     {
    //                         part: "Violin 2",
    //                         fileName: "OMBC_Violin2.pdf",
    //                         image: "OMBC_Violin2.png"
    //                     },
    //                     {
    //                         part: "Viola",
    //                         fileName: "OMBC_Viola.pdf",
    //                         image: "OMBC_Viola.png"
    //                     },
    //                     {
    //                         part: "Violoncello",
    //                         fileName: "OMBC_Violoncello.pdf",
    //                         image: "OMBC_Violoncello.png"
    //                     },
    //                     {
    //                         part: "Double Bass",
    //                         fileName: "OMBC_DoubleBass.pdf",
    //                         image: "OMBC_DoubleBass.png"
    //                     }
    //                 ]
    //             }
    //             // {
    //             //   name: "",
    //             //   parts: [
    //             //     {
    //             //       part: "",
    //             //       fileName: "",
    //             //       image: ""
    //             //     }
    //             //   ]
    //             // }
    //         ]
    //     },
    //     {
    //         composer: "Mozart",
    //         pieces: [
    //             {
    //                 name: "Che soave zeffiretto",
    //                 info: "from Marriage of Figaro",
    //                 parts: [
    //                     {
    //                         part: "Score",
    //                         fileName: "SZ_Score.pdf",
    //                         image: "SZ_Score.png"
    //                     },
    //                     {
    //                         part: "Oboe 1",
    //                         fileName: "SZ_Oboe1.pdf",
    //                         image: "SZ_Oboe1.png"
    //                     },
    //                     {
    //                         part: "Bassoon 1",
    //                         fileName: "SZ_Bassoon1.pdf",
    //                         image: "SZ_Bassoon1.png"
    //                     },
    //                     {
    //                         part: "Violin 1",
    //                         fileName: "SZ_Violin1.pdf",
    //                         image: "SZ_Violin1.png"
    //                     },
    //                     {
    //                         part: "Violin 2",
    //                         fileName: "SZ_Violin2.pdf",
    //                         image: "SZ_Violin2.png"
    //                     },
    //                     {
    //                         part: "Viola",
    //                         fileName: "SZ_Viola.pdf",
    //                         image: "SZ_Viola.png"
    //                     },
    //                     {
    //                         part: "Cello / Double Bass",
    //                         fileName: "SZ_Cello_DB.pdf",
    //                         image: "SZ_Cello_DB.png"
    //                     }
    //                 ]
    //             }
    //             // {
    //             //   name: "",
    //             //   parts: [
    //             //     {
    //             //       part: "",
    //             //       fileName: "",
    //             //       image: ""
    //             //     },
    //             //   ]
    //             // },
    //         ]
    //     }
    // ];

    $.getJSON("../assets/data/info.json", function(data) {
      //   $scope.data = data;
      //   Make sure $scope.data is ready to populate options in html
      $scope.$apply(function() {
        $scope.data = data;
      });
      //   OR
      // $scope.data = data;
      // $scope.$apply();
      $scope.selectedComposer = "";
      $scope.selectedPiece = "";
      $scope.thisComposerPieces = "";
      $scope.selectedPart = "";
      $scope.listOfPieces = [];
      $scope.listOfParts = [];
      $scope.partSelected = "";
      $scope.selectedPieceInfo = "";
    }).then(function() {
      //   console.log($scope.data);
      $scope.selectedComposerChanged = function() {
        $scope.listOfPieces = [];
        $scope.selectedPiece = "";
        $scope.listOfParts = [];
        $scope.partSelected = "";
        $scope.selectedPieceInfo = "";
        $scope.data.forEach(element => {
          if (element.composer === $scope.selectedComposer) {
            element.pieces.forEach(piece => {
              $scope.listOfPieces.push(piece.name);
            });
          }
        });
      };
      $scope.selectedPieceChanged = function(e) {
        var thisPiece = e;
        $scope.selectedPiece = e;
        $scope.listOfParts = [];
        $scope.data.forEach(element => {
          element.pieces.forEach(piece => {
            // console.log(piece.name);
            if (piece.name === thisPiece) {
              $scope.selectedPieceInfo = piece.info;
              piece.parts.forEach(part => {
                $scope.listOfParts.push(part);
              });
            }
          });
        });
        $scope.selectedPartChanged = function(e) {
          var thisPart = e;
          $scope.partSelected = e;
        };
      };
    });
  }
]);

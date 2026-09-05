var app = angular.module("app", []);

app.controller("ctrl", [
  "$scope",
  function ($scope) {
    $scope.data = [
      {
        composer: "Puccini",
        pieces: [
          {
            name: "O mio babbino caro",
            info: "from Gianni Schicchi",
            parts: [
              //  {
              //   part: "Score",
              //   fileName: "OMBC_scoreTitle.pdf",
              //   image: "OMBC_ScoreTitle.png"
              //  },
              {
                part: "Vocal Part",
                fileName: "OMBC_Lauretta.pdf",
                image: "OMBC_Lauretta.png"
              },
              {
                part: "Flute 1",
                fileName: "OMBC_Flute1.pdf",
                image: "OMBC_Flute1.png"
              },
              {
                part: "Oboe 1",
                fileName: "OMBC_Oboe1.pdf",
                image: "OMBC_Oboe1.png"
              },
              {
                part: "Cor Anglais",
                fileName: "OMBC_CorAnglais.pdf",
                image: "OMBC_CorAnglais.png"
              },
              {
                part: "Clarinet 1",
                fileName: "OMBC_Clarinet1.pdf",
                image: "OMBC_Clarinet1.png"
              },
              {
                part: "Clarinet 2",
                fileName: "OMBC_Clarinet2.pdf",
                image: "OMBC_Clarinet2.png"
              },
              {
                part: "Bass Clarinet",
                fileName: "OMBC_BassClarinet.pdf",
                image: "OMBC_BassClarinet.png"
              },
              {
                part: "Bassoon 1",
                fileName: "OMBC_Bassoon1.pdf",
                image: "OMBC_Bassoon1.png"
              },
              {
                part: "Bassoon 2",
                fileName: "OMBC_Bassoon2.pdf",
                image: "OMBC_Bassoon2.png"
              },
              {
                part: "French Horn 1",
                fileName: "OMBC_Horn1.pdf",
                image: "OMBC_Horn1.png"
              },
              {
                part: "French Horn 2",
                fileName: "OMBC_Horn2.pdf",
                image: "OMBC_Horn2.png"
              },
              {
                part: "Trumpets Bb",
                fileName: "OMBC_TrumpetBb.pdf",
                image: "OMBC_TrumpetBb.png"
              },
              {
                part: "Trombones",
                fileName: "OMBC_Trombone.pdf",
                image: "OMBC_Trombone.png"
              },
              {
                part: "Harp",
                fileName: "OMBC_Bassoon2.pdf",
                image: "OMBC_Bassoon2.png"
              },
              {
                part: "Violin 1",
                fileName: "OMBC_Violin1.pdf",
                image: "OMBC_Violin1.png"
              },
              {
                part: "Violin 2",
                fileName: "OMBC_Violin2.pdf",
                image: "OMBC_Violin2.png"
              },
              {
                part: "Viola",
                fileName: "OMBC_Viola.pdf",
                image: "OMBC_Viola.png"
              },
              {
                part: "Violoncello",
                fileName: "OMBC_Violoncello.pdf",
                image: "OMBC_Violoncello.png"
              },
              {
                part: "Double Bass",
                fileName: "OMBC_DoubleBass.pdf",
                image: "OMBC_DoubleBass.png"
              }
            ]
          },
          {
            name: "Quando men vo",
            info: "from La Boheme",
            parts: [
              {
                part: "Flute 1",
                fileName: "PBQMV-flute-01.pdf",
                image: "PBQMV-Flute-01.png"
              },
              {
                part: "Flute 2",
                fileName: "PBQMV-flute-02.pdf",
                image: "PBQMV-Flute-02.png"
              },
              {
                part: "Oboe 1",
                fileName: "PBQMV-oboe-01.pdf",
                image: "PBQMV-Oboe-01.png"
              },
              {
                part: "Oboe 2",
                fileName: "PBQMV-oboe-02.pdf",
                image: "PBQMV-Oboe-02.png"
              },
              {
                part: "English Horn",
                fileName: "PBQMV-eh.pdf",
                image: "PBQMV-EH.png"
              },
              {
                part: "Clarinet in A 1",
                fileName: "PBQMV-clarinet-a-01.pdf",
                image: "PBQMV-Clarinet-A-01.png"
              },
              {
                part: "Clarinet in A 2",
                fileName: "PBQMV-clarinet-a-02.pdf",
                image: "PBQMV-Clarinet-A-02.png"
              },
              {
                part: "Bass Clarinet in A",
                fileName: "PBQMV-bass-clarinet-a.pdf",
                image: "PBQMV-Bass-Clarinet-A.png"
              },
              {
                part: "Bassoon 1",
                fileName: "PBQMV-bassoon-01.pdf",
                image: "PBQMV-Bassoon-01.png"
              },
              {
                part: "Bassoon 2",
                fileName: "PBQMV-bassoon-02.pdf",
                image: "PBQMV-Bassoon-02.png"
              },
              {
                part: "Horn in F 1",
                fileName: "PBQMV-horn-f-01.pdf",
                image: "PBQMV-Horn-F-01.png"
              },
              {
                part: "Horn in F 2",
                fileName: "PBQMV-horn-f-02.pdf",
                image: "PBQMV-Horn-F-02.png"
              },
              {
                part: "Horn in F 3",
                fileName: "PBQMV-horn-f-03.pdf",
                image: "PBQMV-Horn-F-03.png"
              },
              {
                part: "Horn in F 4",
                fileName: "PBQMV-horn-f-04.pdf",
                image: "PBQMV-Horn-F-04.png"
              },
              {
                part: "Trumpet in Bflat 1",
                fileName: "PBQMV-trumpet-bb-01.pdf",
                image: "PBQMV-trumpet-bb-01.png"
              },
              {
                part: "Trumpet in Bflat 2",
                fileName: "PBQMV-trumpet-bb-02.pdf",
                image: "PBQMV-trumpet-bb-02.png"
              },
              {
                part: "Trombone 1",
                fileName: "PBQMV-trombone-01.pdf",
                image: "PBQMV-trombone-01.png"
              },
              {
                part: "Trombone 2",
                fileName: "PBQMV-trombone-02.pdf",
                image: "PBQMV-trombone-02.png"
              },
              {
                part: "Timpani",
                fileName: "PBQMV-timpani.pdf",
                image: "PBQMV-Timpani.png"
              },
              {
                part: "Harp",
                fileName: "PBQMV-harp.pdf",
                image: "PBQMV-Harp.png"
              },
              {
                part: "Violin 1",
                fileName: "PBQMV-violin-01.pdf",
                image: "PBQMV-Violin-01.png"
              },
              {
                part: "Violin 2",
                fileName: "PBQMV-violin-02.pdf",
                image: "PBQMV-Violin-02.png"
              },
              {
                part: "Viola",
                fileName: "PBQMV-viola.pdf",
                image: "PBQMV-Viola.png"
              },
              {
                part: "Cello / Double Bass",
                fileName: "PBQMV-cello-db.pdf",
                image: "PBQMV-Cello-DB.png"
              },
            ]
          },
          {
            name: "Mi chiamano Mimi",
            info: "from La Boheme",
            parts: [
              {
                part: "Flute 1",
                fileName: "PBMCM-flute-01.pdf",
                image: "PBMCM-flute-01.png"
              },
              {
                part: "Flute 2",
                fileName: "PBMCM-flute-02.pdf",
                image: "PBMCM-flute-02.png"
              },
              {
                part: "Oboe 1",
                fileName: "PBMCM-oboe-01.pdf",
                image: "PBMCM-oboe-01.png"
              },
              {
                part: "Oboe 2",
                fileName: "PBMCM-oboe-02.pdf",
                image: "PBMCM-oboe-02.png"
              },
              {
                part: "English Horn",
                fileName: "PBMCM-eh.pdf",
                image: "PBMCM-eh.png"
              },
              {
                part: "Clarinet 1 in A",
                fileName: "PBMCM-clarinet-a-01.pdf",
                image: "PBMCM-clarinet-a-01.png"
              },
              {
                part: "Clarinet 2 in A",
                fileName: "PBMCM-clarinet-a-02.pdf",
                image: "PBMCM-clarinet-a-02.png"
              },
              {
                part: "Bassoon 1",
                fileName: "PBMCM-bassoon-01.pdf",
                image: "PBMCM-bassoon-01.png"
              },
              {
                part: "Bassoon 2",
                fileName: "PBMCM-bassoon-02.pdf",
                image: "PBMCM-bassoon-02.png"
              },
              {
                part: "Horn 1 in F",
                fileName: "PBMCM-horn-f-01.pdf",
                image: "PBMCM-horn-f-01.png"
              },
              {
                part: "Horn 2 in F",
                fileName: "PBMCM-horn-f-02.pdf",
                image: "PBMCM-horn-f-02.png"
              },
              {
                part: "Violin 1",
                fileName: "PBMCM-violin-01.pdf",
                image: "PBMCM-violin-01.png"
              },
              {
                part: "Violin 2",
                fileName: "PBMCM-violin-02.pdf",
                image: "PBMCM-violin-02.png"
              },
              {
                part: "Viola",
                fileName: "PBMCM-viola.pdf",
                image: "PBMCM-viola.png"
              },
              {
                part: "Cello / D.Bass",
                fileName: "PBMCM-cello-dbass.pdf",
                image: "PBMCM-cello-dbass.png"
              },
            ],
          },
        ]
      },
      {
        composer: "Mozart",
        pieces: [
          {
            name: "Symphony No.40 in G minor",
            info: "",
            parts: [

              {
                part: "Flute",
                fileName: "MS40-Flute.pdf",
                image: "MS40-Flute.png"
              },
              {
                part: "Oboe 1",
                fileName: "MS40-Oboe01.pdf",
                image: "MS40-Oboe01.png"
              },
              {
                part: "Oboe 2",
                fileName: "MS40-Oboe02.pdf",
                image: "MS40-Oboe02.png"
              },
              {
                part: "Clarinet 1 in B flat",
                fileName: "MS40-Clarinet01.pdf",
                image: "MS40-Clarinet01.png"
              },
              {
                part: "Clarinet 2 in B flat",
                fileName: "MS40-Clarinet02.pdf",
                image: "MS40-Clarinet02.png"
              },
              {
                part: "Bassoon 1",
                fileName: "MS40-Bassoon01.pdf",
                image: "MS40-Bassoon01.png"
              },
              {
                part: "Bassoon 2",
                fileName: "MS40-Bassoon02.pdf",
                image: "MS40-Bassoon02.png"
              },
              {
                part: "Horn 1",
                fileName: "MS40-Horn01.pdf",
                image: "MS40-Horn01.png"
              },
              {
                part: "Horn 2",
                fileName: "MS40-Horn02.pdf",
                image: "MS40-Horn02.png"
              },
              {
                part: "Trumpet",
                fileName: "MS40-Trumpet.pdf",
                image: "MS40-Trumpet.png"
              },
              {
                part: "Trombone 1",
                fileName: "MS40-trombone01.pdf",
                image: "MS40-Trumpet.png"
              },
              {
                part: "Trombone 2",
                fileName: "MS40-trombone02.pdf",
                image: "MS40-Trumpet.png"
              },
              {
                part: "Violin 1",
                fileName: "MS40-Violin01.pdf",
                image: "MS40-Violin01.png"
              },
              {
                part: "Violin 2",
                fileName: "MS40-Violin02.pdf",
                image: "MS40-Violin02.png"
              },
              {
                part: "Viola",
                fileName: "MS40-Viola.pdf",
                image: "MS40-Viola.png"
              },
              {
                part: "Cello and DBass",
                fileName: "MS40-Cello-DB.pdf",
                image: "MS40-Cello-DB.png"
              },
            ]
          },
          {
            name: "Che soave zeffiretto",
            info: "from Marriage of Figaro",
            parts: [
              {
                part: "Oboe 1",
                fileName: "SZ_Oboe1.pdf",
                image: "SZ_Oboe1.png"
              },
              {
                part: "Bassoon 1",
                fileName: "SZ_Bassoon1.pdf",
                image: "SZ_Bassoon1.png"
              },
              {
                part: "Violin 1",
                fileName: "SZ_Violin1.pdf",
                image: "SZ_Violin1.png"
              },
              {
                part: "Violin 2",
                fileName: "SZ_Violin2.pdf",
                image: "SZ_Violin2.png"
              },
              {
                part: "Viola",
                fileName: "SZ_Viola.pdf",
                image: "SZ_Viola.png"
              },
              {
                part: "Cello / Double Bass",
                fileName: "SZ_Cello_DB.pdf",
                image: "SZ_Cello_DB.png"
              }
            ]
          },
          {
            name: "Voi che sapete",
            info: "from Marriage of Figaro",
            parts: [
              {
                part: "Flute",
                fileName: "VoiCheSapete-Flute1.pdf",
                image: "VoiCheSapete-Flute1.png"
              },
              {
                part: "Oboe",
                fileName: "VoiCheSapete-Oboe1.pdf",
                image: "VoiCheSapete-Oboe1.png"
              },
              {
                part: "Clarinet",
                fileName: "VoiCheSapete-Clarinet1.pdf",
                image: "VoiCheSapete-Clarinet1.png"
              },
              {
                part: "Bassoon",
                fileName: "VoiCheSapete-Bassoon1.pdf",
                image: "VoiCheSapete-Bassoon1.png"
              },
              {
                part: "Horn 1 Eflat",
                fileName: "VoiCheSapete-Horn1Eb.pdf",
                image: "VoiCheSapete-Horn1Eb.png"
              },
              {
                part: "Horn 2 Eflat",
                fileName: "VoiCheSapete-Horn2Eb.pdf",
                image: "VoiCheSapete-Horn2Eb.png"
              },
              {
                part: "Soprano",
                fileName: "VoiCheSapete-Soprano.pdf",
                image: "VoiCheSapete-Soprano.png"
              },
              {
                part: "Violin 1",
                fileName: "VoiCheSapete-Violin1.pdf",
                image: "VoiCheSapete-Violin1.png"
              },
              {
                part: "Violin 2",
                fileName: "VoiCheSapete-Violin2.pdf",
                image: "VoiCheSapete-Violin2.png"
              },
              {
                part: "Viola",
                fileName: "VoiCheSapete-Viola.pdf",
                image: "VoiCheSapete-Viola.png"
              },
              {
                part: "Cello / Double Bass",
                fileName: "VoiCheSapete-Cello.pdf",
                image: "VoiCheSapete-Cello.png"
              }
            ]
          }
        ]
      },
      {
        composer: "Haydn",
        pieces: [
          {
            name: "Symphony 104 in D major",
            info: "last of London Symphonies",
            parts: [
              {
                part: "Flute 1",
                fileName: "HS104-Flute01.pdf",
                image: "HS104-Flute01.png"
              },
              {
                part: "Flute 2",
                fileName: "HS104-Flute02.pdf",
                image: "HS104-Flute02.png"
              },
              {
                part: "Oboe 1",
                fileName: "HS104-Oboe01.pdf",
                image: "HS104-Oboe01.png"
              },
              {
                part: "Oboe 2",
                fileName: "HS104-Oboe02.pdf",
                image: "HS104-Oboe02.png"
              },
              {
                part: "Clarinet 1 in A",
                fileName: "HS104-Clarinet-A-01.pdf",
                image: "HS104-Clarinet-A-01.png"
              },
              {
                part: "Clarinet 1 in B flat",
                fileName: "HS104-Clarinet-Bflat-01.pdf",
                image: "HS104-Clarinet-Bflat-01.png"
              },
              {
                part: "Clarinet 2 in A",
                fileName: "HS104-Clarinet-A-02.pdf",
                image: "HS104-Clarinet-A-02.png"
              },
              {
                part: "Clarinet 2 in B flat",
                fileName: "HS104-Clarinet-Bflat-02.pdf",
                image: "HS104-Clarinet-Bflat-02.png"
              },
              {
                part: "Bassoon 1",
                fileName: "HS104-Bassoon01.pdf",
                image: "HS104-Bassoon01.png"
              },
              {
                part: "Bassoon 2",
                fileName: "HS104-Bassoon02.pdf",
                image: "HS104-Bassoon02.png"
              },
              {
                part: "Horn 1 in D/G",
                fileName: "HS104-Horn-DG-01.pdf",
                image: "HS104-Horn-DG-01.png"
              },
              {
                part: "Horn 1 in F",
                fileName: "HS104-Horn-F-01.pdf",
                image: "HS104-Horn-F-01.png"
              },
              {
                part: "Horn 2 in D/G",
                fileName: "HS104-Horn-DG-02.pdf",
                image: "HS104-Horn-DG-02.png"
              },
              {
                part: "Horn 2 in F",
                fileName: "HS104-Horn-F-02.pdf",
                image: "HS104-Horn-F-02.png"
              },
              {
                part: "Trumpet 1 in D",
                fileName: "HS104-Trumpet-D-01.pdf",
                image: "HS104-Trumpet-D-01.png"
              },
              {
                part: "Trumpet 2 in D",
                fileName: "HS104-Trumpet-D-02.pdf",
                image: "HS104-Trumpet-D-02.png"
              },
              {
                part: "Trombone 1",
                fileName: "HS104-Trombone01.pdf",
                image: "HS104-Trombone01.png"
              },
              {
                part: "Trombone 2",
                fileName: "HS104-Trombone02.pdf",
                image: "HS104-Trombone02.png"
              },
              {
                part: "Timpani",
                fileName: "HS104-Timpani.pdf",
                image: "HS104-Timpani.png"
              },
              {
                part: "Violin 1",
                fileName: "HS104-Violin01.pdf",
                image: "HS104-Violin01.png"
              },
              {
                part: "Violin 2",
                fileName: "HS104-Violin02.pdf",
                image: "HS104-Violin02.png"
              },
              {
                part: "Viola",
                fileName: "HS104-Viola.pdf",
                image: "HS104-Viola.png"
              },
              {
                part: "Violoncello (only)",
                fileName: "HS104-Cello.pdf",
                image: "HS104-Cello.png"
              },
              {
                part: "Violoncello and DBass",
                fileName: "HS104-Cello-Bass.pdf",
                image: "HS104-Cello-Bass.png"
              },
              {
                part: "Double Bass (only)",
                fileName: "HS104-Bass.pdf",
                image: "HS104-Bass.png"
              },

            ]
          }
        ]
      },
      {
        composer: "Adam",
        pieces: [
          {
            name: "O Holy Night",
            info: "Arrangement by Anthony Bonello",
            parts: [
              //   {
              //     part: "Score",
              //     fileName: "SZ_Score.pdf",
              //     image: "SZ_Score.png"
              //   },
              {
                part: "Flute",
                fileName: "OHNO-Flute.pdf",
                image: "OHNO-Flute.png"
              },
              {
                part: "Oboe",
                fileName: "OHNO-Oboe.pdf",
                image: "OHNO-Oboe.png"
              },
              {
                part: "Clarinet Bb",
                fileName: "OHNO-ClarinetBb.pdf",
                image: "OHNO-ClarinetBb.png"
              },
              {
                part: "Bassoon",
                fileName: "OHNO-Bassoon.pdf",
                image: "OHNO-Bassoon.png"
              },
              {
                part: "Horns in F",
                fileName: "OHNO-HornF.pdf",
                image: "OHNO-HornF.png"
              },
              {
                part: "Trumpets Bb",
                fileName: "OHNO-TrumpetBb.pdf",
                image: "OHNO-TrumpetBb.png"
              },
              {
                part: "Trombones",
                fileName: "OHNO-Trombone.pdf",
                image: "OHNO-Trombone.png"
              },
              {
                part: "Timpani",
                fileName: "OHNO-Timpani.pdf",
                image: "OHNO-Timpani.png"
              },
              {
                part: "Voices",
                fileName: "OHNO-Voices.pdf",
                image: "OHNO-Voices.png"
              },
              {
                part: "Piano",
                fileName: "OHNO-Piano.pdf",
                image: "OHNO-Piano.png"
              },
              {
                part: "Violin 1",
                fileName: "OHNO-Violin1.pdf",
                image: "OHNO-Violin1.png"
              },
              {
                part: "Violin 2",
                fileName: "OHNO-Violin2.pdf",
                image: "OHNO-Violin2.png"
              },
              {
                part: "Viola",
                fileName: "OHNO-Viola.pdf",
                image: "OHNO-Viola.png"
              },
              {
                part: "Cello",
                fileName: "OHNO-Cello.pdf",
                image: "OHNO-Cello.png"
              },
              {
                part: "Double Bass",
                fileName: "OHNO-DoubleBass.pdf",
                image: "OHNO-DoubleBass.png"
              }
            ]
          },
        ],
      },
      {
        composer: "Bach",
        pieces: [
          {
            name: "Double Violin Concerto - Largo",
            info: "",
            parts: [
              {
                part: "Violin 1",
                fileName: "BDVC_Vln1Largo.pdf",
                image: "BDVC_Vln1.png"
              },
              {
                part: "Violin 2",
                fileName: "BDVC_Vln2Largo.pdf",
                image: "BDVC_Vln2.png"
              },
              {
                part: "Viola",
                fileName: "BDVC_VlaLargo.pdf",
                image: "BDVC_Vla.png"
              },
              {
                part: "Cello & DB",
                fileName: "BDVC_VcLargo.pdf",
                image: "BDVC_VcDb.png"
              }
            ]
          }
        ]
      },
      {
        composer: "Rachmaninoff",
        pieces: [
          {
            name: "Symphony No2 - mvt 3",
            info: "",
            parts: [
              {
                part: "Flute 1",
                fileName: "RS2M3-Flute01.pdf",
                image: "RS2M3-Flute01.png"
              },
              {
                part: "Flute 2",
                fileName: "RS2M3-Flute02.pdf",
                image: "RS2M3-Flute02.png"
              },
              {
                part: "Flute 3",
                fileName: "RS2M3-Flute03.pdf",
                image: "RS2M3-Flute03.png"
              },
              {
                part: "Oboe 1",
                fileName: "RS2M3-Oboe01.pdf",
                image: "RS2M3-Oboe01.png"
              },
              {
                part: "Oboe 2",
                fileName: "RS2M3-Oboe02.pdf",
                image: "RS2M3-Oboe02.png"
              },
              {
                part: "English Horn",
                fileName: "RS2M3-EH.pdf",
                image: "RS2M3-EH.png"
              },
              {
                part: "Clarinet 1",
                fileName: "RS2M3-Clarinet01.pdf",
                image: "RS2M3-Clarinet01.png"
              },
              {
                part: "Clarinet 2",
                fileName: "RS2M3-Clarinet02.pdf",
                image: "RS2M3-Clarinet02.png"
              },
              {
                part: "Bass Clarinet",
                fileName: "RS2M3-BassClarinet.pdf",
                image: "RS2M3-BassClarinet.png"
              },
              {
                part: "Bassoon 1",
                fileName: "RS2M3-Bassoon01.pdf",
                image: "RS2M3-Bassoon01.png"
              },
              {
                part: "Bassoon 2",
                fileName: "RS2M3-Bassoon02.pdf",
                image: "RS2M3-Bassoon02.png"
              },
              {
                part: "Horn 1",
                fileName: "RS2M3-Horn01.pdf",
                image: "RS2M3-Horn01.png"
              },
              {
                part: "Horn 2",
                fileName: "RS2M3-Horn02.pdf",
                image: "RS2M3-Horn02.png"
              },
              {
                part: "Horn 3",
                fileName: "RS2M3-Horn03.pdf",
                image: "RS2M3-Horn03.png"
              },
              {
                part: "Horn 4",
                fileName: "RS2M3-Horn04.pdf",
                image: "RS2M3-Horn04.png"
              },
              {
                part: "Trumpet 1",
                fileName: "RS2M3-Trumpet01.pdf",
                image: "RS2M3-Trumpet01.png"
              },
              {
                part: "Trumpet 2",
                fileName: "RS2M3-Trumpet02.pdf",
                image: "RS2M3-Trumpet02.png"
              },
              {
                part: "Trombone 1",
                fileName: "RS2M3-Trombone01.pdf",
                image: "RS2M3-Trombone01.png"
              },
              {
                part: "Trombone 2",
                fileName: "RS2M3-Trombone02.pdf",
                image: "RS2M3-Trombone02.png"
              },
              {
                part: "Trombone 3",
                fileName: "RS2M3-Trombone03.pdf",
                image: "RS2M3-Trombone03.png"
              },
              {
                part: "Tuba",
                fileName: "RS2M3-Tuba.pdf",
                image: "RS2M3-Tuba.png"
              },
              {
                part: "Timpani",
                fileName: "RS2M3-Timpani.pdf",
                image: "RS2M3-Timpani.png"
              },
              {
                part: "Violin 1",
                fileName: "RS2M3-Violin01.pdf",
                image: "RS2M3-Violin01.png"
              },
              {
                part: "Violin 2",
                fileName: "RS2M3-Violin02.pdf",
                image: "RS2M3-Violin02.png"
              },
              {
                part: "Viola",
                fileName: "RS2M3-Viola.pdf",
                image: "RS2M3-Viola.png"
              },
              {
                part: "Violoncello",
                fileName: "RS2M3-Cello.pdf",
                image: "RS2M3-Cello.png"
              },
              {
                part: "Double Bass",
                fileName: "RS2M3-DoubleBass.pdf",
                image: "RS2M3-DoubleBass.png"
              },
            ]
          }
        ]
      },
      {
        composer: "A Bonello",
        pieces: [
          {
            name: "Exercises",
            info: "Exercises for my students",
            parts: [
              {
                part: "Fundamentals 1",
                fileName: "ABMTFT - Fundamentals01.pdf",
                image: "ABMTFT - Fundamentals01.png"
              },
              {
                part: "Clap and Count Set 1",
                fileName: "ABMTCC - ClapCountSet01.pdf",
                image: "ABMTCC - ClapCountSet01.png"
              },
              {
                part: "Clap and Count Set 2",
                fileName: "ABMTCC - ClapCountSet02.pdf",
                image: "ABMTCC - ClapCountSet02.png"
              },
              {
                part: "Clap and Count Set 3",
                fileName: "ABMTCC - ClapCountSet03.pdf",
                image: "ABMTCC - ClapCountSet03.png"
              },
              {
                part: "Note Reading - Lines 1",
                fileName: "ABMTNR - NoteReadingLines01.pdf",
                image: "ABMTNR - NoteReadingLines01.png"
              },
              {
                part: "Note Reading - Spaces 1",
                fileName: "ABMTNR - NoteReadingSpaces01.pdf",
                image: "ABMTNR - NoteReadingSpaces01.png"
              },
            ],
          },
        ],
      },
      {
        composer: "Holst",
        pieces: [
          {
            name: "Mars and Venus",
            info: "from The Planets",
            parts: [
              {
                part: "Flutes 1 & 2",
                fileName: "HPMV-flutes-1-2.pdf",
                image: "HPMV-flutes-1-2.png"
              },
              {
                part: "Oboes 1 & 2",
                fileName: "HPMV-oboes-1-2.pdf",
                image: "HPMV-oboes-1-2.png"
              },
              {
                part: "English Horn",
                fileName: "HPMV-eh.pdf",
                image: "HPMV-eh.png"
              },
              {
                part: "Clarinets in Bb 1 & 2",
                fileName: "HPMV-clarinets-bb-1-2.pdf",
                image: "HPMV-clarinets-bb-1-2.png"
              },
              {
                part: "Clarinet in Bb 3",
                fileName: "HPMV-clarinet-bb-3.pdf",
                image: "HPMV-clarinet-bb-3.png"
              },
              {
                part: "Bassoons 1 & 2",
                fileName: "HPMV-bassoons-1-2.pdf",
                image: "HPMV-bassoons-1-2.png"
              },
              {
                part: "Horns in F 1 & 2",
                fileName: "HPMV-horns-f-1-2.pdf",
                image: "HPMV-horns-f-1-2.png"
              },
              {
                part: "Trumpets in Bb 1 & 2",
                fileName: "HPMV-trumpets-bb-1-2.pdf",
                image: "HPMV-trumpets-bb-1-2.png"
              },
              {
                part: "Trombones 1 & 2",
                fileName: "HPMV-trombones-1-2.pdf",
                image: "HPMV-trombones-1-2.png"
              },
              {
                part: "Trombone 3",
                fileName: "HPMV-trombone-3.pdf",
                image: "HPMV-trombone-3.png"
              },
              {
                part: "Tenor Tuba",
                fileName: "HPMV-tenor-tuba.pdf",
                image: "HPMV-tenor-tuba.png"
              },
              {
                part: "Bass Tuba",
                fileName: "HPMV-bass-tuba.pdf",
                image: "HPMV-bass-tuba.png"
              },
              {
                part: "Timpani",
                fileName: "HPMV-timpani.pdf",
                image: "HPMV-timpani.png"
              },
              {
                part: "Percussion",
                fileName: "HPMV-percussion.pdf",
                image: "HPMV-percussion.png"
              },
              {
                part: "Violin 1",
                fileName: "HPMV-violin-1.pdf",
                image: "HPMV-violin-1.png"
              },
              {
                part: "Violin 2",
                fileName: "HPMV-violin-2.pdf",
                image: "HPMV-violin-2.png"
              },
              {
                part: "Viola",
                fileName: "HPMV-viola.pdf",
                image: "HPMV-viola.png"
              },
              {
                part: "Cello",
                fileName: "HPMV-cello.pdf",
                image: "HPMV-cello.png"
              },
              {
                part: "Double Bass",
                fileName: "HPMV-db.pdf",
                image: "HPMV-db.png"
              },
            ]
          },
        ],
      },
      {
        composer: 'Dvorak',
        pieces: [
          {
            name: 'Song to the Moon',
            info: 'from Rusalka',
            parts: [
              {
                part: "Flute 1",
                fileName: "DRSM-flute-01.pdf",
                image: "DRSM-flute-01.png"
              },
              {
                part: "Flute 2",
                fileName: "DRSM-flute-02.pdf",
                image: "DRSM-flute-02.png"
              },
              {
                part: "Oboe 1",
                fileName: "DRSM-oboe-01.pdf",
                image: "DRSM-oboe-01.png"
              },
              {
                part: "Oboe 2 / English Horn",
                fileName: "DRSM-oboe-02-eh.pdf",
                image: "DRSM-oboe-02-eh.png"
              },
              {
                part: "Clarinet 1 in B flat",
                fileName: "DRSM-clarinet-bb-01.pdf",
                image: "DRSM-clarinet-bb-01.png"
              },
              {
                part: "Clarinet 2 in B flat",
                fileName: "DRSM-clarinet-bb-02.pdf",
                image: "DRSM-clarinet-bb-02.png"
              },
              {
                part: "Bass Clarinet in B flat",
                fileName: "DRSM-bass-clarinet-bb.pdf",
                image: "DRSM-bass-clarinet-bb.png"
              },
              {
                part: "Bassoons 1 and 2",
                fileName: "DRSM-bassoons-01-02.pdf",
                image: "DRSM-bassoons-01-02.png"
              },
              {
                part: "Horns 1 and 2 in F",
                fileName: "DRSM-horn-f-01-02.pdf",
                image: "DRSM-horn-f-01-02.png"
              },
              {
                part: "Horns 3 and 4 in F",
                fileName: "DRSM-horn-f-03-04.pdf",
                image: "DRSM-horn-f-03-04.png"
              },
              {
                part: "Trumpet 1 in B flat",
                fileName: "DRSM-trumpet-bb-01.pdf",
                image: "DRSM-trumpet-bb-01.png"
              },
              {
                part: "Trombone 1",
                fileName: "DRSM-trombone-01.pdf",
                image: "DRSM-trombone-01.png"
              },
              {
                part: "Trombone 2",
                fileName: "DRSM-trombone-02.pdf",
                image: "DRSM-trombone-02.png"
              },
              {
                part: "Timpani / Percussion",
                fileName: "DRSM-timp-perc.pdf",
                image: "DRSM-timp-perc.png"
              },
              {
                part: "Harp",
                fileName: "DRSM-harp.pdf",
                image: "DRSM-harp.png"
              },
              {
                part: "Violin 1",
                fileName: "DRSM-violin-01.pdf",
                image: "DRSM-violin-01.png"
              },
              {
                part: "Violin 2",
                fileName: "DRSM-violin-02.pdf",
                image: "DRSM-violin-02.png"
              },
              {
                part: "Viola",
                fileName: "DRSM-viola.pdf",
                image: "DRSM-viola.png"
              },
              {
                part: "Violoncello",
                fileName: "DRSM-cello.pdf",
                image: "DRSM-cello.png"
              },
              {
                part: "Double Bass",
                fileName: "DRSM-dbass.pdf",
                image: "DRSM-dbass.png"
              },

            ]
          }
        ]
      },
      {
        composer: "Clementi",
        pieces: [
          {
            name: "Orchestral Arrangments",
            info: "Orchestral arrangements by Anthony Bonello of Andante - Op.36, No.1, mvt.2 and Allegro moderato - Air Suisse - Op.36, No.5, mvt.2",
            parts: [
              //  {
              //   part: "Score",
              //   fileName: "OMBC_scoreTitle.pdf",
              //   image: "OMBC_ScoreTitle.png"
              //  },
              {
                part: "Flute",
                fileName: "ClArr-Flute.pdf",
                image: "ClArr-Flute.png"
              },
              {
                part: "Oboe",
                fileName: "ClArr-Oboe.pdf",
                image: "ClArr-Oboe.png"
              },
              {
                part: "Clarinet",
                fileName: "ClArr-Clarinet.pdf",
                image: "ClArr-Clarinet.png"
              },
              {
                part: "Bassoon",
                fileName: "ClArr-Bassoon.pdf",
                image: "ClArr-Bassoon.png"
              },
              {
                part: "Horn",
                fileName: "ClArr-Horn.pdf",
                image: "ClArr-Horn.png"
              },
              {
                part: "Trumpet",
                fileName: "ClArr-Trumpet.pdf",
                image: "ClArr-Trumpet.png"
              },
              {
                part: "Trombone",
                fileName: "ClArr-Trombone.pdf",
                image: "ClArr-Trombone.png"
              },
              {
                part: "Timpani",
                fileName: "ClArr-Timpani.pdf",
                image: "ClArr-Timpani.png"
              },
              {
                part: "Violin 1",
                fileName: "ClArr-Violin-1.pdf",
                image: "ClArr-Violin-1.png"
              },
              {
                part: "Violin 2",
                fileName: "ClArr-Violin-2.pdf",
                image: "ClArr-Violin-2.png"
              },
              {
                part: "Viola",
                fileName: "ClArr-Viola.pdf",
                image: "ClArr-Viola.png"
              },
              {
                part: "Violoncello",
                fileName: "ClArr-Cello.pdf",
                image: "ClArr-Cello.png"
              },
              {
                part: "Double Bass",
                fileName: "ClArr-DBass.pdf",
                image: "ClArr-DBass.png"
              },
            ]

          }
        ]
      },
      {
        composer: "Schubert",
        pieces: [
          {
            name: "Orchestral Arrangments",
            info: "Orchestral arrangement by Anthony Bonello of Serenade",
            parts: [
              //  {
              //   part: "Score",
              //   fileName: "OMBC_scoreTitle.pdf",
              //   image: "OMBC_ScoreTitle.png"
              //  },
              {
                part: "Flute",
                fileName: "SchbArr-Flute.pdf",
                image: "SchbArr-Flute.png"
              },
              {
                part: "Oboe",
                fileName: "SchbArr-Oboe.pdf",
                image: "SchbArr-Oboe.png"
              },
              {
                part: "Clarinet",
                fileName: "SchbArr-Clarinet.pdf",
                image: "SchbArr-Clarinet.png"
              },
              {
                part: "Bassoon",
                fileName: "SchbArr-Bassoon.pdf",
                image: "SchbArr-Bassoon.png"
              },
              {
                part: "Horn",
                fileName: "SchbArr-Horn.pdf",
                image: "SchbArr-Horn.png"
              },
              {
                part: "Trumpet",
                fileName: "SchbArr-Trumpet.pdf",
                image: "SchbArr-Trumpet.png"
              },
              {
                part: "Trombone",
                fileName: "SchbArr-Trombone.pdf",
                image: "SchbArr-Trombone.png"
              },
              {
                part: "Timpani",
                fileName: "SchbArr-Timpani.pdf",
                image: "SchbArr-Timpani.png"
              },
              {
                part: "Violin 1",
                fileName: "SchbArr-Violin-1.pdf",
                image: "SchbArr-Violin-1.png"
              },
              {
                part: "Violin 2",
                fileName: "SchbArr-Violin-2.pdf",
                image: "SchbArr-Violin-2.png"
              },
              {
                part: "Viola",
                fileName: "SchbArr-Viola.pdf",
                image: "SchbArr-Viola.png"
              },
              {
                part: "Violoncello",
                fileName: "SchbArr-Cello.pdf",
                image: "SchbArr-Cello.png"
              },
              {
                part: "Double Bass",
                fileName: "SchbArr-Dbass.pdf",
                image: "SchbArr-Dbass.png"
              },
            ]

          }
        ]
      }
    ];




    $scope.selectedComposer = "";
    $scope.selectedPiece = "";
    $scope.thisComposerPieces = "";
    $scope.selectedPart = "";
    $scope.listOfPieces = [];
    $scope.listOfParts = [];
    $scope.partSelected = "";
    $scope.selectedPieceInfo = "";

    $scope.selectedComposerChanged = function () {
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
    $scope.selectedPieceChanged = function (e) {
      var thisPiece = e;
      $scope.selectedPiece = e;
      $scope.listOfParts = [];
      $scope.data.forEach(element => {
        element.pieces.forEach(piece => {
          if (piece.name === thisPiece) {
            $scope.selectedPieceInfo = piece.info;
            piece.parts.forEach(part => {
              $scope.listOfParts.push(part);
            });
          }
        });
      });
      $scope.selectedPartChanged = function (e) {
        var thisPart = e;
        $scope.partSelected = e;
      };
    };
  }
]);

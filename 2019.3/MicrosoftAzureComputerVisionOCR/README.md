
## Microsoft Azure Computer Vision OCR アクティビティのサンプルワークフロー

### Description

UiPath 2019.3 で新しくリリースされた [Microsoft Azure Computer Vision OCR] アクティビティのサンプル ワークフローのご紹介です。

[Microsoft Azure Computer Vision OCR] アクティビティは、OCR エンジンの 1 つであり、[OCR でテキストを取得 (Get OCR Text)] アクティビティや [OCR で検出したテキストをクリック (Click OCR Text)] アクティビティといったような、UiPath 組み込みの OCR 系アクティビティとセットで使うアクティビティです。
本サンプルでは、日本語の文章が書かれている画像ファイルに対して [OCR でテキストを取得 (Get OCR Text)] アクティビティを使って文字認識をし、結果として返ってきた文字列をメッセージ ボックス内に表示します。

### Note
[Microsoft Azure Computer Vision OCR] アクティビティは、Microsoft Azure の Cognitive Services の 1 つである Computer Vision API に対し要求を送信するため、事前に Microsoft Azure のアカウントを取得し、Computer Vision API のエンドポイントと API キーを生成する必要があります。エンドポイントと API キーは、[Microsoft Azure Computer Vision OCR] アクティビティのプロパティ上で設定します。

### References

- [OCR のアクティビティガイド](https://docs.uipath.com/studio/lang-ja/docs/ocr-activities)
- [Microsoft Azure Computer Vision OCR アクティビティガイド](https://docs.uipath.com/activities/lang-ja/docs/microsoft-azure-computer-vision-ocr)
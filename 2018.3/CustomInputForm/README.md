## Custom Input Form sample

カスタムなHTMLを使ったワークフロー

1. 「CustomInputActivity」を利用したワークフローでHTMLファイルを表示
2. JSで「window.external.setResult(_string_)」でワークフローに文字列データを渡す

本サンプルは以下のサンプルに基づいています：
https://www.w3schools.com/howto/howto_css_contact_form.asp

入力フィルドが複数あるため、データ形式をJSONになります。

注意点：HTMLレンダリングのデフォルトモードは「Internet Explorer 7」ですので、以下のメタタグで「IE10」モードを有効します：

```<meta http-equiv="X-UA-Compatible" content="IE=10" />```


## VBScript を呼び出しアクティビティのサンプルワークフロー

### Description

UiPath 2019.5 で新たにリリースされた [VBScript を呼び出し (Invoke VBScript)] アクティビティを使ったサンプル ワークフローのご紹介です。

[VBScript を呼び出し (Invoke VBScript)] アクティビティを使うと、UiPath から VBScript を実行できます。オプションで引数を UiPath から VBScript に渡すことも、逆に、VBScript で処理した結果を UiPath に渡すこともできます。

UiPath から VBScript に引数を渡す際、引数を設定する順番が重要になります。例えば、[VBScript を呼び出し (Invoke VBScript)] アクティビティの [引数 (Arguments)] プロパティ上で 1 番最初に設定された引数を VBScript 側で取得するには、WScript.Arguments(0) というように Arguments のインデックスを 0 と指定します。同様に、[引数 (Arguments)] プロパティ上で 2 番目に設定された引数は、VBScript 側では WScript.Arguments(1) と記述します。

### References

- [[VBScript を呼び出し (Invoke VBScript)] アクティビティ](https://docs.uipath.com/activities/lang-ja/docs/invoke-vbscript)
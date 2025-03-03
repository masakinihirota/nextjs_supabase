

----------------------------------------
----------------------------------------

タイトル
Next.js、Supabase、Drizzleで認証とRLSの基礎的なWebアプリ ( App router、Serve Actions、RBAC、コロケーション、テスト)

目的
Next.jsとSupabaseの基本認証して、Drizzleを使ってテーブルを作り、RLSを有効化して、アクセスの確認、Next.jsのアーキテクチャ コロケーション そしてテストのそれぞれの動作とつながりの確認。



----------------------------------------

# todo すること

Next.js
Supabase
Drizzle

RLS
RBAC
App router
Serve Actions
コロケーション
基礎的な認証 ソーシャルログイン (GitHub)
DBのCRUD
バリデーション
テスト


----------------------------------------

# 用語

* RBAC

* コロケーション

コンポーネントコロケーションパターン #React - Qiita

https://qiita.com/masakinihirota/items/27f961dfa6871aad0550



----------------------------------------

# 環境
Next.js 15
Supabase
Supabase CLI
Drizzle 0.38

node ver
VSCode
Vercel


# 重要コマンド



----------------------------------------

# 開発環境構築: ローカルSupabase環境のセットアップ
 (内容: ローカル環境でのSupabaseの起動、必要なツールのインストールなどを解説)

## インストール

Next.js
Supabase
Drizzle
をそれぞれインストール


## 環境変数
Next.jsの環境変数

Supabaseの環境変数

Drizzleの環境変数


----------------------------------------

# 認証機能の実装: Supabase Authを用いたユーザー認証 (認証機能を使用する場合)

ソーシャルログイン（GitHub）

認証後のリダイレクト処理

セッション管理

今回は一人のユーザーがログイン、ログアウトが出来るのを作る

Supabase Auth を用いたユーザー認証を実装する (GitHubログイン)

認証後のリダイレクト処理を実装する

セッション管理について説明する

ログイン、ログアウト機能の実装例を示す



----------------------------------------

# データベース設計: Drizzleによるテーブル定義とマイグレーション
 (内容: Drizzle ORMを用いたテーブル定義、マイグレーションファイルの作成と実行手順を説明)

usersテーブル

Drizzle を用いてテーブル定義を行う (users テーブル)

マイグレーションファイルの作成と実行手順を説明する



# おまけ: データベース設計: Supabaseによるテーブル定義とマイグレーション
usersテーブル

Supabase でのテーブル構造についても言及する




----------------------------------------

# セキュリティ強化: Drizzle のR LS設定
 (内容: Drizzleで定義したスキーマに基づき、DrizzleのRow Level Security (RLS) を設定する方法を解説)

Supabase の Row Level Security (RLS) の概念を説明する

Drizzle で定義したスキーマに基づき、RLS を設定する方法を解説する

具体的な RLS ポリシーの例を示す

実際のアクセス制御のテスト方法を説明する



# おまけ: セキュリティ強化: Supabase の RLS設定
 (内容: Drizzleで定義したスキーマに基づき、SupabaseのRow Level Security (RLS) を設定する方法を解説)


RLSでテーブルのアクセスをコントロール


----------------------------------------

# Next.jsプロジェクト構成: App Router時代のアーキテクチャ設計
 (内容: Next.js App Routerのディレクトリ構成、コンポーネントの配置など、プロジェクト全体の設計思想を説明)

App Router を用いたディレクトリ構成を説明する

コンポーネントの配置方法を説明する

コロケーションのメリットを説明する (例を交えながら)

----------------------------------------

# ルーティングとコンポーネント設計: Next.js App RouterとReactコンポーネントの分離
 (内容: App Routerを用いたルーティングの実装、Reactコンポーネントの分割方法、コンポーネント間の連携などを解説)



App Router を用いたルーティングの実装方法を説明する

React コンポーネントの分割方法を説明する

コンポーネント間の連携について説明する



----------------------------------------

# UIコンポーネントの導入: Shadcn/ui メニュー、データ表示

Shadcn/ui

基本的なUIコンポーネントの利用方法を示す

## メニュー
Shadcn/uiのメニューを利用


## DBからデータを読み込む、そのデータを表示する。

----------------------------------------

# テスト: JestやReact Testing Libraryを用いたテストの実装 (テストを重視する場合)

Jest や React Testing Library を用いたテストの実装方法を説明する

認証機能やCRUD処理のテスト例を示す


----------------------------------------

# 動作確認: ローカル環境でのNext.jsアプリのテスト
 (内容: 開発したアプリケーションをローカル環境で起動し、動作確認を行う手順を説明)

ローカル環境でのアプリ起動と動作確認手順を説明する



----------------------------------------

# データ操作: Next.jsとSupabase間のCRUD処理実装
 (内容: Next.jsからSupabaseデータベースへのデータ登録、取得、更新、削除 (CRUD) の基本的なコード例を提示)

データ登録」、「データ取得」、「データ更新」、「データ削除


----------------------------------------

# バリデーションチェック

Zodでのバリデーションチェック

----------------------------------------

# 本番環境デプロイ: VercelへのNext.jsアプリ公開
 (内容: Vercelへのデプロイ手順、環境変数の設定、Supabaseとの連携などを解説)

 その他、必要に応じて追加できる章


例えば、「データ操作: Next.jsとSupabase間のCRUD処理実装」の章であれば、「データ登録」、「データ取得」、「データ更新」、「データ削除」といった見出しを設けることができます。


##





----------------------------------------

# おまけ

RLSを用いてRBACでの管理を行う。

RBACで複数のグループ(組織)、ユーザーのアクセスをコントロール

RLS を用いた RBAC (Role-Based Access Control) の実装例を説明する

複数のグループ (組織) を持つユーザーのアクセス制御について解説する

具体的なテーブル設計と RLS ポリシーの例を示す

グループAのユーザー1
グループAのユーザー2
グループAのユーザー3

グループBのユーザー4
グループBのユーザー5
グループBのユーザー6

グループAとBのアライアンスAB

アライアンスAB ユーザー1
アライアンスAB ユーザー2
アライアンスAB ユーザー3
アライアンスAB ユーザー4
アライアンスAB ユーザー5
アライアンスAB ユーザー6








##





##





----------------------------------------

# まとめ

この記事で学んだことを振り返る

今後の学習や実践へのアドバイスを提示する





# 最後に

読者にコメントや質問を促す
読んでくれて、ありがとうの言葉




##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------

#





##





##





----------------------------------------
----------------------------------------



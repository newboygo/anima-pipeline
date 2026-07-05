const __LANG_STORAGE_KEY__ = 'anima_ui_lang_v2';
const __OS_DEFAULT_LANG__ = (typeof __OS_LANG__ === 'string' && __OS_LANG__.toLowerCase().startsWith('ja')) ? 'ja' : ((typeof __OS_LANG__ === 'string' && (__OS_LANG__.toLowerCase().startsWith('zh') || __OS_LANG__.toLowerCase().startsWith('cn'))) ? 'zh' : 'en');
let currentLang = localStorage.getItem(__LANG_STORAGE_KEY__) || __OS_DEFAULT_LANG__;
if(currentLang !== 'ja' && currentLang !== 'en' && currentLang !== 'zh') currentLang = __OS_DEFAULT_LANG__;

const BASE_I18N_MAP_EN = {
  'キャラクター生成（プロンプト+画像）': 'Character Generation (Prompt + Image)',
  '設定': 'Settings',
  '必須': 'Required',
  '必須設定': 'Required Settings',
  'LLMを使わないなら不要': 'Not required if LLM is disabled',
  'オプション': 'Optional',
  '画像設定': 'Image Settings',
  '生成パラメータ': 'Generation Params',
  'キャラクター': 'Character',
  'シーン・雰囲気': 'Scene / Mood',
  'プロンプト調整・追加（再生成に反映されます）': 'Prompt Tuning / Additions (used for re-generation)',
  'ネガティブ調整': 'Negative Prompt Tuning',
  '処理状況': 'Status',
  '先頭へ': 'Back to Top',
  '設定を保存': 'Save Settings',
  'セッション保存': 'Save Session',
  '開く': 'Open',
  '保存済みセッション': 'Saved Sessions',
  '保存済みセッションはありません': 'No saved sessions',
  'セッション名を入力': 'Enter session name',
  '再読み込み': 'Reload',
  '接続テスト': 'Connection Test',
  '接続テスト中...': 'Connection Test in progress...',
  '接続確認': 'Connection Check',
  '接続中': 'Connecting',
  '接続OK': 'Connected',
  '接続失敗': 'Connection failed',
  '接続エラー': 'Connection error',
  'モデル': 'Model',
  '保存形式': 'Output Format',
  'メタデータを埋め込む': 'Embed Metadata',
  '生成開始': 'Generate',
  '生成中止': 'Cancel',
  '再画像生成': 'Re-generate Image',
  '生成結果': 'Generated Result',
  'プロンプト再利用': 'Reuse Prompt',
  'フォルダを開く': 'Open Folder',
  '閉じる': 'Close',
  '生成履歴（このセッション）': 'Generation History (Session)',
  'セッション履歴': 'Session History',
  '全履歴': 'All History',
  '全履歴はまだありません': 'No history yet',
  'クリア': 'Clear',
  'コピー': 'Copy',
  'コピー済': 'Copied',
  'ポジティブ': 'Positive',
  'ネガティブ': 'Negative',
  '状況': 'Status',
  '画像': 'Image',
  'パラメータ': 'Params',
  'キャラ': 'Chara',
  'シーン': 'Scene',
  'ポジ調整': 'Prompt',
  'ネガ調整': 'Negative',
  '読み込みエラー': 'Load error',
  '保存しました': 'Saved',
  '削除しますか？': 'Delete this item?',
  'をDelete this item?': ' to delete?',
  '削除': 'Delete',
  'プリセット一覧（サムネイル）': 'Preset List (Thumbnails)',
  '対象プリセット': 'Target Preset',
  'ギャラリー画像を拡大表示してから「プリセットのサムネイル作成」を押してください': 'Open a gallery image, then click "Create Preset Thumbnail".',
  'プリセットのサムネイル作成': 'Create Preset Thumbnail',
  'サムネイル未設定': 'No thumbnail',
  'サムネ作成対象のプリセットを選択してください': 'Select a preset to assign thumbnail.',
  'ギャラリー画像を先に開いてください': 'Open a gallery image first.',
  'サムネイルを更新しますか？': 'Update this thumbnail?',
  'サムネイル保存: ': 'Thumbnail saved: ',
  'サムネイル作成失敗: ': 'Thumbnail creation failed: ',
  '追加': 'Add',
  'エラー': 'Error',
  '不明なエラー': 'Unknown error',
  '中止されました': 'Cancelled',
  '中止': 'Cancel',
  'ネットワークエラー': 'Network error',
  'スキップ': 'Skipped',
  '完了': 'Done',
  '送信失敗': 'Send failed',
  'キューに追加': 'Queued',
  '生成中': 'Generating',
  '枚完了': 'done',
  '枚': 'images',
  'ランダムな値を生成': 'Generate random value',
  'キャラ名を入力してください': 'Please enter character name',
  'シリーズまたはいずれかのキャラ名を入力してください': 'Please enter a series or at least one character name',
  'プロンプトを再利用モードに設定しました。「↺ 再画像生成」ボタンで送信できます。': 'Prompt was set to reuse mode. Use the "Re-generate Image" button to submit.',
  'Danbooru Wiki+LLMでプリセット自動生成': 'Auto-generate preset with Danbooru Wiki + LLM',
  '（長押しで選択）': '(Long-press to select)',
  '読込': 'Load',
  '保存': 'Save',
  '詳細': 'Details',
  '女': 'Female',
  '男': 'Male',
  '不明': 'Unknown',
  '未設定': 'Unset',
  '大人': 'Adult',
  '子供': 'Child',
  '髪型': 'Hair Style',
  '髪色': 'Hair Color',
  '肌の色': 'Skin Tone',
  '目の状態': 'Eye State',
  '目の色': 'Eye Color',
  '口の形': 'Mouth',
  '表情': 'Expression',
  '向き': 'Direction',
  '状態': 'State',
  '前': 'Front',
  '後ろ': 'Back',
  '日本語入力': 'Input in English',
  'その他': 'Other',
  '作品名': 'Series',
  'キャラ名': 'Character Name',
  'キャラ名 JA *': 'Name JA *',
  'キャラ名 EN': 'Name EN',
  '作品名 JA': 'Series JA',
  '作品名 EN': 'Series EN',
  'オリジナル': 'Original',
  'プリセット選択': 'Preset',
  'ネガティブプリセット': 'Negative Preset',
  'ネガティブプリセットを選択': 'Select negative preset',
  '── ネガティブプリセット選択 ──': '── Select negative preset ──',
  'ネガティブプリセット名を入力してください': 'Please enter negative preset name',
  '現在のネガティブ設定を上書きしますか？': 'Overwrite current negative settings?',
  'ポジティブプリセット': 'Positive Preset',
  'ポジティブプリセットを選択': 'Select positive preset',
  '── ポジティブプリセット選択 ──': '── Select positive preset ──',
  'ポジティブプリセット名を入力してください': 'Please enter positive preset name',
  '現在のポジティブ設定を上書きしますか？': 'Overwrite current positive settings?',
  '共通作品（任意）': 'Shared Series (Optional)',
  'キャラ数': 'Chara Count',
  '全裸': 'Nude',
  '半裸': 'Half Nude',
  '上下': 'Top/Bottom',
  '背丈': 'Height',
  'バスト': 'Bust',
  '普通': 'Normal',
  '姿勢': 'Posture',
  '動作': 'Action',
  '動作・ポーズ': 'Action / Pose',
  '腕・手': 'Arms / Hands',
  '視線': 'Gaze',
  '時間帯': 'Time of Day',
  '天気': 'Weather',
  '画面TOP/BOTTOM': 'Frame Top / Bottom',
  '画面左右': 'Frame Left / Right',
  '場所': 'Location',
  '世界観': 'World',
  '体型': 'Body Build',
  '脚': 'Legs',
  '付属': 'Attachments',
  '尻尾': 'Tail',
  '翼': 'Wings',
  '瞳の色': 'Eye Color',
  '補足メモ（日本語）→ LLMに渡す（1回目のプロンプト生成のみ）': 'Additional Note (sent to LLM only on first generation)',
  '送信POSITIVEプロンプト（生成＋ADDタグ）': 'Sent POSITIVE Prompt (Generated + Added Tags)',
  '送信ポジティブプロンプト（生成＋追加タグ）': 'Sent Positive Prompt (Generated + Added Tags)',
  'Negativeプロンプト調整': 'Negative Prompt Tuning',
  '期間タグ（Positiveと共通）': 'Period Tags (shared with Positive)',
  '期間タグ': 'Period Tags',
  'ポジティブの期間タグ設定がネガティブにも反映されます': 'Positive period-tag settings are also applied to Negative.',
  '品質タグ（人間ベース: NORMAL/LOW/WORST）': 'Quality Tags (Human base: NORMAL/LOW/WORST)',
  '品質タグ（Pony）': 'Quality Tags (Pony)',
  '品質タグ（人間ベース）': 'Quality Tags (Human base)',
  'メタタグ': 'Meta Tags',
  '安全タグ（単一選択）': 'Safety Tags (single-select)',
  'スタイル（@アーティスト名・ネガティブ専用）': 'Style (@Artist Name, Negative only)',
  'スタイル（@アーティスト名）': 'Style (@Artist Name)',
  '新規Add': 'Add New',
  '追記文（英語）→ プロンプト末尾に直接Add': 'Extra Text (English) -> append directly to prompt end',
  'カスタムタグを入力': 'Enter custom tag',
  '例:': 'e.g.:',
  'ワークフローJSONパス（フォールバック）': 'Workflow JSON Path (fallback)',
  'ワークフローJSONが見つかりません:': 'Workflow JSON not found:',
  'ワークフローJSONが見つかりません': 'Workflow JSON not found',
  'WORKFLOWS/ フォルダから選択（優先）': 'Select from WORKFLOWS/ folder (preferred)',
  'LLMを使うならRequired': 'Required if using LLM',
  '任意': 'Optional',
  'LLMツール統合': 'LLM Tool Integrations',
  '⑧ LLMツール統合': '⑧ LLM Tool Integrations',
  'COMFYUI OUTPUT フォルダ（WEBP変換用・絶対パスで入力推奨）': 'COMFYUI OUTPUT Folder (for WEBP conversion, absolute path recommended)',
  '⑨ COMFYUI OUTPUT フォルダ（WEBP変換用・絶対パス推奨）': '⑨ COMFYUI OUTPUT FOLDER (for WEBP conversion, absolute path recommended)',
  '⑨ COMFYUI OUTPUT フォルダ（WEBP変換用、絶対パス推奨）': '⑨ COMFYUI OUTPUT FOLDER (for WEBP conversion, absolute path recommended)',
  'WEBP変換用': 'for WEBP conversion',
  '絶対パス推奨': 'absolute path recommended',
  'ログ保存フォルダ': 'LOG DIRECTORY',
  '⑩ ログ保存フォルダ': '⑩ LOG DIRECTORY',
  'ログ保持日数': 'LOG RETENTION DAYS',
  '⑪ ログ保持日数': '⑪ LOG RETENTION DAYS',
  'ログレベル': 'LOG LEVEL',
  '⑫ ログレベル': '⑫ LOG LEVEL',
  'ログフォルダを開く': 'OPEN LOGS',
  'ログZIPをエクスポート': 'EXPORT LOGS ZIP',
  'プリセットを選択': 'Select a preset',
  'CharaプリセットDelete': 'Delete Character Preset',
  '送信枚数': 'Image Count',
  'PNG生成': 'Generate PNG',
  'WebP変換': 'Convert to WebP',
  'ランダム': 'Random',
  '固定': 'Fixed',
  '連番': 'Increment',
  '補足メモ（日本語）': 'Additional Note (Japanese)',
  'ワークフロー内のLoraLoader ノードに順番に注入されます。空欄はSkipped。': 'Injected in order into LoraLoader nodes in the workflow. Empty fields are skipped.',
  'カードをクリックでスロットに割り当て（再クリックで解除）': 'Click a card to assign it to a slot (click again to unassign).',
  '未使用': 'Unused',
  '強度': 'Strength',
  'LLMを使用する': 'Use LLM',
  '送信POSITIVEプロンプト（生成＋ADDタグ）': 'Sent POSITIVE Prompt (Generated + ADD Tags)',
  '送信ポジティブプロンプト': 'Sent Positive Prompt',
  '送信POSITIVEプロンプト': 'Sent POSITIVE Prompt',
  '▸ 送信ポジティブプロンプト': '▸ Sent Positive Prompt',
  '▸ 送信POSITIVEプロンプト': '▸ Sent POSITIVE Prompt',
  'LLM生成POSITIVEプロンプト': 'LLM-generated POSITIVE Prompt',
  '送信NEGATIVEプロンプト': 'Sent NEGATIVE Prompt',
  'LLMを使うなら': 'If using LLM',
  'フォルダから選択': 'Select from folder',
  'フォルダ': 'Folder',
  '絶対パスで入力推奨': 'absolute path recommended',
  'IMAGEサイズ（ANIMA推奨）': 'Image Size (ANIMA recommended)',
  'シード値': 'Seed',
  'LoraLoader ノードに順番に注入されます。空欄はSkipped。': 'Injected into LoraLoader nodes in order. Empty fields are skipped.',
  'ワークフロー内の': 'In workflow,',
  'ノードに順番に注入されます。': 'injected into nodes in order.',
  '空欄はSkipped。': 'Empty fields are skipped.',
  'Period Tags (Positiveと共通)': 'Period Tags (shared with Positive)',
  'Extraタグ（Negative専用・右クリックでDelete）': 'Extra Tags (Negative only, right-click to delete)',
  '追記文（英語）→ Negativeプロンプト末尾に直接Add': 'Extra Text (English) -> append directly to Negative prompt end',
  '新規Add': 'Add New',
  'タグをAdd': 'Add tag',
  '日本語': 'Japanese',
  '入力推奨': 'recommended',
  '例：': 'e.g.:',
  '例:': 'e.g.:',
  '（フォールバック）': '(fallback)',
  '（優先）': '(preferred)',
  '（任意）': '(optional)',
  '日本語入力（例:': 'Input in English (e.g.:',
  '日本語入力（例：': 'Input in English (e.g.:',
  '英語タグのみ': 'English tags only',
  'Input in English可': 'Input in English',
  'Input in English可（例:': 'Input in English (e.g.:',
  'Input in English可（例：': 'Input in English (e.g.:',
  '日本語入力可': 'Input in English',
  '日本語入力可（例:': 'Input in English (e.g.:',
  '日本語入力可（例：': 'Input in English (e.g.:',
  '屋外': 'Outdoor',
  '屋内': 'Indoor',
  '特殊': 'Special',
  'ワークフローJSONパス（フォールバック）': 'Workflow JSON Path (fallback)',
  'WORKFLOWS/ フォルダから選択（優先）': 'Select from WORKFLOWS/ folder (preferred)',
  'anima_pipeline/workflows/ にJSONを置くと表示されます。選択時にNode IDを自動検出します（ControlNet等が挟まる場合は手動確認を）': 'Files appear when JSON is placed in `anima_pipeline/workflows/`. Node IDs are auto-detected on selection (verify manually if ControlNet or other nodes are inserted).',
  'にJSONを置くと表示されます。': 'appears when JSON is placed there.',
  '選択時にNode IDを自動検出します': 'Node IDs are auto-detected on selection',
  'ControlNet等が挟まる場合は手動確認を': 'verify manually if ControlNet or similar nodes are inserted',
  'workflows/ フォルダから選択（優先）': 'Select from workflows/ folder (preferred)',
  '　 workflows/ フォルダから選択（優先）': 'Select from workflows/ folder (preferred)',
  'WORKFLOWS/ フォルダから選択(PREFERRED)': 'Select from WORKFLOWS/ folder (PREFERRED)',
  'LLMを使うなら必須': 'Required if using LLM',
  '⑥ LLMプラットフォーム': '⑥ LLM Platform',
  '空欄 または トークン文字列': 'Blank or token string',
  'Seed（シード値）': 'Seed',
  'COMFYUI OUTPUT フォルダ（CONVERT TO WEBP用・絶対パスで入力推奨）': 'COMFYUI OUTPUT Folder (for CONVERT TO WEBP, absolute path recommended)',
  '例: 緊張感、幻想的な雰囲気': 'e.g.: tense, fantastical atmosphere',
  '例: お姉さんが弟分を甘やかしている雰囲気、ドキドキしている': 'e.g.: caring older-sister vibe, heart-pounding mood',
  'ワークフロー内の LoraLoader ノードに順番に注入されます。空欄はスキップ。': 'Injected in order into LoraLoader nodes in the workflow. Empty fields are skipped.',
  '空欄はスキップ。': 'Empty fields are skipped.',
  '▼ Negativeプロンプト調整': '▼ Negative Prompt Tuning',
  '新規Add (e.g.: bad_artist)': 'Add New (e.g.: bad_artist)',
  'タグをAdd (e.g.: bad anatomy)': 'Add tag (e.g.: bad anatomy)',
  '追記文（英語）→ Negativeプロンプト末尾に直接Add': 'Extra Text (English) -> append directly to Negative prompt end',
  '追記文（英語）→ プロンプト末尾に直接追加': 'Extra Text (English) -> append directly to prompt end',
  '追記文（英語）→ ネガティブプロンプト末尾に直接追加': 'Extra Text (English) -> append directly to Negative prompt end',
  'Negativeプロンプト調整': 'Negative Prompt Tuning',
  'ネガティブプロンプト調整': 'Negative Prompt Tuning',
  '▼ ネガティブプロンプト調整': '▼ Negative Prompt Tuning',
  'COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': 'COMFYUI Sent POSITIVE Prompt (Generated + ADD Tags)',
  'COMFYUI 送信NEGATIVEプロンプト': 'COMFYUI Sent NEGATIVE Prompt',
  'スタイル（@アーティスト名）': 'Style (@Artist Name)',
  'スタイル（@アーティスト名・ネガティブ専用）': 'Style (@Artist Name, Negative only)',
  '※英語表記': '*English only',
  '※英語表記で入力': '*Input in English',
  '新規追加（例: bad_artist）': 'Add New (e.g.: bad_artist)',
  'タグを追加（例: bad anatomy）': 'Add tag (e.g.: bad anatomy)',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '⑥ Extra Tags (add after Chara/Scene tags)',
  '⑦ 追記文（英語）→ プロンプト末尾に直接Add': '⑦ Extra Text (English) -> append directly to prompt end',
  '⑦ 追記文（英語）→ Negativeプロンプト末尾に直接Add': '⑦ Extra Text (English) -> append directly to Negative prompt end',
  '⑦ 追記文（英語）→ ネガティブプロンプト末尾に直接追加': '⑦ Extra Text (English) -> append directly to Negative prompt end',
  'アクセサリー': 'Accessories',
  'エフェクト': 'Effects',
  '衣装': 'Outfit',
  'オッドアイ': 'Odd Eyes',
  '左目': 'Left Eye',
  '右目': 'Right Eye',
  '全体': 'All',
  '⑫ 脚': '⑫ Legs',
  'プリセット名を入力してください': 'Please enter preset name',
  '同名のプリセットが存在します。上書きしますか？': 'A preset with the same name already exists. Overwrite?',
  'プリセット管理（Scene/Camera/Quality/LoRA/Composite）': 'Preset Manager (Scene/Camera/Quality/LoRA/Composite)',
  '小': 'Small',
  '低': 'Short',
  '高': 'Tall',
  '大柄': 'Large',
  '痩': 'Thin',
  '太': 'Heavy',
  '開き': 'Open',
  '半目': 'Half-Closed',
  '閉じ': 'Closed',
  'LORA一覧取得': 'Fetch LORA List',
  '例: スペシャルウィーク': 'e.g.: Special Week',
  '例: ウマ娘、ブルアカ': 'e.g.: Umamusume, Blue Archive',
  '青肌': 'blue skin',
  '緑肌': 'green skin',
  '白 ドレス': 'white dress',
  'お団子': 'hair bun',
  'ドレッド': 'dreadlocks',
  'グラデーション': 'gradient',
  'メッシュ': 'mesh',
  '日本語入力可（例: 青肌、緑肌）': 'Input in English (e.g.: blue skin, green skin)',
  '日本語入力可（例: 白 ドレス、maid_apron）': 'Input in English (e.g.: white dress, maid_apron)',
  '日本語入力可（例: お団子、ドレッド）': 'Input in English (e.g.: hair bun, dreadlocks)',
  '日本語入力可（例: グラデーション、メッシュ）': 'Input in English (e.g.: gradient, mesh)',
  '持ち物': 'Held Item',
  '⑯ 持ち物': '⑯ Held Item',
  '俯瞰': "Bird's-Eye",
  '仰視': "Worm's-Eye",
  '品質タグ（PonyV7 aestheticベース）': 'Quality Tags (PonyV7 aesthetic base)',
  '▸ ComfyUI 送信ネガティブプロンプト': '▸ ComfyUI Sent NEGATIVE Prompt',
  '▸ 送信ネガティブプロンプト': '▸ Sent NEGATIVE Prompt',
  '▼ ⑥ Extraタグ（ネガティブ専用・右クリックで削除）': '▼ ⑥ Extra Tags (Negative only, right-click to delete)'
  ,
  '性別 *': 'Gender *',
  '年齢': 'Age',
  '口': 'Mouth',
  '⑤ 口': '⑤ Mouth',
  '耳': 'Ears',
  '廃墟': 'Ruins',
  'Period Tags (Positiveと共通)': 'Period Tags (shared with Positive)',
  '① Period Tags (Positiveと共通)': '① Period Tags (shared with Positive)',
  'Positiveと共通': 'shared with Positive',
  '（複数作品の場合はCharaごとに入力）': '(for multiple series, set per character)',
  '(複数作品の場合はCharaごとに入力)': '(for multiple series, set per character)',
  '(複数作品の場合はChara': '(for multiple series, Chara',
  '（複数作品の場合はChara': '(for multiple series, Chara',
  '複数作品の場合はCharaごとに入力': 'for multiple series, set per character',
  '（複数作品の場合はキャラごとに入力）': '(for multiple series, set per character)',
  '複数作品の場合はキャラごとに入力': 'for multiple series, set per character',
  '① Period Tags (Positiveと共通)': '① Period Tags (shared with Positive)',
  '▼ ① Period Tags (Positiveと共通)': '▼ ① Period Tags (shared with Positive)',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '⑥ Extra Tags (add after Chara/Scene tags)',
  '▼ ⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '▼ ⑥ Extra Tags (add after Chara/Scene tags)',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd)': '⑥ Extra Tags (add after Chara/Scene tags)',
  '▼ ⑥ Extraタグ（Chara・Sceneタグの後にAdd)': '▼ ⑥ Extra Tags (add after Chara/Scene tags)',
  '⑥ Extraタグ（キャラ・シーンタグの後に追加）': '⑥ Extra Tags (add after Chara/Scene tags)',
  '▼ ⑥ Extraタグ（キャラ・シーンタグの後に追加）': '▼ ⑥ Extra Tags (add after Chara/Scene tags)',
  'LLM生成POSITIVEプロンプト': 'LLM-generated POSITIVE Prompt',
  '▸ LLM生成POSITIVEプロンプト': '▸ LLM-generated POSITIVE Prompt',
  'COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': 'COMFYUI Sent POSITIVE Prompt (Generated + ADD Tags)',
  'ComfyUI 送信ポジティブプロンプト（生成＋追加タグ）': 'ComfyUI Sent Positive Prompt (Generated + Added Tags)',
  'COMFYUI 送信ポジティブプロンプト（生成＋追加タグ）': 'COMFYUI SENT POSITIVE PROMPT (GENERATED + ADDED TAGS)',
  '▸ ComfyUI 送信ポジティブプロンプト（生成＋追加タグ）': '▸ ComfyUI Sent Positive Prompt (Generated + Added Tags)',
  '▸ COMFYUI 送信ポジティブプロンプト（生成＋追加タグ）': '▸ COMFYUI SENT POSITIVE PROMPT (GENERATED + ADDED TAGS)',
  '送信Positiveプロンプト': 'Sent Positive Prompt',
  '▸ 送信Positiveプロンプト': '▸ Sent Positive Prompt',
  'LLM生成ポジティブプロンプト': 'LLM-generated Positive Prompt',
  '▸ LLM生成ポジティブプロンプト': '▸ LLM-generated Positive Prompt',
  'ポジティブ': 'Positive',
  '追加タグ': 'Added Tags',
  'COMFYUI 送信POSITIVEプロンプト（生成+ADDタグ）': 'COMFYUI Sent POSITIVE Prompt (Generated + ADD Tags)',
  '▸ COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': '▸ COMFYUI Sent POSITIVE Prompt (Generated + ADD Tags)',
  '▸ COMFYUI 送信POSITIVEプロンプト（生成+ADDタグ）': '▸ COMFYUI Sent POSITIVE Prompt (Generated + ADD Tags)',
  '⑰ 画面TOP/BOTTOM': '⑰ Frame Top / Bottom',
  '▼ ⑰ 画面TOP/BOTTOM': '▼ ⑰ Frame Top / Bottom',
  'なし': 'None',
  '🗑️ CharaプリセットDelete': '🗑️ Delete Character Preset',
  'IMAGEサイズ（ANIMA推奨）': 'Image Size (ANIMA Recommended)',
  'IMAGEサイズ': 'Image Size',
  'ANIMA推奨': 'ANIMA Recommended',
  'プリセットDelete': 'Preset Delete',
  'プリセット': 'Preset',
  'サイズ': 'Size',
  '推奨': 'Recommended',
  '黒': 'Black',
  '濃茶': 'Dark Brown',
  '茶': 'Brown',
  '薄茶': 'Light Brown',
  '赤': 'Red',
  '桃': 'Pink',
  '橙': 'Orange',
  '薄桃': 'Light Pink',
  '黄': 'Yellow',
  '緑': 'Green',
  '薄緑': 'Light Green',
  '水緑': 'Teal',
  '青': 'Blue',
  '水色': 'Light Blue',
  '紺': 'Navy',
  '灰': 'Gray',
  '銀': 'Silver',
  '紫': 'Purple',
  '薄紫': 'Light Purple',
  '白': 'White',
  '金': 'Gold',
  'マルチ': 'Multicolor',
  '🔄 LORA一覧取得': '🔄 Fetch LORA List',
  'ウマ娘': 'Umamusume',
  '場所を自由入力（例: 競馬場、魔法学校）': 'Enter any location (e.g.: racetrack, magic academy)',
  '画面上下': 'Frame Top / Bottom',
  '⑰ 画面上下': '⑰ Frame Top / Bottom',
  '貧乳': 'Flat',
  '中': 'Medium',
  '大': 'Large',
  '爆': 'Huge',
  '超爆': 'Gigantic',
  '短い': 'Short',
  '長い': 'Long',
  'ローアングル': 'Low Angle',
  'ハイアングル': 'High Angle',
  '魚眼': 'Fisheye',
  '獣尻尾': 'Animal',
  '猫尻尾': 'Cat',
  '犬尻尾': 'Dog',
  '狐尻尾': 'Fox',
  '龍尻尾': 'Dragon',
  '悪魔尻尾': 'Demon',
  '天使翼': 'Angel',
  '悪魔翼': 'Demon',
  '龍翼': 'Dragon',
  '羽翼': 'Feathered',
  '機械翼': 'Mechanical',
  'ショート': 'Short',
  'ミディアム': 'Medium',
  'ロング': 'Long',
  '超ロング': 'VLong',
  'ボブ': 'Bob',
  'ストレート': 'Straight',
  'ウェーブ': 'Wavy',
  'クセ毛': 'Curly',
  '縦ロール': 'Drill',
  'お団子': 'Bun',
  'ぱっつん': 'Blunt',
  '流し前髪': 'Swept',
  'サイド流し': 'Side Swept'
};

const BASE_I18N_MAP_ZH = {
  'キャラクター生成（プロンプト+画像）': '角色生成（提示词+图片）',
  '設定': '设置',
  '必須': '必填',
  '必須設定': '必填设置',
  'LLMを使わないなら不要': '不使用LLM则无需填写',
  'オプション': '可选',
  '画像設定': '图片设置',
  '生成パラメータ': '生成参数',
  'キャラクター': '角色',
  'シーン・雰囲気': '场景/氛围',
  'プロンプト調整・追加（再生成に反映されます）': '提示词调整/追加（重新生成时生效）',
  'ネガティブ調整': '负向提示词调整',
  '処理状況': '处理状态',
  '先頭へ': '回到顶部',
  '設定を保存': '保存设置',
  'セッション保存': '保存会话',
  '開く': '打开',
  '保存済みセッション': '已保存的会话',
  '保存済みセッションはありません': '没有已保存的会话',
  'セッション名を入力': '输入会话名称',
  '再読み込み': '重新加载',
  '接続テスト': '连接测试',
  '接続テスト中...': '连接测试中...',
  '接続確認': '连接检查',
  '接続中': '连接中',
  '接続OK': '连接成功',
  '接続失敗': '连接失败',
  '接続エラー': '连接错误',
  'モデル': '模型',
  '保存形式': '输出格式',
  'メタデータを埋め込む': '嵌入元数据',
  '生成開始': '开始生成',
  '生成中止': '取消生成',
  '再画像生成': '重新生成图片',
  '生成結果': '生成结果',
  'プロンプト再利用': '复用提示词',
  'フォルダを開く': '打开文件夹',
  '閉じる': '关闭',
  '生成履歴（このセッション）': '生成历史（本次会话）',
  'セッション履歴': '会话历史',
  '全履歴': '全部历史',
  '全履歴はまだありません': '暂无历史记录',
  'クリア': '清除',
  'コピー': '复制',
  'コピー済': '已复制',
  'ポジティブ': '正向',
  'ネガティブ': '负向',
  '状況': '状态',
  '画像': '图片',
  'パラメータ': '参数',
  'キャラ': '角色',
  'シーン': '场景',
  'ポジ調整': '提示词',
  'ネガ調整': '负向',
  '読み込みエラー': '加载错误',
  '保存しました': '已保存',
  '削除しますか？': '确定删除？',
  'をDelete this item?': '确定删除？',
  '削除': '删除',
  'プリセット一覧（サムネイル）': '预设列表（缩略图）',
  '対象プリセット': '目标预设',
  'ギャラリー画像を拡大表示してから「プリセットのサムネイル作成」を押してください': '请先放大查看画廊图片，然后点击"创建预设缩略图"',
  'プリセットのサムネイル作成': '创建预设缩略图',
  'サムネイル未設定': '未设置缩略图',
  'サムネ作成対象のプリセットを選択してください': '请选择要分配缩略图的预设',
  'ギャラリー画像を先に開いてください': '请先打开画廊图片',
  'サムネイルを更新しますか？': '更新此缩略图？',
  'サムネイル保存: ': '缩略图已保存: ',
  'サムネイル作成失敗: ': '缩略图创建失败: ',
  '追加': '添加',
  'エラー': '错误',
  '不明なエラー': '未知错误',
  '中止されました': '已取消',
  '中止': '取消',
  'ネットワークエラー': '网络错误',
  'スキップ': '已跳过',
  '完了': '完成',
  '送信失敗': '发送失败',
  'キューに追加': '已加入队列',
  '生成中': '生成中',
  '枚完了': '张已完成',
  '枚': '张',
  'ランダムな値を生成': '生成随机值',
  'キャラ名を入力してください': '请输入角色名称',
  'シリーズまたはいずれかのキャラ名を入力してください': '请输入作品系列或至少一个角色名称',
  'プロンプトを再利用モードに設定しました。「↺ 再画像生成」ボタンで送信できます。': '提示词已设为复用模式。点击"↺ 重新生成图片"按钮即可发送。',
  'Danbooru Wiki+LLMでプリセット自動生成': '使用Danbooru Wiki+LLM自动生成预设',
  '（長押しで選択）': '（长按选择）',
  '読込': '加载',
  '保存': '保存',
  '詳細': '详情',
  '女': '女',
  '男': '男',
  '不明': '未知',
  '未設定': '未设置',
  '大人': '成人',
  '子供': '儿童',
  '髪型': '发型',
  '髪色': '发色',
  '肌の色': '肤色',
  '目の状態': '眼睛状态',
  '目の色': '眼睛颜色',
  '口の形': '嘴型',
  '表情': '表情',
  '向き': '朝向',
  '状態': '状态',
  '前': '前',
  '後ろ': '后',
  '日本語入力': '英文输入',
  'その他': '其他',
  '作品名': '作品名称',
  'キャラ名': '角色名称',
  'キャラ名 JA *': '角色名 日文 *',
  'キャラ名 EN': '角色名 英文',
  '作品名 JA': '作品名 日文',
  '作品名 EN': '作品名 英文',
  'オリジナル': '原创',
  'プリセット選択': '预设选择',
  'ネガティブプリセット': '负向预设',
  'ネガティブプリセットを選択': '选择负向预设',
  '── ネガティブプリセット選択 ──': '── 选择负向预设 ──',
  'ネガティブプリセット名を入力してください': '请输入负向预设名称',
  '現在のネガティブ設定を上書きしますか？': '是否覆盖当前负向设置？',
  'ポジティブプリセット': '正向预设',
  'ポジティブプリセットを選択': '选择正向预设',
  '── ポジティブプリセット選択 ──': '── 选择正向预设 ──',
  'ポジティブプリセット名を入力してください': '请输入正向预设名称',
  '現在のポジティブ設定を上書きしますか？': '是否覆盖当前正向设置？',
  '共通作品（任意）': '共同作品（可选）',
  'キャラ数': '角色数量',
  '全裸': '全裸',
  '半裸': '半裸',
  '上下': '上下半身',
  '背丈': '身高',
  'バスト': '胸围',
  '普通': '普通',
  '姿勢': '姿势',
  '動作': '动作',
  '動作・ポーズ': '动作/姿势',
  '腕・手': '手臂/手部',
  '視線': '视线',
  '時間帯': '时间段',
  '天気': '天气',
  '画面TOP/BOTTOM': '画面上下',
  '画面左右': '画面左右',
  '場所': '地点',
  '世界観': '世界观',
  '体型': '体型',
  '脚': '腿部',
  '付属': '附属物',
  '尻尾': '尾巴',
  '翼': '翅膀',
  '瞳の色': '瞳孔颜色',
  '補足メモ（日本語）→ LLMに渡す（1回目のプロンプト生成のみ）': '补充说明（日文）→ 发送给LLM（仅首次提示词生成时）',
  '送信POSITIVEプロンプト（生成＋ADDタグ）': '发送POSITIVE提示词（生成+添加标签）',
  '送信ポジティブプロンプト（生成＋追加タグ）': '发送正向提示词（生成+添加标签）',
  'Negativeプロンプト調整': '负向提示词调整',
  '期間タグ（Positiveと共通）': '时期标签（与正向共用）',
  '期間タグ': '时期标签',
  'ポジティブの期間タグ設定がネガティブにも反映されます': '正向的时期标签设置也会反映到负向',
  '品質タグ（人間ベース: NORMAL/LOW/WORST）': '品质标签（人物基础: NORMAL/LOW/WORST）',
  '品質タグ（Pony）': '品质标签（Pony）',
  '品質タグ（人間ベース）': '品质标签（人物基础）',
  'メタタグ': '元标签',
  '安全タグ（単一選択）': '安全标签（单选）',
  'スタイル（@アーティスト名・ネガティブ専用）': '风格（@画师名·仅负向）',
  'スタイル（@アーティスト名）': '风格（@画师名）',
  '新規Add': '新增',
  '追記文（英語）→ プロンプト末尾に直接Add': '追加文本（英文）→ 直接添加到提示词末尾',
  'カスタムタグを入力': '输入自定义标签',
  '例:': '例如：',
  'ワークフローJSONパス（フォールバック）': '工作流JSON路径（回退）',
  'ワークフローJSONが見つかりません:': '找不到工作流JSON:',
  'ワークフローJSONが見つかりません': '找不到工作流JSON',
  'WORKFLOWS/ フォルダから選択（優先）': '从WORKFLOWS/文件夹选择（优先）',
  'LLMを使うならRequired': '使用LLM则必填',
  '任意': '可选',
  'LLMツール統合': 'LLM工具集成',
  '⑧ LLMツール統合': '⑧ LLM工具集成',
  'COMFYUI OUTPUT フォルダ（WEBP変換用・絶対パスで入力推奨）': 'COMFYUI OUTPUT文件夹（用于WEBP转换·建议输入绝对路径）',
  '⑨ COMFYUI OUTPUT フォルダ（WEBP変換用・絶対パス推奨）': '⑨ COMFYUI OUTPUT文件夹（用于WEBP转换·建议绝对路径）',
  '⑨ COMFYUI OUTPUT フォルダ（WEBP変換用、絶対パス推奨）': '⑨ COMFYUI OUTPUT文件夹（用于WEBP转换·建议绝对路径）',
  'WEBP変換用': '用于WEBP转换',
  '絶対パス推奨': '建议绝对路径',
  'ログ保存フォルダ': '日志保存目录',
  '⑩ ログ保存フォルダ': '⑩ 日志保存目录',
  'ログ保持日数': '日志保留天数',
  '⑪ ログ保持日数': '⑪ 日志保留天数',
  'ログレベル': '日志级别',
  '⑫ ログレベル': '⑫ 日志级别',
  'ログフォルダを開く': '打开日志',
  'ログZIPをエクスポート': '导出日志ZIP',
  'プリセットを選択': '选择预设',
  'CharaプリセットDelete': '删除角色预设',
  '送信枚数': '生成张数',
  'PNG生成': '生成PNG',
  'WebP変換': '转换为WebP',
  'ランダム': '随机',
  '固定': '固定',
  '連番': '递增',
  '補足メモ（日本語）': '补充说明（日文）',
  'ワークフロー内のLoraLoader ノードに順番に注入されます。空欄はSkipped。': '按顺序注入到工作流中的LoraLoader节点。空白则跳过。',
  'カードをクリックでスロットに割り当て（再クリックで解除）': '点击卡片分配到插槽（再次点击取消）',
  '未使用': '未使用',
  '強度': '强度',
  'LLMを使用する': '使用LLM',
  '送信POSITIVEプロンプト（生成＋ADDタグ）': '发送POSITIVE提示词（生成+添加标签）',
  '送信ポジティブプロンプト': '发送正向提示词',
  '送信POSITIVEプロンプト': '发送POSITIVE提示词',
  '▸ 送信ポジティブプロンプト': '▸ 发送正向提示词',
  '▸ 送信POSITIVEプロンプト': '▸ 发送POSITIVE提示词',
  'LLM生成POSITIVEプロンプト': 'LLM生成的POSITIVE提示词',
  '送信NEGATIVEプロンプト': '发送NEGATIVE提示词',
  'LLMを使うなら': '如果使用LLM',
  'フォルダから選択': '从文件夹选择',
  'フォルダ': '文件夹',
  '絶対パスで入力推奨': '建议输入绝对路径',
  'IMAGEサイズ（ANIMA推奨）': '图片尺寸（ANIMA推荐）',
  'シード値': '种子值',
  'LoraLoader ノードに順番に注入されます。空欄はSkipped。': '按顺序注入到LoraLoader节点。空白则跳过。',
  'ワークフロー内の': '工作流中的',
  'ノードに順番に注入されます。': '按顺序注入到节点中。',
  '空欄はSkipped。': '空白则跳过。',
  'Period Tags (Positiveと共通)': '时期标签（与正向共用）',
  'Extraタグ（Negative専用・右クリックでDelete）': '额外标签（仅负向·右键删除）',
  '追記文（英語）→ Negativeプロンプト末尾に直接Add': '追加文本（英文）→ 直接添加到负向提示词末尾',
  '新規Add': '新增',
  'タグをAdd': '添加标签',
  '日本語': '日文',
  '入力推奨': '建议输入',
  '例：': '例如：',
  '例:': '例如：',
  '（フォールバック）': '（回退）',
  '（優先）': '（优先）',
  '（任意）': '（可选）',
  '日本語入力（例:': '英文输入（例如：',
  '日本語入力（例：': '英文输入（例如：',
  '英語タグのみ': '仅英文标签',
  'Input in English可': '可输入英文',
  'Input in English可（例:': '可输入英文（例如：',
  'Input in English可（例：': '可输入英文（例如：',
  '日本語入力可': '可输入英文',
  '日本語入力可（例:': '可输入英文（例如：',
  '日本語入力可（例：': '可输入英文（例如：',
  '屋外': '室外',
  '屋内': '室内',
  '特殊': '特殊',
  'ワークフローJSONパス（フォールバック）': '工作流JSON路径（回退）',
  'WORKFLOWS/ フォルダから選択（優先）': '从WORKFLOWS/文件夹选择（优先）',
  'anima_pipeline/workflows/ にJSONを置くと表示されます。選択時にNode IDを自動検出します（ControlNet等が挟まる場合は手動確認を）': '将JSON放入`anima_pipeline/workflows/`后即可显示。选择时会自动检测节点ID（如有ControlNet等节点插入，请手动确认）',
  'にJSONを置くと表示されます。': '放入JSON后即可显示。',
  '選択時にNode IDを自動検出します': '选择时会自动检测节点ID',
  'ControlNet等が挟まる場合は手動確認を': '如有ControlNet等节点插入请手动确认',
  'workflows/ フォルダから選択（優先）': '从workflows/文件夹选择（优先）',
  '　 workflows/ フォルダから選択（優先）': '从workflows/文件夹选择（优先）',
  'WORKFLOWS/ フォルダから選択(PREFERRED)': '从WORKFLOWS/文件夹选择（首选）',
  'LLMを使うなら必須': '使用LLM则必填',
  '⑥ LLMプラットフォーム': '⑥ LLM平台',
  '空欄 または トークン文字列': '留空或填入令牌字符串',
  'Seed（シード値）': '种子值',
  'COMFYUI OUTPUT フォルダ（CONVERT TO WEBP用・絶対パスで入力推奨）': 'COMFYUI OUTPUT文件夹（用于WEBP转换·建议输入绝对路径）',
  '例: 緊張感、幻想的な雰囲気': '例如：紧张感、幻想氛围',
  '例: お姉さんが弟分を甘やかしている雰囲気、ドキドキしている': '例如：姐姐宠溺弟弟的氛围、心跳加速的感觉',
  'ワークフロー内の LoraLoader ノードに順番に注入されます。空欄はスキップ。': '按顺序注入到工作流中的LoraLoader节点。空白则跳过。',
  '空欄はスキップ。': '空白则跳过。',
  '▼ Negativeプロンプト調整': '▼ 负向提示词调整',
  '新規Add (e.g.: bad_artist)': '新增（例如：bad_artist）',
  'タグをAdd (e.g.: bad anatomy)': '添加标签（例如：bad anatomy）',
  '追記文（英語）→ Negativeプロンプト末尾に直接Add': '追加文本（英文）→ 直接添加到负向提示词末尾',
  '追記文（英語）→ プロンプト末尾に直接追加': '追加文本（英文）→ 直接添加到提示词末尾',
  '追記文（英語）→ ネガティブプロンプト末尾に直接追加': '追加文本（英文）→ 直接添加到负向提示词末尾',
  'Negativeプロンプト調整': '负向提示词调整',
  'ネガティブプロンプト調整': '负向提示词调整',
  '▼ ネガティブプロンプト調整': '▼ 负向提示词调整',
  'COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': 'COMFYUI发送POSITIVE提示词（生成+添加标签）',
  'COMFYUI 送信NEGATIVEプロンプト': 'COMFYUI发送NEGATIVE提示词',
  'スタイル（@アーティスト名）': '风格（@画师名）',
  'スタイル（@アーティスト名・ネガティブ専用）': '风格（@画师名·仅负向）',
  '※英語表記': '*请使用英文',
  '※英語表記で入力': '*请使用英文输入',
  '新規追加（例: bad_artist）': '新增（例如：bad_artist）',
  'タグを追加（例: bad anatomy）': '添加标签（例如：bad anatomy）',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '⑥ 额外标签（在角色/场景标签后添加）',
  '⑦ 追記文（英語）→ プロンプト末尾に直接Add': '⑦ 追加文本（英文）→ 直接添加到提示词末尾',
  '⑦ 追記文（英語）→ Negativeプロンプト末尾に直接Add': '⑦ 追加文本（英文）→ 直接添加到负向提示词末尾',
  '⑦ 追記文（英語）→ ネガティブプロンプト末尾に直接追加': '⑦ 追加文本（英文）→ 直接添加到负向提示词末尾',
  'アクセサリー': '配饰',
  'エフェクト': '特效',
  '衣装': '服装',
  'オッドアイ': '异色瞳',
  '左目': '左眼',
  '右目': '右眼',
  '全体': '全部',
  '⑫ 脚': '⑫ 腿部',
  'プリセット名を入力してください': '请输入预设名称',
  '同名のプリセットが存在します。上書きしますか？': '存在同名预设，是否覆盖？',
  'プリセット管理（Scene/Camera/Quality/LoRA/Composite）': '预设管理（场景/镜头/品质/LoRA/合成）',
  '小': '小',
  '低': '矮',
  '高': '高',
  '大柄': '大只',
  '痩': '瘦',
  '太': '胖',
  '開き': '睁开',
  '半目': '半睁',
  '閉じ': '闭合',
  'LORA一覧取得': '获取LORA列表',
  '例: スペシャルウィーク': '例如：Special Week',
  '例: ウマ娘、ブルアカ': '例如：赛马娘、碧蓝档案',
  '青肌': '蓝色皮肤',
  '緑肌': '绿色皮肤',
  '白 ドレス': '白色连衣裙',
  'お団子': '丸子头',
  'ドレッド': '脏辫',
  'グラデーション': '渐变',
  'メッシュ': '网格',
  '日本語入力可（例: 青肌、緑肌）': '可输入英文（例如：blue skin, green skin）',
  '日本語入力可（例: 白 ドレス、maid_apron）': '可输入英文（例如：white dress, maid_apron）',
  '日本語入力可（例: お団子、ドレッド）': '可输入英文（例如：hair bun, dreadlocks）',
  '日本語入力可（例: グラデーション、メッシュ）': '可输入英文（例如：gradient, mesh）',
  '持ち物': '手持物',
  '⑯ 持ち物': '⑯ 手持物',
  '俯瞰': '俯视',
  '仰視': '仰视',
  '品質タグ（PonyV7 aestheticベース）': '品质标签（基于PonyV7 aesthetic）',
  '▸ ComfyUI 送信ネガティブプロンプト': '▸ ComfyUI发送NEGATIVE提示词',
  '▸ 送信ネガティブプロンプト': '▸ 发送NEGATIVE提示词',
  '▼ ⑥ Extraタグ（ネガティブ専用・右クリックで削除）': '▼ ⑥ 额外标签（仅负向·右键删除）',
  '性別 *': '性别 *',
  '年齢': '年龄',
  '口': '嘴',
  '⑤ 口': '⑤ 嘴',
  '耳': '耳朵',
  '廃墟': '废墟',
  'Period Tags (Positiveと共通)': '时期标签（与正向共用）',
  '① Period Tags (Positiveと共通)': '① 时期标签（与正向共用）',
  'Positiveと共通': '与正向共用',
  '（複数作品の場合はCharaごとに入力）': '（多个作品时按角色分别输入）',
  '(複数作品の場合はCharaごとに入力)': '（多个作品时按角色分别输入）',
  '(複数作品の場合はChara': '（多个作品时按角色',
  '（複数作品の場合はChara': '（多个作品时按角色',
  '複数作品の場合はCharaごとに入力': '多个作品时按角色分别输入',
  '（複数作品の場合はキャラごとに入力）': '（多个作品时按角色分别输入）',
  '複数作品の場合はキャラごとに入力': '多个作品时按角色分别输入',
  '① Period Tags (Positiveと共通)': '① 时期标签（与正向共用）',
  '▼ ① Period Tags (Positiveと共通)': '▼ ① 时期标签（与正向共用）',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '⑥ 额外标签（在角色/场景标签后添加）',
  '▼ ⑥ Extraタグ（Chara・Sceneタグの後にAdd）': '▼ ⑥ 额外标签（在角色/场景标签后添加）',
  '⑥ Extraタグ（Chara・Sceneタグの後にAdd)': '⑥ 额外标签（在角色/场景标签后添加）',
  '▼ ⑥ Extraタグ（Chara・Sceneタグの後にAdd)': '▼ ⑥ 额外标签（在角色/场景标签后添加）',
  '⑥ Extraタグ（キャラ・シーンタグの後に追加）': '⑥ 额外标签（在角色/场景标签后添加）',
  '▼ ⑥ Extraタグ（キャラ・シーンタグの後に追加）': '▼ ⑥ 额外标签（在角色/场景标签后添加）',
  'LLM生成POSITIVEプロンプト': 'LLM生成的POSITIVE提示词',
  '▸ LLM生成POSITIVEプロンプト': '▸ LLM生成的POSITIVE提示词',
  'COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': 'COMFYUI发送POSITIVE提示词（生成+添加标签）',
  'ComfyUI 送信ポジティブプロンプト（生成＋追加タグ）': 'ComfyUI发送正向提示词（生成+添加标签）',
  'COMFYUI 送信ポジティブプロンプト（生成＋追加タグ）': 'COMFYUI发送正向提示词（生成+添加标签）',
  '▸ ComfyUI 送信ポジティブプロンプト（生成＋追加タグ）': '▸ ComfyUI发送正向提示词（生成+添加标签）',
  '▸ COMFYUI 送信ポジティブプロンプト（生成＋追加タグ）': '▸ COMFYUI发送正向提示词（生成+添加标签）',
  '送信Positiveプロンプト': '发送正向提示词',
  '▸ 送信Positiveプロンプト': '▸ 发送正向提示词',
  'LLM生成ポジティブプロンプト': 'LLM生成的正向提示词',
  '▸ LLM生成ポジティブプロンプト': '▸ LLM生成的正向提示词',
  'ポジティブ': '正向',
  '追加タグ': '添加标签',
  'COMFYUI 送信POSITIVEプロンプト（生成+ADDタグ）': 'COMFYUI发送POSITIVE提示词（生成+添加标签）',
  '▸ COMFYUI 送信POSITIVEプロンプト（生成＋ADDタグ）': '▸ COMFYUI发送POSITIVE提示词（生成+添加标签）',
  '▸ COMFYUI 送信POSITIVEプロンプト（生成+ADDタグ）': '▸ COMFYUI发送POSITIVE提示词（生成+添加标签）',
  '⑰ 画面TOP/BOTTOM': '⑰ 画面上下',
  '▼ ⑰ 画面TOP/BOTTOM': '▼ ⑰ 画面上下',
  'なし': '无',
  '🗑️ CharaプリセットDelete': '🗑️ 删除角色预设',
  'IMAGEサイズ（ANIMA推奨）': '图片尺寸（ANIMA推荐）',
  'IMAGEサイズ': '图片尺寸',
  'ANIMA推奨': 'ANIMA推荐',
  'プリセットDelete': '删除预设',
  'プリセット': '预设',
  'サイズ': '尺寸',
  '推奨': '推荐',
  '黒': '黑色',
  '濃茶': '深棕色',
  '茶': '棕色',
  '薄茶': '浅棕色',
  '赤': '红色',
  '桃': '粉色',
  '橙': '橙色',
  '薄桃': '浅粉色',
  '黄': '黄色',
  '緑': '绿色',
  '薄緑': '浅绿色',
  '水緑': '青色',
  '青': '蓝色',
  '水色': '浅蓝色',
  '紺': '藏青色',
  '灰': '灰色',
  '銀': '银色',
  '紫': '紫色',
  '薄紫': '浅紫色',
  '白': '白色',
  '金': '金色',
  'マルチ': '多色',
  '🔄 LORA一覧取得': '🔄 获取LORA列表',
  'ウマ娘': '赛马娘',
  '場所を自由入力（例: 競馬場、魔法学校）': '自由输入地点（例如：赛马场、魔法学校）',
  '画面上下': '画面上下',
  '⑰ 画面上下': '⑰ 画面上下',
  '貧乳': '贫乳',
  '中': '中',
  '大': '大',
  '爆': '巨',
  '超爆': '超巨',
  '短い': '短',
  '長い': '长',
  'ローアングル': '低角度',
  'ハイアングル': '高角度',
  '魚眼': '鱼眼',
  '獣尻尾': '兽尾',
  '猫尻尾': '猫尾',
  '犬尻尾': '犬尾',
  '狐尻尾': '狐尾',
  '龍尻尾': '龙尾',
  '悪魔尻尾': '恶魔尾',
  '天使翼': '天使翅膀',
  '悪魔翼': '恶魔翅膀',
  '龍翼': '龙翅膀',
  '羽翼': '羽翼',
  '機械翼': '机械翅膀',
  'ショート': '短',
  'ミディアム': '中',
  'ロング': '长',
  '超ロング': '超长',
  'ボブ': '波波头',
  'ストレート': '直发',
  'ウェーブ': '波浪',
  'クセ毛': '卷发',
  '縦ロール': '竖卷',
  'お団子': '丸子头',
  'ぱっつん': '齐刘海',
  '流し前髪': '斜刘海',
  'サイド流し': '侧分'
};

function humanizeValue(v){
  const s = String(v||'').trim();
  if(!s) return '';
  return s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function hasAsciiWord(v){
  return /^[a-z0-9_ -]+$/i.test(String(v||''));
}

function buildAutoLabelMapFromOptions(root){
  const map = {};
  const conflicts = new Set();
  const walk = (node)=>{
    if(Array.isArray(node)){
      node.forEach(walk);
      return;
    }
    if(node && typeof node === 'object'){
      if(typeof node.label === 'string' && typeof node.v === 'string'){
        const label = node.label.trim();
        const v = node.v.trim();
        if(label && v && hasAsciiWord(v)){
          const hv = humanizeValue(v);
          if(map[label] && map[label] !== hv){
            conflicts.add(label);
          }else if(!map[label]){
            map[label] = hv;
          }
        }
      }
      Object.values(node).forEach(walk);
    }
  };
  walk(root);
  conflicts.forEach((k)=>{ delete map[k]; });
  return map;
}

const AUTO_I18N_MAP_EN = buildAutoLabelMapFromOptions(typeof __OPT__ === 'object' ? __OPT__ : {});
const I18N_MAP_EN = Object.assign({}, AUTO_I18N_MAP_EN, BASE_I18N_MAP_EN);

const I18N_MAP_JA = Object.fromEntries(
  Object.entries(I18N_MAP_EN).map(([ja, en]) => [en, ja])
);

const AUTO_I18N_MAP_ZH = buildAutoLabelMapFromOptions(typeof __OPT__ === 'object' ? __OPT__ : {});
const I18N_MAP_ZH = Object.assign({}, AUTO_I18N_MAP_ZH, BASE_I18N_MAP_ZH);

const I18N_MAP_JA_FROM_ZH = Object.fromEntries(
  Object.entries(I18N_MAP_ZH).map(([ja, zh]) => [zh, ja])
);

function normalizeI18nKey(s){
  return String(s ?? '')
    .replace(/[（]/g, '(')
    .replace(/[）]/g, ')')
    .replace(/[＋]/g, '+')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildNormalizedExactMap(dict){
  const out = {};
  for(const [k,v] of Object.entries(dict)){
    const nk = normalizeI18nKey(k);
    if(nk && !out[nk]) out[nk] = v;
  }
  return out;
}

function buildReplacers(dict){
  return Object.entries(dict)
    .filter(([from, to]) => from && to && from !== to)
    .sort((a, b) => b[0].length - a[0].length);
}
const I18N_REPLACERS_EN = buildReplacers(I18N_MAP_EN);
const I18N_REPLACERS_JA = buildReplacers(I18N_MAP_JA);
const I18N_REPLACERS_ZH = buildReplacers(I18N_MAP_ZH);
const I18N_EXACT_NORM_EN = buildNormalizedExactMap(I18N_MAP_EN);
const I18N_EXACT_NORM_JA = buildNormalizedExactMap(I18N_MAP_JA);
const I18N_EXACT_NORM_ZH = buildNormalizedExactMap(I18N_MAP_ZH);

let __i18nObserver = null;
const __hasJaLike = /[ぁ-んァ-ン一-龠々〆ヵヶ]/;

function i18nReplace(text){
  let out = String(text ?? '');
  if(!out) return out;
  if(currentLang === 'ja'){
    const s = out.trim();
    let m = s.match(/^LLM:\s*Done$/i);
    if(m) return 'LLM: 完了';
    m = s.match(/^LLM:\s*Skipped$/i);
    if(m) return 'LLM: スキップ';
    m = s.match(/^LLM:\s*Generating prompt\.\.\.$/i);
    if(m) return 'LLM: プロンプト生成中...';
    m = s.match(/^ComfyUI:\s*(\d+)\s*queued$/i);
    if(m) return `ComfyUI: ${m[1]} 件キュー投入`;
    m = s.match(/^ComfyUI:\s*Queued\s*\((\d+)\)$/i);
    if(m) return `ComfyUI: キュー投入 (${m[1]})`;
    m = s.match(/^ComfyUI:\s*Generating\.\.\.\s*(\d+)%$/i);
    if(m) return `ComfyUI: 生成中... ${m[1]}%`;
    m = s.match(/^ComfyUI:\s*Generating\.\.\.$/i);
    if(m) return 'ComfyUI: 生成中...';
  }
  if(currentLang === 'zh'){
    const s = out.trim();
    let m = s.match(/^LLM:\s*Done$/i);
    if(m) return 'LLM: 完成';
    m = s.match(/^LLM:\s*Skipped$/i);
    if(m) return 'LLM: 已跳过';
    m = s.match(/^LLM:\s*Generating prompt\.\.\.$/i);
    if(m) return 'LLM: 正在生成提示词...';
    m = s.match(/^ComfyUI:\s*(\d+)\s*queued$/i);
    if(m) return `ComfyUI: ${m[1]} 个任务已加入队列`;
    m = s.match(/^ComfyUI:\s*Queued\s*\((\d+)\)$/i);
    if(m) return `ComfyUI: 已加入队列 (${m[1]})`;
    m = s.match(/^ComfyUI:\s*Generating\.\.\.\s*(\d+)%$/i);
    if(m) return `ComfyUI: 生成中... ${m[1]}%`;
    m = s.match(/^ComfyUI:\s*Generating\.\.\.$/i);
    if(m) return 'ComfyUI: 生成中...';
  }
  // Normalize: if the text is an EN or ZH translation value (happens when switching
  // languages while the DOM already holds translated text), convert it back to the
  // JA source key so we can translate into the target language correctly.
  const jaFromEn = I18N_MAP_JA[out];
  if(jaFromEn){ out = jaFromEn; }
  else{
    const jaFromZh = I18N_MAP_JA_FROM_ZH[out];
    if(jaFromZh){ out = jaFromZh; }
  }

  // JA is the source language; if target is JA, we're done.
  if(currentLang === 'ja') return out;

  // Translate JA -> target (EN or ZH)
  const dict = (currentLang === 'zh') ? I18N_MAP_ZH : I18N_MAP_EN;
  if(dict[out]) return dict[out];
  const normExact = (currentLang === 'zh') ? I18N_EXACT_NORM_ZH : I18N_EXACT_NORM_EN;
  const nk = normalizeI18nKey(out);
  if(normExact[nk]) return normExact[nk];
  if(currentLang === 'en' && !__hasJaLike.test(out) && !out.includes('（長押しで選択）')) return out;
  const replacers = ((currentLang === 'zh') ? I18N_REPLACERS_ZH : I18N_REPLACERS_EN)
    .filter(([from]) => from.length >= 2);
  for(const [from, to] of replacers){
    out = out.split(from).join(to);
  }

  // Fallback for mixed JA/EN fragments when exact dictionary keys miss.
  if(currentLang === 'en'){
    out = out
      .split('Preset??').join('Preset Manager')
      .split('???????').join('Preset Manager')
      .split('??????????????').join('Preset List (Thumbnails)')
      .split('??Add').join('Add New')
      .split('????').join('Add New');
  }

  return out;
}

const _nativeAlert = window.alert.bind(window);
const _nativeConfirm = window.confirm.bind(window);
const _nativePrompt = window.prompt.bind(window);
window.alert = (msg)=>_nativeAlert(i18nReplace(msg));
window.confirm = (msg)=>_nativeConfirm(i18nReplace(msg));
window.prompt = (msg, def='')=>_nativePrompt(i18nReplace(msg), i18nReplace(def));

function applyI18nToElement(el){
  if(!el) return;
  if(el.nodeType === Node.TEXT_NODE){
    if(el.parentElement && !['SCRIPT','STYLE'].includes(el.parentElement.tagName)){
      if(el.parentElement.closest && el.parentElement.closest('[data-no-i18n="1"]')) return;
      const nextText = i18nReplace(el.nodeValue);
      if(nextText !== el.nodeValue) el.nodeValue = nextText;
    }
    return;
  }
  if(el.nodeType !== Node.ELEMENT_NODE) return;
  if(el.closest && el.closest('[data-no-i18n="1"]')) return;
  if(el.title){
    const nextTitle = i18nReplace(el.title);
    if(nextTitle !== el.title) el.title = nextTitle;
  }
  if(el.placeholder){
    const nextPh = i18nReplace(el.placeholder);
    if(nextPh !== el.placeholder) el.placeholder = nextPh;
  }
  if(el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit') && el.value){
    const nextValue = i18nReplace(el.value);
    if(nextValue !== el.value) el.value = nextValue;
  }
  for(const c of el.childNodes) applyI18nToElement(c);
}

function refreshLangButtons(){
  const jaBtn = document.getElementById('langBtnJa');
  const enBtn = document.getElementById('langBtnEn');
  const zhBtn = document.getElementById('langBtnZh');
  if(jaBtn) jaBtn.classList.toggle('active', currentLang === 'ja');
  if(enBtn) enBtn.classList.toggle('active', currentLang === 'en');
  if(zhBtn) zhBtn.classList.toggle('active', currentLang === 'zh');
}

function setLang(lang){
  let nextLang;
  if(lang === 'ja') nextLang = 'ja';
  else if(lang === 'zh') nextLang = 'zh';
  else nextLang = 'en';
  if(nextLang === currentLang) return;
  currentLang = nextLang;
  localStorage.setItem(__LANG_STORAGE_KEY__, currentLang);
  document.documentElement.lang = currentLang === 'ja' ? 'ja' : (currentLang === 'zh' ? 'zh-CN' : 'en');
  refreshLangButtons();
  applyI18nToElement(document.body);
  if(typeof updateNamedSessionsTitle === 'function') updateNamedSessionsTitle();
  if(typeof refreshNamedSessions === 'function') refreshNamedSessions();
  setupI18nObserver();
}
window.setLang = setLang;

function teardownI18nObserver(){
  if(__i18nObserver){
    try{ __i18nObserver.disconnect(); }catch(_){}
    __i18nObserver = null;
  }
}

function setupI18nObserver(){
  teardownI18nObserver();
  __i18nObserver = new MutationObserver((muts)=>{
    for(const m of muts){
      if(m.type === 'characterData'){
        applyI18nToElement(m.target);
      }else if(m.type === 'childList'){
        m.addedNodes.forEach(n => applyI18nToElement(n));
      }
    }
  });
  __i18nObserver.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true
  });
}

function scheduleI18nIfNeeded(){
  const run = ()=>{
    applyI18nToElement(document.body);
    setupI18nObserver();
  };
  if('requestIdleCallback' in window){
    window.requestIdleCallback(run, {timeout: 1200});
  }else{
    setTimeout(run, 0);
  }
}

Object.assign(BASE_I18N_MAP_EN, {
  'キューに追加': 'Add to Queue',
  '一時停止': 'Pause Queue',
  '再開': 'Resume Queue',
  '完了をクリア': 'Clear Completed',
  '待機中': 'Queued',
  '実行中': 'Generating',
  '完了': 'Done',
  '失敗': 'Failed',
  '再実行': 'Re-run',
  'キューが空です': 'Queue is empty',
  'キュー実行中は単発生成できません。先に一時停止してください。': 'Cannot generate while queue is running. Pause the queue first.',
  'キューへの追加に失敗しました': 'Failed to add job to queue',
  'キューのクリアに失敗しました': 'Failed to clear queue',
  'ジョブ削除に失敗しました': 'Failed to delete job',
  '再実行の追加に失敗しました': 'Failed to add rerun job',
  '並び替えに失敗しました': 'Failed to reorder queue',
});

Object.assign(BASE_I18N_MAP_ZH, {
  'キューに追加': '添加到队列',
  '一時停止': '暂停队列',
  '再開': '恢复队列',
  '完了をクリア': '清除已完成',
  '待機中': '等待中',
  '実行中': '生成中',
  '完了': '已完成',
  '失敗': '失败',
  '再実行': '重新运行',
  'キューが空です': '队列为空',
  'キュー実行中は単発生成できません。先に一時停止してください。': '队列运行时无法单次生成，请先暂停队列。',
  'キューへの追加に失敗しました': '添加到队列失败',
  'キューのクリアに失敗しました': '清除队列失败',
  'ジョブ削除に失敗しました': '删除任务失败',
  '再実行の追加に失敗しました': '重新运行添加失败',
  '並び替えに失敗しました': '重新排序失败',
});

document.addEventListener('DOMContentLoaded', ()=>{
  document.documentElement.lang = currentLang === 'ja' ? 'ja' : (currentLang === 'zh' ? 'zh-CN' : 'en');
  refreshLangButtons();
  // Startup fast-path: Japanese mode skips full-DOM i18n walk.
  scheduleI18nIfNeeded();
});

# Design QA — 传输一级导航

- Source visual truth: target buttons `/var/folders/11/zcws9_xj6sv750d6864kknwh0000gn/T/codex-clipboard-d39edbda-45db-4ecb-9b99-5ecfdbc1b7d2.png`; transfer placement `/var/folders/11/zcws9_xj6sv750d6864kknwh0000gn/T/codex-clipboard-022eeaf7-8e8b-4f4b-9657-7a9c399d6672.png`.
- Implementation: `http://localhost:5173/#retention`, Codex in-app Browser tab `2`.
- Implementation screenshot evidence: current-run in-app Browser capture shown inline during QA; the capture API did not expose a writable local screenshot path.
- Source pixels: 597 × 211 and 565 × 361.
- Implementation capture: 1536 × 1168 viewport; fixed application canvas 1440 × 900 at 1× density.
- State: Transfer selected, Download primary navigation selected, In Progress selected.

## Full-view comparison evidence

The implementation keeps only `迅雷云盘 + 传输` in the top product bar, removing the crossed-out category links. The duplicate `传输` heading in the left rail is also removed. Upload/Download navigation and the right-side action row now begin 8 px below the top bar, matching the compact vertical rhythm in the spacing reference.

## Focused region comparison evidence

The focused comparison confirms the top title retains its 14 px size, 600 weight, and 25 px line height, while no category links remain beside it. The left navigation begins directly with Upload and Download, and the primary action button aligns horizontally with the first navigation row. The previous 60 px blank spacer has been removed.

## Required fidelity surfaces

- Fonts and typography: 15 px section title, 13 px primary-navigation labels, 11 px count badges, 12 px action labels, and 13 px table text preserve the existing Xunlei hierarchy.
- Spacing and layout rhythm: 152 px local navigation, 60 px top offset, 40 px navigation rows, 4 px row gap, 24 px content inset, and existing 64 px task rows provide a stable dense desktop rhythm.
- Colors and visual tokens: the existing neutral surface, dark primary action, light secondary action, and Xunlei blue selected/progress tokens are reused.
- Image quality and asset fidelity: all visible icons are existing raster assets; active-state color is applied to the asset rather than recreating an icon in CSS. Browser inspection found no broken images.
- Copy and content: Upload and Download are clearly separated; each shows its total task count, while In Progress and Completed retain per-view counts.
- States and interactions: Upload and Download navigation switching was tested. Each destination updates selection, counts, tab counts, and task rows correctly.
- Viewport: the application remains fixed at 1440 × 900 as required by the demo.

## Findings

No actionable P0, P1, or P2 mismatch remains in the requested transfer-navigation scope.

## Comparison history

1. Initial implementation used a right-side segmented Upload/Download switch, which did not express the requested primary-navigation hierarchy.
2. First navigation pass introduced the left rail, but an existing unscoped global `nav` rule pushed it down by 246 px, creating a large blank region.
3. Final fix scoped the legacy rule to `aside nav`, restoring top alignment. Post-fix browser evidence shows the Transfer title, Upload and Download rows, selected state, and count badges in the correct positions.
4. Upload and Download were both selected in the browser after the fix; task content and per-tab counts updated correctly.
5. The annotated `全部` entry was replaced with the non-interactive `传输` title. Post-fix browser evidence confirms the title occupies the same top-bar slot with matching baseline and weight.
6. The crossed-out category links and duplicate left-rail heading were removed, and the content padding was reduced from 60 px to 8 px. Final browser evidence confirms the compact spacing matches the supplied reference.
7. The explicit white backgrounds on `.transfer-main` and `.transfer-page` were removed. Final browser evidence confirms the transfer surface now inherits the application's existing background treatment without affecting controls or list readability.
8. The four annotated horizontal gutters were normalized to 20 px: both sides of the local transfer navigation and both sides of the task content. Final browser evidence confirms consistent edge alignment across navigation, actions, tabs, headers, and list rows.
9. The first 20 px pass double-counted the navigation button's own 10 px inset, producing a 30 px visual content offset. The rail padding was corrected to 10 px so rail padding plus button padding equals an exact 20 px visual gutter. The right task pane remains a direct 20 px inset.
10. The transfer actions were aligned with the file-page controls: `上传文件` remains the dark primary action and `BT/种子链接下载` replaces the generic download action with the same icon, typography, spacing, and magnetic/torrent dialog used by the file page. Browser interaction confirmed the dialog opens and closes correctly.

## Implementation checklist

- [x] Added left-side Transfer primary navigation.
- [x] Separated Upload and Download as peer destinations.
- [x] Added live total counts for both destinations.
- [x] Preserved per-status In Progress and Completed counts.
- [x] Removed the redundant right-side direction switch.
- [x] Preserved existing Xunlei typography, buttons, colors, task list, and fixed canvas.
- [x] Replaced the top-bar `全部` filter with the `传输` section title.
- [x] Removed transfer-page category links and the duplicate left-rail title.
- [x] Matched the compact 8 px top spacing for navigation and action controls.
- [x] Removed the transfer module's additional white background layers.
- [x] Standardized all annotated horizontal gutters to 20 px.
- [x] Accounted for the navigation button's 10 px internal padding in the left-gutter calculation.
- [x] Reused the file-page Upload and BT/Seed Link Download actions and interaction.
- [x] Browser interaction check, production build, and diff whitespace check pass.

final result: passed

export const initialItems = [
  {id:'recycle-bin', parentId:'system', name:'回收站', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.23 10:20', lastOpenedAt:'2026.09.23', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'invalid-files', parentId:'system', name:'失效文件', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.23 10:20', lastOpenedAt:'2026.09.23', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'large-files', parentId:'system', name:'超大文件管理', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.23 10:20', lastOpenedAt:'2026.09.23', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'recycle-1', parentId:'recycle-bin', name:'旧版活动海报.png', itemType:'file', category:'image', size:'2.8MB', modifiedAt:'2026.09.23 10:20', lastOpenedAt:'2026.09.23', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/design-desk.webp'},
  {id:'recycle-2', parentId:'recycle-bin', name:'项目会议录音.mp3', itemType:'file', category:'audio', size:'18.6MB', modifiedAt:'2026.09.22 16:45', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'recycle-3', parentId:'recycle-bin', name:'旧版需求说明书.pdf', itemType:'file', category:'document', size:'5.4MB', modifiedAt:'2026.09.21 09:30', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'recycle-4', parentId:'recycle-bin', name:'历史项目视频源文件.zip', itemType:'file', category:'archive', size:'36.8G', modifiedAt:'2026.09.20 14:10', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'recycle-5', parentId:'recycle-bin', name:'旧版影像素材归档.rar', itemType:'file', category:'archive', size:'28.6G', modifiedAt:'2026.09.18 10:35', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'recycle-6', parentId:'recycle-bin', name:'2024年度素材全量归档.7z', itemType:'file', category:'archive', size:'63.2G', modifiedAt:'2026.09.15 16:20', lastOpenedAt:'2026.09.15', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'vault', name:'超级保险箱', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.12 12:44', lastOpenedAt:'2026.09.20', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'resources', name:'我的资源', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.12 12:44', lastOpenedAt:'2026.09.19', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'resource-video-library', parentId:'resources', name:'影视素材库_2026.zip', itemType:'file', category:'archive', size:'72.4G', modifiedAt:'2026.09.23 18:20', lastOpenedAt:'2026.09.23', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-photo-library', parentId:'resources', name:'摄影原片合集_秋季', itemType:'file', category:'image', size:'64.8G', modifiedAt:'2026.09.22 15:30', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'city'},
  {id:'resource-delivery', parentId:'resources', name:'项目交付资源归档.zip', itemType:'file', category:'archive', size:'59.6G', modifiedAt:'2026.09.21 11:15', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-design-source', parentId:'resources', name:'设计源文件备份.psd', itemType:'file', category:'document', size:'47.8G', modifiedAt:'2026.09.20 16:40', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-expired-backup', parentId:'resources', name:'过期设备备份_2025.tar', itemType:'file', category:'archive', size:'3.8G', modifiedAt:'2026.09.18 09:10', lastOpenedAt:'2026.09.18', source:'backup', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-expired-mobile', parentId:'resources', name:'失效移动端备份_2025.zip', itemType:'file', category:'archive', size:'27.4G', modifiedAt:'2026.09.16 13:25', lastOpenedAt:'2026.09.16', source:'backup', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-expired-project', parentId:'resources', name:'过期项目全量备份.tar', itemType:'file', category:'archive', size:'22.8G', modifiedAt:'2026.09.15 18:50', lastOpenedAt:'2026.09.15', source:'backup', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-expired-cloud', parentId:'resources', name:'失效云端镜像备份_2024.tar', itemType:'file', category:'archive', size:'41.9G', modifiedAt:'2026.09.12 08:40', lastOpenedAt:'2026.09.12', source:'backup', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-master-footage', parentId:'resources', name:'纪录片母版素材库_4K.zip', itemType:'file', category:'archive', size:'240.0G', modifiedAt:'2026.09.19 20:15', lastOpenedAt:'2026.09.19', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-normal-team', parentId:'resources', name:'团队协作文件归档_第三季度.zip', itemType:'file', category:'archive', size:'48.6G', modifiedAt:'2026.09.17 14:25', lastOpenedAt:'2026.09.17', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-normal-photos', parentId:'resources', name:'品牌拍摄精选原片合集.zip', itemType:'file', category:'archive', size:'46.2G', modifiedAt:'2026.09.14 11:05', lastOpenedAt:'2026.09.14', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'resource-normal-assets', parentId:'resources', name:'产品资源交付包_2026Q3.zip', itemType:'file', category:'archive', size:'42.8G', modifiedAt:'2026.09.10 17:40', lastOpenedAt:'2026.09.10', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'transfers', name:'我的转存', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.12 12:44', lastOpenedAt:'2026.09.18', source:'system', isSystem:true, selectable:false, kind:'folder'},
  {id:'work', name:'工作内容备份', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.12 12:44', lastOpenedAt:'2026.09.12', source:'backup', isSystem:false, selectable:true, kind:'folder'},
  {id:'movie-1', name:'电影天堂_给阿嫲的情书_资源仅供交流_4K.mp4', itemType:'file', category:'video', size:'2.5G', modifiedAt:'2026.09.12 12:44', lastOpenedAt:'2026.09.21', source:'transfer', isSystem:false, selectable:true, kind:'movie', cover:'/assets/video-covers/family-letter.webp', video:'/assets/video-samples/flower.mp4'},
  {id:'movie-2', name:'城市晨跑_0923.mp4', itemType:'file', category:'video', size:'2.1MB', modifiedAt:'2026.09.11 12:44', lastOpenedAt:'2026.09.17', source:'upload', isSystem:false, selectable:true, kind:'cat', cover:'/assets/video-covers/city-run.webp', video:'/assets/video-samples/big-buck-bunny.mp4'},
  {id:'image-1', name:'咖啡馆午后.png', itemType:'file', category:'image', size:'781.4KB', modifiedAt:'2026.09.10 12:44', lastOpenedAt:'2026.09.14', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/cafe-afternoon.webp'},
  {id:'audio-1', name:'《小宝宝快睡觉》原唱.mp3', itemType:'file', category:'audio', size:'1.5MB', modifiedAt:'2026.09.09 12:44', lastOpenedAt:'2026.09.09', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'excel-1', name:'季度运营数据汇总.xlsx', itemType:'file', category:'document', size:'4.8MB', modifiedAt:'2026.09.08 12:44', lastOpenedAt:'2026.09.08', source:'upload', isSystem:false, selectable:true, kind:'excel'},
  {id:'pdf-1', name:'产品需求说明书.pdf', itemType:'file', category:'document', size:'12.6MB', modifiedAt:'2026.09.07 12:44', lastOpenedAt:'2026.09.07', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'ppt-1', name:'品牌发布会演示.pptx', itemType:'file', category:'document', size:'8.3MB', modifiedAt:'2026.09.06 12:44', lastOpenedAt:'2026.09.06', source:'upload', isSystem:false, selectable:true, kind:'ppt'},
  {id:'word-1', name:'迅雷网盘使用指南.docx', itemType:'file', category:'document', size:'2.4MB', modifiedAt:'2026.09.05 12:44', lastOpenedAt:'2026.09.05', source:'upload', isSystem:false, selectable:true, kind:'word'},
  {id:'movie-3', name:'环海自驾旅行素材.mp4', itemType:'file', category:'video', size:'186MB', modifiedAt:'2026.09.04 12:44', lastOpenedAt:'2026.09.04', source:'upload', isSystem:false, selectable:true, kind:'movie', cover:'/assets/video-covers/coastal-trip.webp', video:'/assets/video-samples/sintel.mp4'},
  {id:'movie-4', name:'花园慢镜头.mp4', itemType:'file', category:'video', size:'18.4MB', modifiedAt:'2026.09.03 18:08', lastOpenedAt:'2026.09.03', source:'upload', isSystem:false, selectable:true, kind:'movie', video:'/assets/video-samples/flower.mp4'},
  {id:'movie-5', name:'森林奇遇预告.mp4', itemType:'file', category:'video', size:'42.7MB', modifiedAt:'2026.09.03 11:25', lastOpenedAt:'2026.09.03', source:'transfer', isSystem:false, selectable:true, kind:'movie', video:'/assets/video-samples/big-buck-bunny.mp4'},
  {id:'movie-6', name:'奇幻短片片段.mp4', itemType:'file', category:'video', size:'26.8MB', modifiedAt:'2026.09.02 20:16', lastOpenedAt:'2026.09.02', source:'transfer', isSystem:false, selectable:true, kind:'movie', video:'/assets/video-samples/sintel.mp4'},
  {id:'image-2', name:'山间旅行_2026.png', itemType:'file', category:'image', size:'3.2MB', modifiedAt:'2026.09.03 12:44', lastOpenedAt:'2026.09.03', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/mountain-trail.webp'},
  {id:'image-3', name:'雨后街景.png', itemType:'file', category:'image', size:'5.7MB', modifiedAt:'2026.09.02 19:43', lastOpenedAt:'2026.09.02', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/rainy-city.webp'},
  {id:'image-4', name:'手冲咖啡记录.png', itemType:'file', category:'image', size:'4.1MB', modifiedAt:'2026.09.02 09:14', lastOpenedAt:'2026.09.02', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/pour-over-coffee.webp'},
  {id:'zip-1', name:'安装包_backup.zip', itemType:'file', category:'archive', size:'524MB', modifiedAt:'2026.09.02 12:44', lastOpenedAt:'2026.09.02', source:'backup', isSystem:false, selectable:true, kind:'blank'},
  {id:'project-folder', name:'项目资料', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.22 16:30', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'album-folder', name:'旅行相册', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.21 09:18', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'course-folder', name:'学习资料', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.20 14:46', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'project-1', parentId:'project-folder', name:'产品需求文档_v3.pdf', itemType:'file', category:'document', size:'8.6MB', modifiedAt:'2026.09.22 16:30', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'project-2', parentId:'project-folder', name:'项目复盘汇报.pptx', itemType:'file', category:'document', size:'15.4MB', modifiedAt:'2026.09.22 13:20', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'ppt'},
  {id:'project-3', parentId:'project-folder', name:'需求排期表.xlsx', itemType:'file', category:'document', size:'2.8MB', modifiedAt:'2026.09.21 18:40', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'excel'},
  {id:'project-4', parentId:'project-folder', name:'宣传片终版.mp4', itemType:'file', category:'video', size:'684MB', modifiedAt:'2026.09.21 10:10', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'movie'},
  {id:'project-5', parentId:'project-folder', name:'交付资源包.zip', itemType:'file', category:'archive', size:'1.2G', modifiedAt:'2026.09.20 16:16', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'album-1', parentId:'album-folder', name:'海边日落.png', itemType:'file', category:'image', size:'4.6MB', modifiedAt:'2026.09.21 09:18', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/family-beach.webp'},
  {id:'album-2', parentId:'album-folder', name:'山间旅行.mov', itemType:'file', category:'video', size:'326MB', modifiedAt:'2026.09.20 20:05', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'cat'},
  {id:'album-3', parentId:'album-folder', name:'拍摄原图合集.zip', itemType:'file', category:'archive', size:'860MB', modifiedAt:'2026.09.19 12:20', lastOpenedAt:'2026.09.19', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'album-4', parentId:'album-folder', name:'旅行清单.docx', itemType:'file', category:'document', size:'1.1MB', modifiedAt:'2026.09.18 09:30', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'word'},
  {id:'course-1', parentId:'course-folder', name:'设计系统课程.mp4', itemType:'file', category:'video', size:'1.8G', modifiedAt:'2026.09.20 14:46', lastOpenedAt:'2026.09.20', source:'transfer', isSystem:false, selectable:true, kind:'movie'},
  {id:'course-2', parentId:'course-folder', name:'课堂录音.mp3', itemType:'file', category:'audio', size:'42MB', modifiedAt:'2026.09.19 17:38', lastOpenedAt:'2026.09.19', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'course-3', parentId:'course-folder', name:'练习素材.png', itemType:'file', category:'image', size:'2.2MB', modifiedAt:'2026.09.18 11:00', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/design-desk.webp'},
  {id:'course-4', parentId:'course-folder', name:'笔记整理.pdf', itemType:'file', category:'document', size:'6.7MB', modifiedAt:'2026.09.17 14:12', lastOpenedAt:'2026.09.17', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'root-image-5', name:'办公桌灵感.png', itemType:'file', category:'image', size:'3.8MB', modifiedAt:'2026.09.01 16:20', lastOpenedAt:'2026.09.01', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/design-desk.webp'},
  {id:'root-audio-2', name:'产品访谈录音.mp3', itemType:'file', category:'audio', size:'28.6MB', modifiedAt:'2026.09.01 10:08', lastOpenedAt:'2026.09.01', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'root-doc-2', name:'九月工作周报.docx', itemType:'file', category:'document', size:'1.9MB', modifiedAt:'2026.08.31 18:00', lastOpenedAt:'2026.08.31', source:'upload', isSystem:false, selectable:true, kind:'word'},
  {id:'project-design-folder', parentId:'project-folder', name:'设计交付', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.22 15:42', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'project-audio-1', parentId:'project-folder', name:'评审会议纪要.m4a', itemType:'file', category:'audio', size:'16.2MB', modifiedAt:'2026.09.22 09:30', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'project-image-1', parentId:'project-folder', name:'首页方案截图.png', itemType:'file', category:'image', size:'2.9MB', modifiedAt:'2026.09.21 16:44', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/design-desk.webp'},
  {id:'project-design-1', parentId:'project-design-folder', name:'视觉规范说明.pdf', itemType:'file', category:'document', size:'10.4MB', modifiedAt:'2026.09.22 15:42', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'project-design-2', parentId:'project-design-folder', name:'产品封面备选.png', itemType:'file', category:'image', size:'4.2MB', modifiedAt:'2026.09.22 14:15', lastOpenedAt:'2026.09.22', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/cafe-afternoon.webp'},
  {id:'album-5', parentId:'album-folder', name:'雨后街景.png', itemType:'file', category:'image', size:'5.7MB', modifiedAt:'2026.09.20 18:12', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/rainy-city.webp'},
  {id:'album-6', parentId:'album-folder', name:'海边环境音.wav', itemType:'file', category:'audio', size:'36.5MB', modifiedAt:'2026.09.20 11:46', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'album-shot-folder', parentId:'album-folder', name:'精选照片', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.21 08:30', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'album-shot-1', parentId:'album-shot-folder', name:'山间步道.png', itemType:'file', category:'image', size:'4.9MB', modifiedAt:'2026.09.21 08:30', lastOpenedAt:'2026.09.21', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/mountain-trail.webp'},
  {id:'album-shot-2', parentId:'album-shot-folder', name:'咖啡小记.png', itemType:'file', category:'image', size:'3.1MB', modifiedAt:'2026.09.20 17:20', lastOpenedAt:'2026.09.20', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/pour-over-coffee.webp'},
  {id:'course-audio-2', parentId:'course-folder', name:'交互设计课程录音.mp3', itemType:'file', category:'audio', size:'58.3MB', modifiedAt:'2026.09.18 18:30', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'blank'},
  {id:'course-doc-1', parentId:'course-folder', name:'组件规范练习.docx', itemType:'file', category:'document', size:'2.6MB', modifiedAt:'2026.09.18 15:10', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'word'},
  {id:'course-notes-folder', parentId:'course-folder', name:'课程笔记', itemType:'folder', category:'other', size:'–', modifiedAt:'2026.09.19 09:00', lastOpenedAt:'2026.09.19', source:'upload', isSystem:false, selectable:true, kind:'folder'},
  {id:'course-notes-1', parentId:'course-notes-folder', name:'第一课重点整理.pdf', itemType:'file', category:'document', size:'3.4MB', modifiedAt:'2026.09.19 09:00', lastOpenedAt:'2026.09.19', source:'upload', isSystem:false, selectable:true, kind:'pdf'},
  {id:'course-notes-2', parentId:'course-notes-folder', name:'课堂白板照片.png', itemType:'file', category:'image', size:'4.4MB', modifiedAt:'2026.09.18 20:40', lastOpenedAt:'2026.09.18', source:'upload', isSystem:false, selectable:true, kind:'city', image:'/assets/image-samples/family-beach.webp'},
];

export const categoryMap = {视频:'video', 图片:'image', 音频:'audio', 文档:'document', 压缩包:'archive'};
export const sortOptions = ['更新时间','创建时间','文件名称','文件大小','正序','倒序','仅应用至当前目录'];

export function bytesFromSize(size='0') {
  const value=parseFloat(size)||0; const unit=(size.match(/[A-Z]+/i)||[''])[0].toUpperCase();
  return value*(unit==='G'?1024**3:unit==='MB'?1024**2:unit==='KB'?1024:0);
}
export function inferFileMeta(file) {
  const ext=(file.name.split('.').pop()||'').toLowerCase();
  const category=['mp4','mov','mkv','avi'].includes(ext)?'video':['png','jpg','jpeg','gif','webp'].includes(ext)?'image':['mp3','wav','aac','flac'].includes(ext)?'audio':['zip','rar','7z'].includes(ext)?'archive':'document';
  const kind=category==='video'?'movie':category==='image'?'city':ext==='xlsx'?'excel':ext==='pdf'?'pdf':ext==='pptx'?'ppt':ext==='docx'?'word':'blank';
  const size=file.size>=1024**3?`${(file.size/1024**3).toFixed(1)}G`:file.size>=1024**2?`${(file.size/1024**2).toFixed(1)}MB`:`${Math.max(1,Math.round(file.size/1024))}KB`;
  return {category,kind,size};
}
export function deriveVisibleItems(items, activeCategory, filters, sortRule, parentId='root') {
  const specialItems=parentId==='invalid-files'?items.filter(item=>item.itemType==='file'&&item.parentId!=='recycle-bin'&&item.source==='backup'):parentId==='large-files'?items.filter(item=>item.itemType==='file'&&item.parentId!=='recycle-bin'&&item.source!=='backup'&&bytesFromSize(item.size)>=50*1024**3):null;
  let result=(specialItems||items.filter(item=>(item.parentId||'root')===parentId)).filter(item=>activeCategory==='全部'?true:activeCategory==='最近'?Boolean(item.lastOpenedAt):item.itemType==='file'&&item.category===categoryMap[activeCategory]);
  if(activeCategory!=='全部') result=result.filter(item=>!item.isSystem);
  if(activeCategory==='最近') result=result.filter(item=>item.itemType==='file');
  if(filters.types?.length){const typeMap={视频:'video',音频:'audio',图片:'image',文本:'document',字体:'document',字幕:'document',安装包:'archive',压缩包:'archive',BT种子:'transfer',其他:'other'};result=result.filter(item=>filters.types.some(type=>type==='BT种子'?item.source==='transfer':item.category===typeMap[type]));}
  if(filters.size!=='不限') result=result.filter(item=>{const bytes=bytesFromSize(item.size); return filters.size==='小于 100MB'?bytes<100*1024**2:filters.size==='100MB–1GB'?bytes>=100*1024**2&&bytes<=1024**3:bytes>1024**3});
 if(filters.source!=='不限') result=result.filter(item=>item.source===filters.source);
 if(filters.time!=='不限') { const days=filters.time==='最近 7 天'?7:filters.time==='最近 30 天'?30:365; const cutoff=Date.now()-days*86400000; result=result.filter(item=>new Date(item.modifiedAt.replace(/\./g,'-')).getTime()>=cutoff); }
  const folderFirst=(a,b)=>Number(b.isSystem)-Number(a.isSystem)||Number(b.itemType==='folder')-Number(a.itemType==='folder');
  result=[...result].sort((a,b)=>{
    if(sortRule==='文件名称') return folderFirst(a,b)||a.name.localeCompare(b.name,'zh');
    if(sortRule==='文件大小') return folderFirst(a,b)||bytesFromSize(b.size)-bytesFromSize(a.size);
    if(sortRule==='正序') return folderFirst(a,b)||a.modifiedAt.localeCompare(b.modifiedAt);
    if(sortRule==='倒序'||sortRule==='更新时间'||sortRule==='创建时间'||sortRule==='仅应用至当前目录') return folderFirst(a,b)||b.modifiedAt.localeCompare(a.modifiedAt);
    if(sortRule==='文件名称：A–Z') return folderFirst(a,b)||a.name.localeCompare(b.name,'zh');
    if(sortRule==='文件名称：Z–A') return folderFirst(a,b)||b.name.localeCompare(a.name,'zh');
    if(sortRule==='文件大小：从大到小') return folderFirst(a,b)||bytesFromSize(b.size)-bytesFromSize(a.size);
    if(sortRule==='文件大小：从小到大') return folderFirst(a,b)||bytesFromSize(a.size)-bytesFromSize(b.size);
    if(sortRule==='格式类型：A–Z') return folderFirst(a,b)||(a.itemType==='folder'?'文件夹':({video:'视频',image:'图片',audio:'音频',document:'文档',archive:'压缩包'}[a.category]||'其他')).localeCompare(b.itemType==='folder'?'文件夹':({video:'视频',image:'图片',audio:'音频',document:'文档',archive:'压缩包'}[b.category]||'其他'),'zh');
    if(sortRule==='格式类型：Z–A') return folderFirst(a,b)||(b.itemType==='folder'?'文件夹':({video:'视频',image:'图片',audio:'音频',document:'文档',archive:'压缩包'}[b.category]||'其他')).localeCompare(a.itemType==='folder'?'文件夹':({video:'视频',image:'图片',audio:'音频',document:'文档',archive:'压缩包'}[a.category]||'其他'),'zh');
    if(sortRule==='修改时间：从旧到新') return folderFirst(a,b)||a.modifiedAt.localeCompare(b.modifiedAt);
    return folderFirst(a,b)||b.modifiedAt.localeCompare(a.modifiedAt);
  });
  return result;
}

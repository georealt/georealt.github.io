const API = 'https://georgiahomes.duckdns.org:8443/realtor';
const words = {
  en:{tagline:'Georgia property radar',live:'Live listings',signIn:'Sign in',signOut:'Sign out',workspace:'WORKSPACE',listings:'Listings',feed:'New matches',savedSearches:'Saved searches',connectedSource:'Connected source',sourceHint:'New public listings are checked regularly. Open the original listing for full details.',discover:'DISCOVER GEORGIA',headline:'Find your next opportunity.',subhead:'Fresh properties from MyHome.ge and ss.ge, in one workspace.',refine:'REFINE RESULTS',yourSearch:'Your search',saveSearch:'+ Save search',deal:'Deal',any:'Any',rent:'Rent',buy:'Buy',type:'Property',apartment:'Apartment',house:'House',place:'City or district',cityPlaceholder:'Tbilisi, Batumi…',maxPrice:'Max price · USD',bedrooms:'Min bedrooms',showListings:'Show listings',latest:'THE LATEST',properties:'Properties',loadMore:'Load more',forYou:'FOR YOU',newMatches:'New matches',enablePush:'Enable notifications',feedIntro:'New listings appear here after you save a search. Existing listings are your starting point and do not trigger alerts.',watchlist:'WATCHLIST',searchIntro:'Save a filter to watch for matching listings as they appear.',welcome:'WELCOME TO GEO REALT',authIntro:'Save filters and get updates on fresh listings.',email:'Email',password:'Password',createAccount:'Create an account',haveAccount:'Already have an account? Sign in',register:'Create account',noListings:'No listings found',tryFilters:'Try a wider search or check again later.',noFeed:'No new matches yet',feedEmpty:'Save a search, then newly discovered matches will appear here.',noSearches:'No saved searches yet',searchEmpty:'Set your filters in Listings and save the search.',resultCount:n=>`${n} properties`,area:'m²',beds:'beds',rooms:'rooms',openSource:'View on MyHome ↗',sourceText:'Original text · MyHome.ge',agencyWarning:'Owner asks agencies not to contact them',searchName:'Name this search',searchSaved:'Search saved. New matches will appear in your feed.',loginFirst:'Sign in to save searches and view your feed.',saved:'Saved',contacted:'Contacted',dismissed:'Not suitable',new:'New',updated:'Updated',disable:'Pause',enable:'Resume',remove:'Delete',pushReady:'Notifications enabled',pushUnsupported:'This browser does not support push notifications. On iPhone, add the site to your Home Screen first.',pushDenied:'Notification permission was not granted.',loadError:'Could not load data. Please try again.',refresh:'Refresh',loading:'Loading…',translatedLater:'Automatic translation will be connected later; this is the original listing text.',notes:'Note',saveNote:'Save',pushUnavailable:'Push notifications are being configured.',testPush:'Send test',disablePush:'Turn off',testSent:'Test notification sent. Check your device.',pushOff:'Notifications turned off on this device.'},
  ru:{tagline:'Радар недвижимости Грузии',live:'Свежие объявления',signIn:'Войти',signOut:'Выйти',workspace:'РАБОЧЕЕ МЕСТО',listings:'Объявления',feed:'Новые совпадения',savedSearches:'Сохранённые поиски',connectedSource:'Источник подключён',sourceHint:'Мы регулярно проверяем новые объявления. Полные сведения смотрите на сайте источника.',discover:'НЕДВИЖИМОСТЬ ГРУЗИИ',headline:'Находите новые возможности.',subhead:'Свежие объекты MyHome.ge и ss.ge в одном месте.',refine:'НАСТРОЙТЕ ПОДБОР',yourSearch:'Ваш поиск',saveSearch:'+ Сохранить поиск',deal:'Сделка',any:'Любая',rent:'Аренда',buy:'Покупка',type:'Тип жилья',apartment:'Квартира',house:'Дом',place:'Город или район',cityPlaceholder:'Тбилиси, Батуми…',maxPrice:'Цена до · USD',bedrooms:'Спален от',showListings:'Показать',latest:'НОВЫЕ ОБЪЕКТЫ',properties:'Объявления',loadMore:'Показать ещё',forYou:'ДЛЯ ВАС',newMatches:'Новые совпадения',enablePush:'Включить уведомления',feedIntro:'После сохранения поиска новые подходящие объявления появятся здесь. Уже найденные объекты считаются исходной подборкой и не вызывают уведомлений.',watchlist:'МОНИТОРИНГ',searchIntro:'Сохраните фильтр, чтобы отслеживать новые подходящие объявления.',welcome:'ДОБРО ПОЖАЛОВАТЬ',authIntro:'Сохраняйте фильтры и получайте новые объявления.',email:'Почта',password:'Пароль',createAccount:'Создать аккаунт',haveAccount:'Уже есть аккаунт? Войти',register:'Зарегистрироваться',noListings:'Объявлений не найдено',tryFilters:'Попробуйте расширить поиск или загляните позже.',noFeed:'Пока нет новых совпадений',feedEmpty:'Сохраните поиск — новые подходящие объекты появятся здесь.',noSearches:'Поисков пока нет',searchEmpty:'Настройте фильтр на вкладке «Объявления» и сохраните его.',resultCount:n=>`${n} объектов`,area:'м²',beds:'спален',rooms:'комнат',openSource:'Открыть MyHome ↗',sourceText:'Оригинал · MyHome.ge',agencyWarning:'Владелец просит агентства не связываться с ним',searchName:'Название поиска',searchSaved:'Поиск сохранён. Новые объекты появятся в ленте.',loginFirst:'Войдите, чтобы сохранить поиск и видеть ленту.',saved:'Интересно',contacted:'Связался',dismissed:'Не подходит',new:'Новое',updated:'Обновлено',disable:'Пауза',enable:'Включить',remove:'Удалить',pushReady:'Уведомления включены',pushUnsupported:'Этот браузер не поддерживает push. На iPhone сначала добавьте сайт на экран «Домой».',pushDenied:'Разрешение на уведомления не получено.',loadError:'Не удалось загрузить данные. Повторите попытку.',refresh:'Обновить',loading:'Загрузка…',translatedLater:'Автоперевод подключим позже; пока показан оригинал объявления.',notes:'Заметка',saveNote:'Сохранить',pushUnavailable:'Настраиваем push уведомления.',testPush:'Проверить',disablePush:'Выключить',testSent:'Пробное уведомление отправлено. Проверьте устройство.',pushOff:'Уведомления на этом устройстве выключены.'},
  ka:{tagline:'საქართველოს უძრავი ქონების რადარი',live:'ახალი განცხადებები',signIn:'შესვლა',signOut:'გასვლა',workspace:'სამუშაო სივრცე',listings:'განცხადებები',feed:'ახალი შესაბამისობები',savedSearches:'შენახული ძიებები',connectedSource:'წყარო დაკავშირებულია',sourceHint:'ახალი საჯარო განცხადებები რეგულარულად მოწმდება. სრული დეტალები იხილეთ წყაროზე.',discover:'აღმოაჩინეთ საქართველო',headline:'იპოვეთ ახალი შესაძლებლობა.',subhead:'MyHome.ge-ისა და ss.ge-ის ახალი ობიექტები ერთ სივრცეში.',refine:'ძიების დაზუსტება',yourSearch:'თქვენი ძიება',saveSearch:'+ ძიების შენახვა',deal:'გარიგება',any:'ყველა',rent:'ქირავდება',buy:'იყიდება',type:'ქონების ტიპი',apartment:'ბინა',house:'სახლი',place:'ქალაქი ან უბანი',cityPlaceholder:'თბილისი, ბათუმი…',maxPrice:'მაქს. ფასი · USD',bedrooms:'საძინებლები მინ.',showListings:'ჩვენება',latest:'უახლესი',properties:'ობიექტები',loadMore:'მეტის ნახვა',forYou:'თქვენთვის',newMatches:'ახალი შესაბამისობები',enablePush:'შეტყობინებების ჩართვა',feedIntro:'ძიების შენახვის შემდეგ ახალი შესაბამისი განცხადებები აქ გამოჩნდება. არსებული განცხადებები საწყისი ნაკრებია და შეტყობინებას არ იწვევს.',watchlist:'მონიტორინგი',searchIntro:'შეინახეთ ფილტრი ახალი შესაბამისი განცხადებების სანახავად.',welcome:'კეთილი იყოს თქვენი მობრძანება',authIntro:'შეინახეთ ფილტრები და მიიღეთ ახალი განცხადებები.',email:'ელფოსტა',password:'პაროლი',createAccount:'ანგარიშის შექმნა',haveAccount:'უკვე გაქვთ ანგარიში? შესვლა',register:'რეგისტრაცია',noListings:'განცხადებები ვერ მოიძებნა',tryFilters:'სცადეთ უფრო ფართო ძიება ან მოგვიანებით დაბრუნდით.',noFeed:'ახალი შესაბამისობები ჯერ არ არის',feedEmpty:'შეინახეთ ძიება და ახალი ობიექტები აქ გამოჩნდება.',noSearches:'შენახული ძიებები არ არის',searchEmpty:'დააყენეთ ფილტრი და შეინახეთ ძიება.',resultCount:n=>`${n} ობიექტი`,area:'მ²',beds:'საძინებელი',rooms:'ოთახი',openSource:'MyHome-ზე ნახვა ↗',sourceText:'ორიგინალი · MyHome.ge',agencyWarning:'მფლობელი სააგენტოებთან თანამშრომლობაზე უარს ამბობს',searchName:'ძიების სახელი',searchSaved:'ძიება შენახულია. ახალი ობიექტები ლენტაში გამოჩნდება.',loginFirst:'ძიების შესანახად შედით ანგარიშში.',saved:'რჩეული',contacted:'დავუკავშირდი',dismissed:'არ შეეფერება',new:'ახალი',updated:'განახლდა',disable:'შეჩერება',enable:'ჩართვა',remove:'წაშლა',pushReady:'შეტყობინებები ჩართულია',pushUnsupported:'ბრაუზერი Push შეტყობინებებს არ უჭერს მხარს. iPhone-ზე ჯერ დაამატეთ საიტი მთავარ ეკრანზე.',pushDenied:'შეტყობინების ნებართვა არ გაიცა.',loadError:'მონაცემები ვერ ჩაიტვირთა. სცადეთ ხელახლა.',refresh:'განახლება',loading:'იტვირთება…',translatedLater:'ავტომატურ თარგმანს მოგვიანებით დავამატებთ; ახლა ნაჩვენებია ორიგინალი.',notes:'შენიშვნა',saveNote:'შენახვა',pushUnavailable:'Push შეტყობინებები მზადდება.',testPush:'შემოწმება',disablePush:'გამორთვა',testSent:'სატესტო შეტყობინება გაიგზავნა. შეამოწმეთ მოწყობილობა.',pushOff:'შეტყობინებები ამ მოწყობილობაზე გამორთულია.'}
};
Object.assign(words.en,{owner:'Owner',agent:'Agent',agency:'Agent',call:'Call',shortDescription:'Short description',contactOnSource:'Phone on MyHome ↗',contactOnSs:'Phone on ss.ge ↗',openListing:'Open listing on {source}',sourceFilter:'Source',allSources:'All sources',previousPhoto:'Previous photo',nextPhoto:'Next photo'});
Object.assign(words.ru,{owner:'Хозяин',agent:'Агент',agency:'Агент',call:'Позвонить',shortDescription:'Короткое описание',contactOnSource:'Телефон на MyHome ↗',contactOnSs:'Телефон на ss.ge ↗',openListing:'Открыть объявление на {source}',sourceFilter:'Источник',allSources:'Все источники',previousPhoto:'Предыдущее фото',nextPhoto:'Следующее фото'});
Object.assign(words.ka,{owner:'მეპატრონე',agent:'აგენტი',agency:'აგენტი',call:'დარეკვა',shortDescription:'მოკლე აღწერა',contactOnSource:'ტელეფონი MyHome-ზე ↗',contactOnSs:'ტელეფონი ss.ge-ზე ↗',openListing:'განცხადების გახსნა {source}-ზე',sourceFilter:'წყარო',allSources:'ყველა წყარო',previousPhoto:'წინა ფოტო',nextPhoto:'შემდეგი ფოტო'});
Object.assign(words.en,{originalText:'Source text in another language'});
Object.assign(words.ru,{originalText:'Текст на другом языке'});
Object.assign(words.ka,{originalText:'ტექსტი სხვა ენაზე'});
Object.assign(words.en,{advertiserFilter:'Advertiser',allAdvertisers:'Any advertiser',realtorFilter:'Agent',unknownAdvertiser:'Not specified',openGallery:'Open photo gallery',closeGallery:'Close gallery',photoOf:(current,total)=>`Photo ${current} of ${total}`});
Object.assign(words.ru,{advertiserFilter:'Автор объявления',allAdvertisers:'Любой автор',realtorFilter:'Агент',unknownAdvertiser:'Не указан',openGallery:'Открыть галерею',closeGallery:'Закрыть галерею',photoOf:(current,total)=>`Фото ${current} из ${total}`});
Object.assign(words.ka,{advertiserFilter:'განმცხადებელი',allAdvertisers:'ნებისმიერი',realtorFilter:'აგენტი',unknownAdvertiser:'მითითებული არ არის',openGallery:'გალერეის გახსნა',closeGallery:'გალერეის დახურვა',photoOf:(current,total)=>`ფოტო ${current} / ${total}`});
Object.assign(words.en,{updatedOnSource:'Updated',postedOnSource:'Posted'});
Object.assign(words.ru,{updatedOnSource:'Обновлено',postedOnSource:'Размещено'});
Object.assign(words.ka,{updatedOnSource:'განახლდა',postedOnSource:'გამოქვეყნდა'});
Object.assign(words.en,{showSearchResults:'Show listings'});
Object.assign(words.ru,{showSearchResults:'Показать объявления'});
Object.assign(words.ka,{showSearchResults:'განცხადებების ნახვა'});
Object.assign(words.en,{statusFilter:'Status',allStatuses:'All statuses',emptyStatus:'No listings with this status yet.',contacted:'Called',dismissed:'Not interested'});
Object.assign(words.ru,{statusFilter:'Статус',allStatuses:'Все статусы',emptyStatus:'Пока нет объявлений с этим статусом.',contacted:'Позвонил',dismissed:'Неинтересно'});
Object.assign(words.ka,{statusFilter:'სტატუსი',allStatuses:'ყველა სტატუსი',emptyStatus:'ამ სტატუსის განცხადებები ჯერ არ არის.',contacted:'დავრეკე',dismissed:'არ მაინტერესებს'});
let language=localStorage.getItem('geoLanguage')||'en', token=localStorage.getItem('geoToken')||'', account=JSON.parse(localStorage.getItem('geoAccount')||'null');
let view='listings', offset=0, total=0, listings=[], feed=[], searches=[], registerMode=false, feedRequestId=0;
let feedStatus=['NEW','SAVED','CONTACTED','DISMISSED'].includes(localStorage.getItem('geoFeedStatus'))?localStorage.getItem('geoFeedStatus'):'', feedTotal=0, feedCounts={NEW:0,SAVED:0,CONTACTED:0,DISMISSED:0};
if(new URLSearchParams(location.search).has('from-push')){feedStatus='';localStorage.setItem('geoFeedStatus',feedStatus);history.replaceState(null,'',location.pathname+location.hash)}
const $=s=>document.querySelector(s), tr=(k,...args)=>{const value=(words[language]||words.en)[k]??words.en[k]??k;return typeof value==='function'?value(...args):value};
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function showStatus(message,error=false){const node=$('#status');node.textContent=message;node.className='status'+(error?' error':'');node.hidden=false;clearTimeout(showStatus.timer);showStatus.timer=setTimeout(()=>node.hidden=true,6000)}
async function api(path,options={}){const headers={'Content-Type':'application/json',...(options.headers||{})};if(token)headers.Authorization='Bearer '+token;let response;try{response=await fetch(API+path,{...options,headers})}catch{throw Error(tr('loadError'))}if(response.status===204)return null;const body=await response.json().catch(()=>({}));if(!response.ok)throw Error(body.detail||tr('loadError'));return body}
function setLanguage(value){language=words[value]?value:'en';localStorage.setItem('geoLanguage',language);document.documentElement.lang=language;$('#language').value=language;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=tr(el.dataset.i18n));document.querySelectorAll('[data-placeholder]').forEach(el=>el.placeholder=tr(el.dataset.placeholder));$('#account-button').textContent=account?tr('signOut'):tr('signIn');$('#auth-title').textContent=tr(registerMode?'register':'signIn');$('#auth-submit').textContent=tr(registerMode?'register':'signIn');$('#auth-toggle').textContent=tr(registerMode?'haveAccount':'createAccount');renderListings();renderFeed();renderSearches();if(account&&account.language!==language)api('/me/language',{method:'PATCH',body:JSON.stringify({language})}).catch(()=>{})}
function navigate(next){view=next;for(const name of ['listings','feed','searches']){$('#'+name+'-view').hidden=name!==next;document.querySelector(`[data-view="${name}"]`).classList.toggle('active',name===next)}location.hash=next;if(next==='feed')loadFeed();if(next==='searches')loadSearches()}
function filters(){const form=new FormData($('#filters'));const values={};for(const [key,value] of form.entries())if(value!=='')values[key]=value;return values}
function query(values){return new URLSearchParams(values).toString()}
async function loadListings(more=false){if(!more){offset=0;listings=[]}$('#listings-grid').innerHTML=`<div class="empty">${safe(tr('loading'))}</div>`;try{const data=await api('/listings?'+query({...filters(),limit:30,offset}));listings=more?[...listings,...data.items]:data.items;total=data.total;offset=listings.length;renderListings()}catch(error){$('#listings-grid').innerHTML='';showStatus(error.message,true)}}
function sourceName(item){return item.source==='ss.ge'?'ss.ge':'MyHome.ge'}
function sourceLabel(item){return tr('openListing').replace('{source}',sourceName(item))}
function validSource(url){try{const u=new URL(url);return u.protocol==='https:'&&['www.myhome.ge','home.ss.ge'].includes(u.hostname)?u.href:'#'}catch{return '#'}}
function localizedSource(item){
  const source=validSource(item.sourceUrl);
  if(source==='#')return source;
  const url=new URL(source);
  if(url.hostname==='www.myhome.ge'){
    const match=url.pathname.match(/^\/(?:en\/real-estate|ru\/nedvizhimost|udzravi-qoneba)\/(.+-\d+\/?$)/);
    if(match)url.pathname=`${{en:'/en/real-estate',ru:'/ru/nedvizhimost',ka:'/udzravi-qoneba'}[language]}/${match[1]}`;
  }else if(url.hostname==='home.ss.ge'){
    const match=url.pathname.match(/^\/(?:en\/real-estate|ru\/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C|ka\/udzravi-qoneba)\/(.+-\d+\/?$)/i);
    if(match)url.pathname=`/${language}/${{en:'real-estate',ru:'недвижимость',ka:'udzravi-qoneba'}[language]}/${match[1]}`;
  }
  return url.href;
}
function validImage(url){try{const u=new URL(url);return u.protocol==='https:'&&['static-api-statements.tnet.ge','static.ss.ge'].includes(u.hostname)?u.href:''}catch{return ''}}
function plainDescription(value){return String(value||'').replace(/<br\s*\/?>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&nbsp;/gi,' ').replace(/\s+/g,' ').trim()}
function galleryImages(item){return (item.imageUrls||[]).map(validImage).filter(Boolean)}
function listingTitle(item){return item.titles?.[language]||item.title}
function listingDate(item){
  const raw=item.sourceUpdatedAt;
  if(!raw)return null;
  const iso=item.source==='myhome.ge'&&/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(raw)?raw.replace(' ','T')+'+04:00':raw;
  const date=new Date(iso);
  if(Number.isNaN(date.getTime()))return null;
  const locale={en:'en-GB',ru:'ru-RU',ka:'ka-GE'}[language]||'en-GB';
  return {iso:date.toISOString(),text:new Intl.DateTimeFormat(locale,{timeZone:'Asia/Tbilisi',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date)};
}
function listingDescription(item){
  const translated=item.descriptions?.[language];
  const fallbackVariant=Object.entries(item.descriptions||{}).find(([,text])=>!!text);
  const fallback=item.description||fallbackVariant?.[1]||'';
  const fallbackLanguage=item.description?item.sourceLanguage:fallbackVariant?.[0];
  return {text:plainDescription(translated||fallback),original:!translated&&!!fallback&&fallbackLanguage!==language};
}
const gallerySelections=new Map();
function phoneNumbers(item){return [...new Set((item.phoneNumbers?.length?item.phoneNumbers:[item.phoneNumber]).filter(number=>/^\+\d{8,15}$/.test(number||'')))]}
function phoneLabel(number){return number.replace(/^(\+995)(5\d{2})(\d{3})(\d{3})$/,'$1 $2 $3 $4')}
function callLinks(item){return phoneNumbers(item).map(number=>`<a class="call-button" href="tel:${safe(number)}" aria-label="${safe(tr('call'))} ${safe(phoneLabel(number))}">☎ ${safe(phoneLabel(number))}</a>`).join('')}
function card(item){
  const images=galleryImages(item), selected=images.indexOf(gallerySelections.get(item.id));
  const imageIndex=selected>=0?selected:0, image=images[imageIndex];
  const photo=image?`<img src="${safe(image)}" loading="lazy" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fallback',textContent:'⌂'}))">`:'<div class="fallback">⌂</div>';
  const gallery=images.length>1?`<div class="gallery-controls"><button type="button" data-gallery-step="-1" aria-label="${safe(tr('previousPhoto'))}">‹</button><span class="gallery-count">${imageIndex+1} / ${images.length}</span><button type="button" data-gallery-step="1" aria-label="${safe(tr('nextPhoto'))}">›</button></div>`:'';
  const formatted=item.priceUsd?new Intl.NumberFormat(language==='ka'?'ka-GE':language==='ru'?'ru-RU':'en-US').format(item.priceUsd):'—';
  const {text:fullDescription,original}=listingDescription(item),description=fullDescription.slice(0,250);
  const advertiser={OWNER:'owner',AGENT:'agent',AGENCY:'agent'}[item.advertiserType];
  const phones=callLinks(item), date=listingDate(item);
  return `<article class="listing-card"><div class="card-image" data-gallery-id="${safe(item.id)}" data-gallery-index="${imageIndex}">${photo}${images.length?`<button type="button" class="photo-open" data-open-gallery="${safe(item.id)}" aria-label="${safe(tr('openGallery'))}"></button>`:``}${gallery}<div class="card-chips"><span class="card-chip">${safe(tr(item.operation==='RENT'?'rent':'buy'))}</span>${advertiser?`<span class="card-chip advertiser-chip">${safe(tr(advertiser))}</span>`:''}</div></div><div class="card-body"><div class="card-price">$${formatted}<small> / USD</small></div><h3>${safe(listingTitle(item))}</h3><div class="card-location">⌖ ${safe([item.city,item.district].filter(Boolean).join(' · '))}</div>${item.agencyWarning?`<div class="warning">⚠ ${safe(tr('agencyWarning'))}</div>`:''}${description?`<div class="card-description"><strong>${safe(tr('shortDescription'))}${original?` · ${safe(tr('originalText'))}`:''}</strong><p>${safe(description)}${fullDescription.length>250?'…':''}</p></div>`:''}<div class="card-details"><span>▣ ${safe(item.areaM2??'—')} ${safe(tr('area'))}</span><span>▦ ${safe(item.bedrooms??'—')} ${safe(tr('beds'))}</span><span>□ ${safe(item.rooms??'—')} ${safe(tr('rooms'))}</span></div><div class="card-footer">${date?`<small class="card-date"><span>${safe(tr(item.source==='myhome.ge'?'updatedOnSource':'postedOnSource'))}</span><time datetime="${safe(date.iso)}">${safe(date.text)}</time></small>`:''}${phones?`<div class="call-actions">${phones}</div>`:`<span class="contact-hint">${safe(tr(item.source==='ss.ge'?'contactOnSs':'contactOnSource'))}</span>`}</div></div><a class="card-hit" href="${safe(localizedSource(item))}" target="_blank" rel="noopener noreferrer" aria-label="${safe(sourceLabel(item))}: ${safe(listingTitle(item))}"></a></article>`
}
function galleryMove(card,step){
  const holder=card.querySelector('.card-image');
  const item=listings.find(row=>String(row.id)===holder?.dataset.galleryId);
  const images=item?galleryImages(item):[];
  if(images.length<2)return false;
  const index=(Number(holder.dataset.galleryIndex)+step+images.length)%images.length;
  holder.dataset.galleryIndex=String(index);
  gallerySelections.set(item.id,images[index]);
  let img=holder.querySelector('img');
  if(!img){img=document.createElement('img');img.loading='lazy';img.alt='';holder.querySelector('.fallback')?.remove();holder.prepend(img)}
  img.src=images[index];
  holder.querySelector('.gallery-count').textContent=`${index+1} / ${images.length}`;
  return true;
}
let activeGallery=null,activeGalleryIndex=0,photoTouch=null;
function showGalleryPhoto(){
  if(!activeGallery)return;
  const images=galleryImages(activeGallery);
  const image=images[activeGalleryIndex];
  $('#photo-full').src=image;
  $('#photo-full').alt=`${listingTitle(activeGallery)} — ${tr('photoOf',activeGalleryIndex+1,images.length)}`;
  $('#photo-count').textContent=tr('photoOf',activeGalleryIndex+1,images.length);
  $('#photo-prev').disabled=images.length<2;
  $('#photo-next').disabled=images.length<2;
  gallerySelections.set(activeGallery.id,image);
}
function openGallery(id){
  activeGallery=listings.find(item=>String(item.id)===String(id))||feed.find(event=>String(event.listing.id)===String(id))?.listing;
  const images=activeGallery?galleryImages(activeGallery):[];
  if(!images.length){activeGallery=null;return}
  activeGalleryIndex=Math.max(0,images.indexOf(gallerySelections.get(activeGallery.id)));
  $('#photo-dialog').setAttribute('aria-label',tr('openGallery'));
  $('#photo-close').setAttribute('aria-label',tr('closeGallery'));
  $('#photo-prev').setAttribute('aria-label',tr('previousPhoto'));
  $('#photo-next').setAttribute('aria-label',tr('nextPhoto'));
  showGalleryPhoto();
  $('#photo-dialog').showModal();
  $('#photo-close').focus();
}
function galleryStep(step){
  if(!activeGallery)return;
  const count=galleryImages(activeGallery).length;
  if(count<2)return;
  activeGalleryIndex=(activeGalleryIndex+step+count)%count;
  showGalleryPhoto();
}
let galleryTouch=null, gallerySwipeUntil=0;
$('#listings-grid').addEventListener('click',event=>{const button=event.target.closest('[data-gallery-step]'),open=event.target.closest('[data-open-gallery]');if(button){event.preventDefault();event.stopPropagation();galleryMove(button.closest('.listing-card'),Number(button.dataset.galleryStep))}else if(open){event.preventDefault();event.stopPropagation();if(Date.now()>=gallerySwipeUntil)openGallery(open.dataset.openGallery)}else if(event.target.closest('.card-hit')&&Date.now()<gallerySwipeUntil){event.preventDefault();event.stopPropagation()}},true);
$('#listings-grid').addEventListener('touchstart',event=>{const card=event.target.closest('.listing-card'),touch=event.changedTouches[0];if(!card||!touch)return;const image=card.querySelector('.card-image'),rect=image.getBoundingClientRect();galleryTouch=touch.clientY>=rect.top&&touch.clientY<=rect.bottom?{card,x:touch.clientX,y:touch.clientY}:null},{passive:true});
$('#listings-grid').addEventListener('touchend',event=>{if(!galleryTouch)return;const touch=event.changedTouches[0],dx=touch.clientX-galleryTouch.x,dy=touch.clientY-galleryTouch.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3&&galleryMove(galleryTouch.card,dx<0?1:-1)){gallerySwipeUntil=Date.now()+600;if(event.cancelable)event.preventDefault()}galleryTouch=null},{passive:false});
$('#photo-close').addEventListener('click',()=>$('#photo-dialog').close());
$('#photo-prev').addEventListener('click',()=>galleryStep(-1));
$('#photo-next').addEventListener('click',()=>galleryStep(1));
$('#photo-dialog').addEventListener('click',event=>{if(event.target===$('#photo-dialog'))$('#photo-dialog').close()});
$('#photo-dialog').addEventListener('close',()=>{activeGallery=null;renderListings()});
$('#photo-dialog').addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();galleryStep(-1)}else if(event.key==='ArrowRight'){event.preventDefault();galleryStep(1)}});
$('#photo-dialog').addEventListener('touchstart',event=>{const touch=event.changedTouches[0];photoTouch=touch?{x:touch.clientX,y:touch.clientY}:null},{passive:true});
$('#photo-dialog').addEventListener('touchend',event=>{if(!photoTouch)return;const touch=event.changedTouches[0],dx=touch.clientX-photoTouch.x,dy=touch.clientY-photoTouch.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3){galleryStep(dx<0?1:-1);if(event.cancelable)event.preventDefault()}photoTouch=null},{passive:false});
function renderListings(){if(!$('#listings-grid'))return;$('#result-count').textContent=tr('resultCount',total);$('#listings-grid').innerHTML=listings.length?listings.map(card).join(''):`<div class="empty"><strong>${safe(tr('noListings'))}</strong>${safe(tr('tryFilters'))}</div>`;$('#load-more').hidden=offset>=total}
async function loadFeed(more=false){
  const requestId=++feedRequestId;
  if(!token){feed=[];feedTotal=0;feedCounts={NEW:0,SAVED:0,CONTACTED:0,DISMISSED:0};renderFeed();return}
  if(!more){if(!feed.length)$('#feed-list').innerHTML=`<div class="empty">${safe(tr('loading'))}</div>`;$('#feed-load-more').hidden=true}
  try{
    const result=await api('/feed?'+query({limit:50,offset:more?feed.length:0,...(feedStatus?{status:feedStatus}:{})}));
    if(requestId!==feedRequestId)return;
    feed=more?[...feed,...result.items.filter(item=>!feed.some(previous=>previous.eventId===item.eventId))]:result.items;
    feedTotal=result.total??feed.length;
    feedCounts=result.counts||feedCounts;
    renderFeed();
  }catch(error){
    if(requestId!==feedRequestId)return;
    $('#feed-list').innerHTML=`<div class="empty">${safe(tr('loadError'))}</div>`;
    showStatus(error.message,true);
  }
}
function renderFeedCards(){if(!$('#feed-list'))return;$('#feed-list').innerHTML=feed.length?feed.map(event=>{const item=event.listing,photo=validImage(item.imageUrls?.[0]),phones=callLinks(item);return `<article class="feed-item">${photo?`<button type="button" class="feed-photo-open" data-open-gallery="${safe(item.id)}" aria-label="${safe(tr('openGallery'))}"><img src="${safe(photo)}" alt="" loading="lazy"></button>`:''}<div><h3>${safe(listingTitle(item))}</h3><p>${safe(item.city)} · $${safe(item.priceUsd||'—')} · ${safe(tr(event.kind==='NEW'?'new':'updated'))}</p></div><div class="feed-actions">${phones?`<div class="call-actions">${phones}</div>`:''}<select data-activity="${item.id}" aria-label="Status"><option value="NEW" ${event.status==='NEW'?'selected':''}>${safe(tr('new'))}</option><option value="SAVED" ${event.status==='SAVED'?'selected':''}>${safe(tr('saved'))}</option><option value="CONTACTED" ${event.status==='CONTACTED'?'selected':''}>${safe(tr('contacted'))}</option><option value="DISMISSED" ${event.status==='DISMISSED'?'selected':''}>${safe(tr('dismissed'))}</option></select><button data-note="${item.id}" title="${safe(tr('notes'))}">✎</button></div><a class="feed-hit" href="${safe(localizedSource(item))}" target="_blank" rel="noopener noreferrer" aria-label="${safe(sourceLabel(item))}: ${safe(listingTitle(item))}"></a></article>`}).join(''):`<div class="empty"><strong>${safe(tr('noFeed'))}</strong>${safe(tr(token?feedStatus?'emptyStatus':'feedEmpty':'loginFirst'))}</div>`}
function renderFeed(){
  renderFeedCards();
  const all=Object.values(feedCounts).reduce((sum,count)=>sum+count,0);
  $('#feed-count').hidden=!all;
  $('#feed-count').textContent=all;
  $('#feed-status').value=feedStatus;
  $('#feed-load-more').hidden=feed.length>=feedTotal;
}
async function loadSearches(){
  if(!token){searches=[];renderSearches();return}
  if(!searches.length)$('#searches-list').innerHTML=`<div class="empty">${safe(tr('loading'))}</div>`;
  try{searches=(await api('/searches')).items;renderSearches()}
  catch(error){$('#searches-list').innerHTML=`<div class="empty">${safe(tr('loadError'))}</div>`;showStatus(error.message,true)}
}
function renderSearches(){if(!$('#searches-list'))return;$('#searches-list').innerHTML=searches.length?searches.map(s=>`<article class="search-item"><div><h3>${safe(s.name)}</h3><p>${safe([s.source||tr('allSources'),s.operation?tr(s.operation==='RENT'?'rent':'buy'):tr('any'),s.propertyType?tr(s.propertyType==='HOUSE'?'house':'apartment'):'',s.advertiserType?tr({OWNER:'owner',AGENT:'realtorFilter',UNKNOWN:'unknownAdvertiser'}[s.advertiserType]):'',s.city||'',s.maxPriceUsd?'≤ $'+s.maxPriceUsd:''].filter(Boolean).join(' · '))}</p></div><button data-show-search="${s.id}">${safe(tr('showSearchResults'))}</button><button data-toggle="${s.id}">${safe(tr(s.enabled?'disable':'enable'))}</button><button data-delete="${s.id}">${safe(tr('remove'))}</button></article>`).join(''):`<div class="empty"><strong>${safe(tr('noSearches'))}</strong>${safe(tr(token?'searchEmpty':'loginFirst'))}</div>`}
function openAuth(){registerMode=false;$('#auth-dialog').showModal();setLanguage(language)}
function signedIn(result){token=result.token;account=result.user;localStorage.setItem('geoToken',token);localStorage.setItem('geoAccount',JSON.stringify(account));$('#auth-dialog').close();setLanguage(language);loadFeed();loadSearches();refreshPushState()}
function showPushControls(subscribed){
  $('#enable-push').hidden=subscribed;
  $('#test-push').hidden=!subscribed;
  $('#disable-push').hidden=!subscribed;
}
async function refreshPushState(){
  let subscribed=false;
  if(token&&'serviceWorker'in navigator&&'PushManager'in window){
    try{const registration=await navigator.serviceWorker.ready;const subscription=await registration.pushManager.getSubscription();if(subscription){await api('/push/subscribe',{method:'POST',body:JSON.stringify(subscription.toJSON())});localStorage.setItem('geoPushEndpoint',subscription.endpoint);subscribed=true}}catch{}
    if(!subscribed&&'Notification'in window&&Notification.permission!=='denied')subscribed=!!localStorage.getItem('geoPushEndpoint');
  }
  showPushControls(subscribed);
}
async function enablePush(){
  if(!token){showStatus(tr('loginFirst'),true);openAuth();return}
  if(!('serviceWorker'in navigator)||!('PushManager'in window)||!('Notification'in window)){showStatus(tr('pushUnsupported'),true);return}
  try{
    const permission=await Notification.requestPermission();
    if(permission!=='granted'){showStatus(tr('pushDenied'),true);return}
    const config=await api('/push/public-key');
    if(!config.publicKey){showStatus(tr('pushUnavailable'),true);return}
    const registration=await navigator.serviceWorker.ready;
    const encoded=config.publicKey.replace(/-/g,'+').replace(/_/g,'/');
    const key=Uint8Array.from(atob(encoded.padEnd(Math.ceil(encoded.length/4)*4,'=')),c=>c.charCodeAt(0));
    const subscription=await registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:key});
    await api('/push/subscribe',{method:'POST',body:JSON.stringify(subscription.toJSON())});
    localStorage.setItem('geoPushEndpoint',subscription.endpoint);
    showPushControls(true);
    showStatus(tr('pushReady'));
  }catch(error){showStatus(error.message,true)}
}
async function disablePush(){
  try{const registration=await navigator.serviceWorker.ready;const subscription=await registration.pushManager.getSubscription();const endpoint=subscription?.endpoint||localStorage.getItem('geoPushEndpoint');if(endpoint)await api('/push/unsubscribe',{method:'POST',body:JSON.stringify({endpoint})});if(subscription)await subscription.unsubscribe();localStorage.removeItem('geoPushEndpoint');showPushControls(false);showStatus(tr('pushOff'))}catch(error){showStatus(error.message,true)}
}
async function testPush(){try{const registration=await navigator.serviceWorker.ready;const subscription=await registration.pushManager.getSubscription();const endpoint=subscription?.endpoint||localStorage.getItem('geoPushEndpoint');if(!endpoint)throw Error(tr('pushUnsupported'));await api('/push/test',{method:'POST',body:JSON.stringify({endpoint})});showStatus(tr('testSent'))}catch(error){showStatus(error.message,true)}}
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.view)));
$('#language').addEventListener('change',event=>setLanguage(event.target.value));
$('#filters').addEventListener('submit',event=>{event.preventDefault();loadListings()});
$('#load-more').addEventListener('click',()=>loadListings(true));
$('#save-search').addEventListener('click',async()=>{if(!token){showStatus(tr('loginFirst'),true);openAuth();return}const name=prompt(tr('searchName'),[filters().city,filters().operation].filter(Boolean).join(' · ')||tr('yourSearch'));if(!name)return;try{await api('/searches',{method:'POST',body:JSON.stringify({name,...filters(),maxPriceUsd:filters().maxPriceUsd?Number(filters().maxPriceUsd):null,minBedrooms:filters().minBedrooms?Number(filters().minBedrooms):null})});showStatus(tr('searchSaved'));loadSearches()}catch(error){showStatus(error.message,true)}});
$('#account-button').addEventListener('click',async()=>{if(account){try{const registration=await navigator.serviceWorker.getRegistration();const subscription=await registration?.pushManager.getSubscription();const endpoint=subscription?.endpoint||localStorage.getItem('geoPushEndpoint');if(endpoint)await api('/push/unsubscribe',{method:'POST',body:JSON.stringify({endpoint})});if(subscription)await subscription.unsubscribe()}catch{}token='';account=null;feedRequestId++;localStorage.removeItem('geoToken');localStorage.removeItem('geoAccount');localStorage.removeItem('geoPushEndpoint');feed=[];feedTotal=0;feedCounts={NEW:0,SAVED:0,CONTACTED:0,DISMISSED:0};searches=[];setLanguage(language);showPushControls(false);navigate('listings')}else openAuth()});
$('#close-auth').addEventListener('click',()=>$('#auth-dialog').close());
$('#auth-toggle').addEventListener('click',()=>{registerMode=!registerMode;setLanguage(language)});
$('#auth-form').addEventListener('submit',async event=>{event.preventDefault();try{const result=await api('/auth/'+(registerMode?'register':'login'),{method:'POST',body:JSON.stringify({email:$('#auth-email').value,password:$('#auth-password').value})});signedIn(result)}catch(error){showStatus(error.message,true)}});
$('#searches-list').addEventListener('click',async event=>{const show=event.target.closest('[data-show-search]');if(show){const search=searches.find(s=>s.id===show.dataset.showSearch);if(!search)return;for(const [name,value] of Object.entries({source:search.source,operation:search.operation,propertyType:search.propertyType,advertiserType:search.advertiserType,city:search.city,maxPriceUsd:search.maxPriceUsd,minBedrooms:search.minBedrooms})){const field=$('#filters').elements.namedItem(name);if(field)field.value=value??''}navigate('listings');loadListings();return}const toggle=event.target.closest('[data-toggle]'),remove=event.target.closest('[data-delete]');if(!toggle&&!remove)return;const id=(toggle||remove).dataset.toggle||(toggle||remove).dataset.delete;try{if(toggle){const current=searches.find(s=>s.id===id);await api('/searches/'+id,{method:'PATCH',body:JSON.stringify({enabled:!current.enabled})})}else await api('/searches/'+id,{method:'DELETE'});loadSearches()}catch(error){showStatus(error.message,true)}});
$('#feed-list').addEventListener('click',event=>{const open=event.target.closest('[data-open-gallery]');if(open){event.preventDefault();event.stopPropagation();openGallery(open.dataset.openGallery)}},true);
$('#feed-status').addEventListener('change',event=>{feedStatus=event.target.value;feed=[];localStorage.setItem('geoFeedStatus',feedStatus);loadFeed()});
$('#feed-load-more').addEventListener('click',()=>loadFeed(true));
$('#feed-list').addEventListener('change',async event=>{const select=event.target.closest('[data-activity]');if(!select)return;const item=feed.find(entry=>String(entry.listing.id)===select.dataset.activity);try{await api('/listings/'+select.dataset.activity+'/activity',{method:'PATCH',body:JSON.stringify({status:select.value,note:item?.note||''})});if(item)item.status=select.value;loadFeed()}catch(error){showStatus(error.message,true);if(item)select.value=item.status}});
$('#feed-list').addEventListener('click',async event=>{const button=event.target.closest('[data-note]');if(!button)return;const item=feed.find(entry=>String(entry.listing.id)===button.dataset.note);if(!item)return;const note=prompt(tr('notes'),item.note||'');if(note===null)return;try{await api('/listings/'+button.dataset.note+'/activity',{method:'PATCH',body:JSON.stringify({status:item.status,note})});item.note=note;showStatus(tr('saved'))}catch(error){showStatus(error.message,true)}});
$('#enable-push').addEventListener('click',enablePush);
$('#test-push').addEventListener('click',testPush);
$('#disable-push').addEventListener('click',disablePush);
function openFeedFromNotification(){feedStatus='';feed=[];localStorage.setItem('geoFeedStatus','');if(view!=='feed')navigate('feed');else loadFeed()}
window.addEventListener('hashchange',()=>{const next=location.hash.slice(1);if(['listings','feed','searches'].includes(next)&&next!==view)navigate(next)});
window.addEventListener('focus',()=>{if(location.hash==='#feed'&&token)loadFeed()});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&location.hash==='#feed'&&token)loadFeed()});
if('serviceWorker'in navigator){
  navigator.serviceWorker.addEventListener('message',event=>{if(event.data?.type==='OPEN_FEED')openFeedFromNotification()});
  navigator.serviceWorker.register('./sw.js?v=20261019-feed-status2').then(refreshPushState).catch(()=>{});
}
setLanguage(language);loadListings();if(location.hash==='#feed'||location.hash==='#searches')navigate(location.hash.slice(1));if(account){if(view!=='feed')loadFeed();loadSearches()}
setInterval(()=>{if(token&&document.visibilityState==='visible')loadFeed()},60000);

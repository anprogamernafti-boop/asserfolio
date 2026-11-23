/* Asserfolio — English / French / Arabic.
   English is the default text written in index.html. This file holds the French and Arabic
   translations, switches language, sets dir="rtl" for Arabic and builds the WhatsApp links. */
(function () {
  'use strict';

  var PHONE = '21658863209'; // +216 58 863 209
  var SUPPORTED = ['en', 'fr', 'ar'];
  var EN_WA = 'Hello Asser, I found your portfolio and I’d like to talk about a project.';

  var DICT = {
    fr: {
      'meta.title': 'Asser Nafti — Développeur Web & Android en Tunisie',
      'meta.desc': 'Développeur web et Android à Sousse, en Tunisie. Projets indépendants en JavaScript, Python/Flask, interfaces responsives, intégrations IA/API et déploiement Cloudflare.',
      'skip': 'Aller au contenu',
      'intro.skip': 'Passer',
      'intro.line': 'Des produits utiles · Des interfaces claires · Conçus pour être livrés',
      'nav.work': 'Réalisations',
      'nav.approach': 'Méthode',
      'nav.toolkit': 'Compétences',
      'nav.cta': 'Discutons',
      'hero.eyebrow': 'Web · Android · Création de produits',
      'hero.h1': 'Des produits utiles.<br><span class="accent-text">Des interfaces claires.</span><br>Conçus pour être livrés.',
      'hero.lede': 'Je suis Asser, développeur web et Android basé à Sousse, en Tunisie. Depuis août 2025, je construis des produits indépendants avec des interfaces JavaScript responsives, des applications web Python/Flask, des intégrations d’API et d’IA, et un déploiement sur Cloudflare. Mon portfolio présente des projets personnels, pas des missions payées pour des clients.',
      'hero.pos1': 'Développeur d’applications Web & Android',
      'hero.pos2': 'JavaScript, Python/Flask et intégrations IA/API',
      'hero.pos3': 'Ouvert aux missions freelance à distance bien cadrées et au temps partiel',
      'hero.cta': 'Voir les réalisations',
      'hero.li': 'Me contacter sur LinkedIn',
      'wa.btn': 'Écrire sur WhatsApp',
      'wa.float': 'Écrire sur WhatsApp',
      'wa.msg': 'Bonjour Asser, j’ai vu votre portfolio et je voudrais parler d’un projet.',
      'hero.city': 'Sousse, Tunisie',
      'hero.open': 'Ouvert aux missions freelance rémunérées à distance et au temps partiel',
      'art.top': 'PROJETS INDÉPENDANTS',
      'art.title': 'De la première<br>interface au<br><em>produit en ligne.</em>',
      'art.l1': 'CONCEVOIR',
      'art.l2': 'INTÉGRER',
      'art.l3': 'DÉPLOYER',
      'art.foot': 'DÉVELOPPEMENT ORIENTÉ PRODUIT',
      'intro.kicker': 'Le point de vue d’un développeur pragmatique',
      'intro.text': 'Un bon logiciel relie l’interface, l’intégration et la prochaine action dont l’utilisateur a besoin.',
      'work.eyebrow': 'Réalisations',
      'work.h2': 'Trois projets.<br><span class="muted-heading">Trois questions de produit.</span>',
      'work.note': 'Projets personnels conçus pour explorer des expériences web, mobiles et IA utiles. Ce ne sont ni des missions pour des clients ni des postes salariés.',
      'personal': 'Projet personnel',
      'personalUp': 'PROJET PERSONNEL',
      'nafti.tag': 'Un assistant multimodal, pensé comme une seule expérience produit.',
      'nafti.desc': 'Une application web Flask qui réunit chat assisté, analyse de plusieurs images, génération d’images, saisie vocale dans le navigateur, lecture audio et conversations enregistrées. Le produit comprend aussi la création de compte et la connexion, une connexion Google OAuth optionnelle, des profils d’activité, des paramètres, une galerie, des liens de partage de conversation et l’export en TXT, Markdown et JSON. La disponibilité des fournisseurs et leurs quotas peuvent affecter les fonctions d’IA.',
      'clash.tag': 'Une idée en langue locale, conçue pour le web et Android.',
      'clash.desc': 'L’utilisateur envoie une photo et reçoit un verdict ludique en derja tunisienne, qui tient compte du style, de la pose, de l’expression et de l’ambiance. Le parcours prépare un texte arabe vocalisé tout en conservant les mots français ou anglais naturels, puis peut produire une carte à partager ou une courte vidéo. Gemini passe par un Cloudflare Worker, avec un repli CLIP dans le navigateur, une entrée OpenAI optionnelle, le partage Android, des points d’accroche pour la voix et la facturation, des quotas, des contrôles d’origine et des listes de modèles autorisés. La génération vocale VoxCPM reste un pilote optionnel, pas une fonction de production garantie.',
      'fim.tag': 'Une boutique en ligne, de la découverte à la commande.',
      'fim.desc': 'Une boutique de mode responsive avec catalogue, filtres par collection, liste de souhaits, panier interactif (quantités et totaux), validation de commande et informations de livraison, fenêtre de paiement à onglets avec récapitulatif de commande, et parcours de virement D17. Les notifications de commande passent par FormSubmit. La vérification du virement D17 est manuelle, faite par le commerçant ; le site ne s’intègre pas directement à une API bancaire.',
      'btn.demo': 'Ouvrir la démo en ligne',
      'btn.src': 'Voir le code source',
      'demos.eyebrow': 'Démonstrations en ligne',
      'demos.h2': 'Essayez le travail,<br><span class="muted-heading">pas seulement la description.</span>',
      'demos.note': 'Les trois démos publiques ont été vérifiées avant cette mise à jour. Chaque lien ouvre l’expérience en ligne dans un nouvel onglet ; les quotas des fournisseurs et la disponibilité des services hébergés peuvent affecter les interactions d’IA.',
      'demo.nafti': 'Assistant multimodal · démo en ligne',
      'demo.clash': 'Expérience web en derja · démo en ligne',
      'demo.fim': 'Boutique responsive · démo en ligne',
      'ap.eyebrow': 'Ma façon de construire',
      'ap.h2': 'Faire en sorte que la fonctionnalité<br><span>serve vraiment l’utilisateur.</span>',
      'ap.p': 'Je me concentre sur le lien entre le comportement de l’interface, des intégrations utiles et un parcours produit que l’on comprend.',
      'ap.1h': 'Partir du parcours utilisateur',
      'ap.1p': 'Rendre la prochaine action claire sur tous les écrans, de la navigation et du filtrage à l’envoi d’une saisie, au partage d’un résultat ou à la commande.',
      'ap.2h': 'Intégrer avec des limites claires',
      'ap.2p': 'Connecter des API et des services d’IA en indiquant honnêtement les limites des fournisseurs, les étapes manuelles, les règles de consentement, les solutions de repli et les fonctions expérimentales.',
      'ap.3h': 'Construire, tester, déployer, apprendre',
      'ap.3p': 'Mettre en production une fonctionnalité web ou mobile utile, ajouter des limites testables quand c’est pertinent, puis s’appuyer sur le résultat pour la prochaine itération.',
      'tk.eyebrow': 'Compétences, reliées à des preuves',
      'tk.h2': 'Une boîte à outils pratique,<br><span class="muted-heading">appliquée au produit.</span>',
      'tk.p': 'Voici une carte détaillée des compétences visibles dans les trois dépôts personnels : modèles d’implémentation, bibliothèques, outils de livraison et exploitation du produit. Elle ne prétend pas à la maîtrise de chaque technologie citée. Les pilotes optionnels et les fonctions dépendant d’un fournisseur sont indiqués comme tels.',
      'ev': 'Preuve :',
      'tk.g1': 'Bases front-end',
      'tk.e1': 'les trois projets utilisent des interfaces dans le navigateur ; Fashion In Motion présente une boutique statique responsive, tandis que Nafti AI et Clash AI utilisent des API du navigateur, un état côté client et des écrans de produit interactifs.',
      'tk.g2': 'UX produit et parcours de vente',
      'tk.e2': 'Fashion In Motion met en œuvre le parcours de boutique, de la navigation et du filtrage au panier, aux détails de commande et à la présentation des moyens de paiement. Le virement D17 est vérifié manuellement, sans automatisation par API bancaire.',
      'tk.g3': 'Ingénierie web Python',
      'tk.e3': 'serveur Flask de Nafti AI, modèles, point d’entrée WSGI, connexion Google Flask-Dance optionnelle, couche CORS, routes JSON et appels aux fournisseurs.',
      'tk.g4': 'IA, ML et systèmes d’images',
      'tk.e4': 'Nafti AI combine chat, analyse visuelle et génération d’images via Flask et les fournisseurs ; Clash AI utilise Gemini via un Worker avec repli Transformers.js/CLIP dans le navigateur et d’autres fournisseurs en option.',
      'tk.g5': 'Voix et langues',
      'tk.e5': 'Nafti AI propose la dictée dans le navigateur et la lecture audio. Clash AI prépare le texte en derja pour la voix et contient des outils de traitement audio, de corpus et d’évaluation. VoxCPM est expressément expérimental et dépend des quotas ; ce n’est pas une fonction de production garantie.',
      'tk.g6': 'Comptes, état et partage',
      'tk.e6': 'Nafti AI propose comptes, profils, sessions enregistrées, état de la galerie, exports de conversations et liens de partage ; Clash AI ajoute le partage natif et web et des contenus médias partageables.',
      'tk.g7': 'Mobile et livraison native',
      'tk.e7': 'Clash AI contient une application web Capacitor, une structure de projet Android complète, des ponts de plugins Java, la configuration Gradle, l’intégration native du partage et de la voix, et des points d’accroche pour la facturation.',
      'tk.g8': 'Cloud, serverless et déploiement',
      'tk.e8': 'Nafti AI documente les parcours Flask/WSGI et Cloudflare D1/Workers AI ; Clash AI utilise Pages, Workers, KV et Workers AI ; Fashion In Motion est publié comme site statique GitHub Pages.',
      'tk.g9': 'Fiabilité, sécurité et exploitation',
      'tk.e9': 'le proxy et les Workers de Clash AI intègrent des contrôles de quotas, d’origine, de taille des entrées, de modèles et de disponibilité ; les dépôts documentent les limites de confidentialité et de consentement. Fashion In Motion indique clairement la vérification manuelle D17, et Nafti AI communique les limites des fournisseurs.',
      'tk.g10': 'Tests et outillage',
      'tk.e10': 'Clash AI inclut des tests Node et Python pour la facturation, le budget vocal et l’évaluation de corpus, ainsi que des scripts d’installation et de build Windows/Gradle. Les trois dépôts sont maintenus et livrés via des flux de travail Git.',
      'ct.eyebrow': 'Ouvert à la bonne collaboration',
      'ct.h2': 'Une fonctionnalité produit<br>à construire ?',
      'ct.p': 'Je suis ouvert aux missions freelance rémunérées à distance et au temps partiel : développement web, intégration front-end, intégration d’API, produits Android, parcours produit et fonctions d’IA pragmatiques.',
      'f.name': 'Votre nom',
      'f.email': 'Votre e-mail',
      'f.type': 'De quoi avez-vous besoin ?',
      'o1': 'Site web ou page d’atterrissage',
      'o2': 'Application web (Flask ou JavaScript)',
      'o3': 'Application Android',
      'o4': 'Intégration d’IA ou d’API',
      'o5': 'Autre chose',
      'f.msg': 'Détails du projet',
      'f.ph': 'Que doit-il faire, pour qui, et pour quand en avez-vous besoin ?',
      'f.send': 'Envoyer le message',
      'ct.alt': 'Vous préférez LinkedIn ?',
      'ct.alt2': 'Écrivez-moi là-bas',
      'ct.loc1': 'Sousse, Tunisie',
      'ct.loc2': 'Collaboration à distance',
      'ft.role': 'Développeur d’applications Web & Android · Sousse, Tunisie',
      'form.err': 'Vérifiez les champs signalés : le nom, un e-mail valide et votre message sont obligatoires.',
      'form.sending': 'Envoi en cours…',
      'form.ok': 'Message envoyé. Je réponds sous deux jours ouvrés.',
      'form.fail': 'Le message n’a pas pu être envoyé. Réessayez, ou écrivez-moi sur WhatsApp ou LinkedIn.'
    },

    ar: {
      'meta.title': 'آسر نفطي — مطوّر ويب وأندرويد في تونس',
      'meta.desc': 'مطوّر ويب وأندرويد في سوسة، تونس. مشاريع مستقلة بلغات JavaScript وPython/Flask وواجهات متجاوبة وتكامل الذكاء الاصطناعي وواجهات API والنشر على Cloudflare.',
      'skip': 'انتقل إلى المحتوى',
      'intro.skip': 'تخطَّ',
      'intro.line': 'منتجات مفيدة · واجهات واضحة · جاهزة للإطلاق',
      'nav.work': 'أعمال مختارة',
      'nav.approach': 'منهجيتي',
      'nav.toolkit': 'المهارات',
      'nav.cta': 'لنتحدث',
      'hero.eyebrow': 'ويب · أندرويد · بناء المنتجات',
      'hero.h1': 'منتجات مفيدة.<br><span class="accent-text">واجهات واضحة.</span><br>جاهزة للإطلاق.',
      'hero.lede': 'أنا آسر، مطوّر ويب وأندرويد من سوسة، تونس. منذ أوت 2025 أبني منتجات مستقلة باستخدام واجهات JavaScript متجاوبة وتطبيقات ويب بلغة Python/Flask وتكامل مع واجهات برمجة التطبيقات والذكاء الاصطناعي ونشر عبر Cloudflare. يعرض هذا الموقع مشاريع شخصية، وليست أعمالاً مدفوعة لحساب عملاء.',
      'hero.pos1': 'مطوّر تطبيقات ويب وأندرويد',
      'hero.pos2': 'JavaScript وPython/Flask وتكامل الذكاء الاصطناعي وواجهات API',
      'hero.pos3': 'منفتح على المهام الحرة عن بُعد المحددة بوضوح والعمل بدوام جزئي',
      'hero.cta': 'استعرض الأعمال المختارة',
      'hero.li': 'تواصل معي عبر لينكدإن',
      'wa.btn': 'راسلني على واتساب',
      'wa.float': 'راسلني على واتساب',
      'wa.msg': 'مرحباً آسر، اطلعت على معرض أعمالك وأودّ التحدث عن مشروع.',
      'hero.city': 'سوسة، تونس',
      'hero.open': 'منفتح على العمل الحر المدفوع عن بُعد والدوام الجزئي',
      'art.top': 'مشاريع مستقلة',
      'art.title': 'من أول<br>واجهة إلى<br><em>منتج حيّ.</em>',
      'art.l1': 'تصميم',
      'art.l2': 'تكامل',
      'art.l3': 'نشر',
      'art.foot': 'تطوير موجّه نحو المنتج',
      'intro.kicker': 'منظور مطوّر عملي',
      'intro.text': 'البرمجيات الجيدة تربط الواجهة بالتكامل وبالخطوة التالية التي يحتاجها المستخدم.',
      'work.eyebrow': 'أعمال مختارة',
      'work.h2': 'ثلاثة مشاريع.<br><span class="muted-heading">ثلاثة أسئلة حول المنتج.</span>',
      'work.note': 'مشاريع شخصية لاستكشاف تجارب ويب وموبايل وذكاء اصطناعي مفيدة. ليست أعمالاً لعملاء ولا وظائف بأجر.',
      'personal': 'مشروع شخصي',
      'personalUp': 'مشروع شخصي',
      'nafti.tag': 'مساعد متعدد الوسائط، مصمَّم كتجربة منتج واحدة.',
      'nafti.desc': 'تطبيق ويب مبني بـ Flask يجمع بين المحادثة المساعَدة وتحليل عدة صور وتوليد الصور والإدخال الصوتي في المتصفح والتشغيل الصوتي وحفظ المحادثات. ويشمل أيضاً إنشاء الحسابات وتسجيل الدخول، وتسجيل دخول Google OAuth اختيارياً، وملفات النشاط، والإعدادات، ومعرضاً للصور، وروابط لمشاركة المحادثات، وتصدير بصيغ TXT وMarkdown وJSON. قد تتأثر ميزات الذكاء الاصطناعي بتوفر المزوّدين وحصصهم.',
      'clash.tag': 'فكرة بلغة محلية، مصمَّمة للويب وأندرويد.',
      'clash.desc': 'يرسل المستخدم صورة ويتلقى حكماً مرحاً بالدارجة التونسية، يراعي الأسلوب والوضعية والتعبير والأجواء. تُعدّ التجربة نصاً عربياً مشكولاً مع الحفاظ على الكلمات الفرنسية أو الإنجليزية كما هي، ويمكن أن تنتج بطاقة قابلة للمشاركة أو فيديو قصيراً. يعمل Gemini عبر Cloudflare Worker، مع بديل CLIP في المتصفح، ومدخل OpenAI اختياري، ومشاركة أندرويد، ونقاط ربط للصوت والفوترة، وحصص استخدام، وفحوص للمصدر، وقوائم نماذج مسموحة. أما توليد الصوت VoxCPM فيبقى تجربة اختيارية وليس ميزة إنتاج مضمونة.',
      'fim.tag': 'تجربة متجر، من الاكتشاف إلى الطلب.',
      'fim.desc': 'متجر أزياء متجاوب مع كتالوج للتصفح ومرشحات للمجموعات وقائمة أمنيات وسلة تفاعلية مع التحكم في الكميات والمجاميع، وصفحة إتمام الطلب وتفاصيل التوصيل، ونافذة دفع بتبويبات وملخص للطلب، ومسار تحويل D17. تعتمد إشعارات الطلبات على FormSubmit. والتحقق من تحويل D17 يدوي يقوم به التاجر؛ فالموقع غير مرتبط مباشرة بأي واجهة برمجية بنكية.',
      'btn.demo': 'افتح العرض المباشر',
      'btn.src': 'عرض الشيفرة المصدرية',
      'demos.eyebrow': 'عروض مباشرة',
      'demos.h2': 'جرّب العمل،<br><span class="muted-heading">لا الوصف فقط.</span>',
      'demos.note': 'جرى التحقق من العروض العامة الثلاثة قبل هذا التحديث. يفتح كل رابط التجربة المباشرة في تبويب جديد؛ وقد تؤثر حصص المزوّدين وتوفر الخدمات المستضافة على تفاعلات الذكاء الاصطناعي.',
      'demo.nafti': 'مساعد متعدد الوسائط · عرض مباشر',
      'demo.clash': 'تجربة ويب بالدارجة · عرض مباشر',
      'demo.fim': 'متجر متجاوب · عرض مباشر',
      'ap.eyebrow': 'كيف أبني',
      'ap.h2': 'اجعل الميزة<br><span>تعمل لصالح المستخدم.</span>',
      'ap.p': 'أركّز على الربط بين سلوك الواجهة والتكاملات المفيدة ومسار منتج يفهمه الناس.',
      'ap.1h': 'ابدأ من مسار المستخدم',
      'ap.1p': 'جعل الخطوة التالية واضحة على مختلف أحجام الشاشات، من التصفح والتصفية إلى إرسال مدخل أو مشاركة نتيجة أو تقديم طلب.',
      'ap.2h': 'التكامل بحدود واضحة',
      'ap.2p': 'ربط واجهات API وخدمات الذكاء الاصطناعي مع التوضيح الصادق لحدود المزوّدين والخطوات اليدوية وقواعد الموافقة والبدائل والميزات التجريبية.',
      'ap.3h': 'ابنِ، اختبر، انشر، تعلّم',
      'ap.3p': 'إيصال ميزة ويب أو موبايل عملية إلى نشر فعلي، مع إضافة حدود قابلة للاختبار عند الحاجة، ثم الاستفادة من النتيجة في التكرار التالي.',
      'tk.eyebrow': 'مهارات مرتبطة بأدلة',
      'tk.h2': 'عدّة عمل عملية،<br><span class="muted-heading">مطبَّقة على المنتج.</span>',
      'tk.p': 'هذه خريطة موسّعة للمهارات الظاهرة في المستودعات الشخصية الثلاثة، وتشمل أنماط التنفيذ والمكتبات وأدوات التسليم وتشغيل المنتج. وهي لا تدّعي إتقان كل تقنية مذكورة. وتُوسَم التجارب الاختيارية والميزات المرتبطة بمزوّد خارجي بذلك صراحة.',
      'ev': 'الدليل:',
      'tk.g1': 'أساسيات الواجهة الأمامية',
      'tk.e1': 'تعتمد المشاريع الثلاثة على واجهات تعمل في المتصفح؛ ويُظهر Fashion In Motion متجراً ثابتاً متجاوباً، بينما يستخدم Nafti AI وClash AI واجهات برمجة المتصفح وحالة جهة العميل وشاشات منتج تفاعلية.',
      'tk.g2': 'تجربة المنتج ومسارات التجارة',
      'tk.e2': 'ينفّذ Fashion In Motion رحلة المتجر من التصفح والتصفية إلى السلة وتفاصيل الطلب وعرض وسائل الدفع. ويتم التحقق من تحويل D17 يدوياً دون أتمتة عبر واجهة بنكية.',
      'tk.g3': 'هندسة الويب بلغة Python',
      'tk.e3': 'خادم Flask الخاص بـ Nafti AI وقوالبه ونقطة دخول WSGI وتسجيل الدخول عبر Google باستخدام Flask-Dance (اختياري) وطبقة CORS ومسارات JSON واستدعاءات المزوّدين.',
      'tk.g4': 'الذكاء الاصطناعي والتعلم الآلي وأنظمة الصور',
      'tk.e4': 'يجمع Nafti AI بين المحادثة والتحليل البصري وتوليد الصور عبر Flask والمزوّدين؛ ويستخدم Clash AI نموذج Gemini عبر Worker مع بديل Transformers.js/CLIP في المتصفح وخيارات مزوّدين إضافية.',
      'tk.g5': 'تجارب الصوت واللغة',
      'tk.e5': 'ينفّذ Nafti AI الإملاء الصوتي في المتصفح والتشغيل الصوتي. ويُعدّ Clash AI نص الدارجة للصوت ويضم أدوات لمعالجة الصوت وبناء المدونة والتقييم. أما VoxCPM فتجريبي صراحةً ومرتبط بالحصص، وليس ميزة إنتاج مضمونة.',
      'tk.g6': 'الحسابات والحالة والمشاركة',
      'tk.e6': 'يوفّر Nafti AI الحسابات والملفات الشخصية والجلسات المحفوظة وحالة المعرض وتصدير المحادثات وروابط المشاركة؛ ويضيف Clash AI المشاركة الأصلية وعبر الويب ومخرجات وسائط قابلة للمشاركة.',
      'tk.g7': 'الموبايل والتسليم الأصلي',
      'tk.e7': 'يضم Clash AI تطبيق ويب بـ Capacitor وبنية مشروع أندرويد كاملة وجسور إضافات Java وإعدادات Gradle وتكاملاً أصلياً للمشاركة والصوت ونقاط ربط لعميل الفوترة.',
      'tk.g8': 'السحابة وبدون خوادم والنشر',
      'tk.e8': 'يوثّق Nafti AI مساري Flask/WSGI وCloudflare D1/Workers AI؛ ويستخدم Clash AI منصات Pages وWorkers وKV وWorkers AI؛ وينشر Fashion In Motion كموقع ثابت على GitHub Pages.',
      'tk.g9': 'الموثوقية والأمان والتشغيل',
      'tk.e9': 'يتضمن وكيل Clash AI وWorkers فيه ضوابط للحصص والمصدر وحجم المدخلات والنماذج والتوفر؛ وتوثّق المستودعات حدود الخصوصية والموافقة. ويوضّح Fashion In Motion أن التحقق من D17 يدوي، ويبيّن Nafti AI حدود المزوّدين.',
      'tk.g10': 'الاختبار وأدوات التطوير',
      'tk.e10': 'يتضمن Clash AI اختبارات Node وPython لمنطق الفوترة وميزانية الصوت وتقييم المدونة، إضافةً إلى سكربتات إعداد وبناء لـ Windows/Gradle. وتُدار المستودعات الثلاثة وتُسلَّم عبر سير عمل قائم على Git.',
      'ct.eyebrow': 'منفتح على التعاون المناسب',
      'ct.h2': 'هل لديك ميزة منتج<br>تحتاج إلى بنائها؟',
      'ct.p': 'أنا منفتح على فرص العمل الحر المدفوعة عن بُعد والدوام الجزئي في تطوير الويب وتنفيذ الواجهات الأمامية وتكامل واجهات API ومنتجات أندرويد ومسارات المنتج وميزات الذكاء الاصطناعي العملية.',
      'f.name': 'اسمك',
      'f.email': 'بريدك الإلكتروني',
      'f.type': 'ماذا تحتاج؟',
      'o1': 'موقع ويب أو صفحة هبوط',
      'o2': 'تطبيق ويب (Flask أو JavaScript)',
      'o3': 'تطبيق أندرويد',
      'o4': 'تكامل ذكاء اصطناعي أو API',
      'o5': 'شيء آخر',
      'f.msg': 'تفاصيل المشروع',
      'f.ph': 'ماذا يجب أن يفعل، ولمن هو، ومتى تحتاجه؟',
      'f.send': 'إرسال الرسالة',
      'ct.alt': 'تفضّل لينكدإن؟',
      'ct.alt2': 'راسلني هناك',
      'ct.loc1': 'سوسة، تونس',
      'ct.loc2': 'تعاون عن بُعد',
      'ft.role': 'مطوّر تطبيقات ويب وأندرويد · سوسة، تونس',
      'form.err': 'راجع الحقول المحددة: الاسم وبريد إلكتروني صالح ورسالتك حقول إلزامية.',
      'form.sending': 'جارٍ الإرسال…',
      'form.ok': 'تم إرسال الرسالة. سأردّ خلال يومي عمل.',
      'form.fail': 'تعذّر إرسال الرسالة. حاول مجدداً، أو راسلني على واتساب أو لينكدإن.'
    }
  };

  var root = document.documentElement;
  var current = 'en';
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n],[data-i18n-html],[data-i18n-ph],[data-i18n-label]'));
  var metaDesc = document.querySelector('meta[name="description"]');
  var EN_META = { title: document.title, desc: metaDesc ? metaDesc.getAttribute('content') : '' };
  var fontLoaded = false;

  // Remember the English source text so we can switch back to it.
  nodes.forEach(function (el) {
    if (el.hasAttribute('data-i18n')) el.dataset.enText = el.textContent;
    if (el.hasAttribute('data-i18n-html')) el.dataset.enHtml = el.innerHTML;
    if (el.hasAttribute('data-i18n-ph')) el.dataset.enPh = el.getAttribute('placeholder') || '';
    if (el.hasAttribute('data-i18n-label')) el.dataset.enLabel = el.getAttribute('aria-label') || '';
  });

  function t(key, fallback) {
    var d = DICT[current];
    return (d && d[key]) || fallback;
  }
  window.portfolioT = t;

  function loadArabicFont() {
    if (fontLoaded) return;
    fontLoaded = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap';
    document.head.appendChild(link);
  }

  function readSaved() {
    try { return localStorage.getItem('asserfolio-lang'); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem('asserfolio-lang', lang); } catch (e) { /* storage can be unavailable */ }
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    current = lang;
    var d = DICT[lang] || {};

    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') loadArabicFont();

    nodes.forEach(function (el) {
      if (el.hasAttribute('data-i18n')) {
        el.textContent = d[el.getAttribute('data-i18n')] || el.dataset.enText;
      }
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = d[el.getAttribute('data-i18n-html')] || el.dataset.enHtml;
      }
      if (el.hasAttribute('data-i18n-ph')) {
        el.setAttribute('placeholder', d[el.getAttribute('data-i18n-ph')] || el.dataset.enPh);
      }
      if (el.hasAttribute('data-i18n-label')) {
        var label = d[el.getAttribute('data-i18n-label')] || el.dataset.enLabel;
        el.setAttribute('aria-label', label);
        el.setAttribute('title', label);
      }
    });

    document.title = d['meta.title'] || EN_META.title;
    if (metaDesc) metaDesc.setAttribute('content', d['meta.desc'] || EN_META.desc);

    // WhatsApp links with a pre-filled message in the visitor's language
    var waText = encodeURIComponent(d['wa.msg'] || EN_WA);
    Array.prototype.forEach.call(document.querySelectorAll('[data-wa]'), function (a) {
      a.setAttribute('href', 'https://wa.me/' + PHONE + '?text=' + waText);
    });

    // Tell the contact form which language the visitor used
    var langField = document.getElementById('cf-lang');
    if (langField) langField.value = lang;

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function initialLanguage() {
    var param = /[?&]lang=(en|fr|ar)(?:&|#|$)/.exec(location.search);
    if (param) return param[1];
    var saved = readSaved();
    if (SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      save(lang);
      apply(lang);
    });
  });

  apply(initialLanguage());
})();

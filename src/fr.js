export const resume = {
	name: "Pierre Avital",
	role: <>Ingénieur/Chercheur en Traitement du Signal</>,
	email: "pierre.avital@gmail.com",
	phone: "(+33)06 30 82 48 60",
	intro: <>Passionné par le développement logiciel, et spécialisé dans le traitement du signal, j'ai néanmoins su garder une palette de compétences diverses qui fait de moi un ingénieur polyvalent et doté d'une vue d'ensemble idéale pour l'architecture de systèmes multi-technologies. J'ai un enthousiasme particulier pour la recherche et développement, né d'un amour du challenge et d'une personnalité créative.</>,
	academics: [{
		title: "Doctorat en Traitement du Signal",
		from: "Juin 2018",
		to: "Mai 2021",
		school: "Centrale Supélec (L2S) - Valeo (CIFRE)",
		where: "Créteil - Gif-sur-Yvette",
		description: (<><em><u>Intitulé:</u></em> Nouvelles stratégies de localisation de sources en environnement de propagation complexe<br /><em><u>Encadrants:</u></em> José Picheral, Gilles Chardon.</>),
		more_details: ""
	}, {
		title: "Ingénieur Technologies Mobiles et Systèmes Embarqués / Master Sécurité des SI",
		from: "2011",
		to: "2017",
		school: "Université de Technologie de Troyes",
		where: "Troyes",
		description: "Obtenant lors du Tronc Commun une solide formation en Mathématiques, Physique, Électronique et Chimie, \
			je me suis distingué au cours de mon cursus ingénieur par mon intérêt particulier pour le bas niveau et le \
			traitement du signal. J’ai complété ma formation d’un master SSI où j’ai excellé en cryptographie.",
		more_details: ""
	}],
	experience: [{
		title: "Doctorat en Traitement du Signal",
		from: "Juin 2018",
		to: "Mai 2021",
		employer: "CentraleSupélec (L2S) - Valeo",
		where: "Créteil - Gif-sur-Yvette",
		description: <>Dans le cadre du projet où j’étais ingénieur à mon poste précédent, je réalise actuellement une thèse en
			partenariat avec le L2S de CentraleSupélec.<br />
			En plus de mes recherches en localisation de sources, j'ai contribué à l'architecture et au développement des prototypes et outils réalisés dans le cadre de mon projet.<br />
			<em><u>Intitulé:</u></em> Nouvelles stratégies de localisation de sources en environnement de propagation complexe<br />
			<em><u>Encadrants:</u></em> José Picheral, Gilles Chardon.</>,
		keywords: ["Rust", "Python", "C", "IoT", "Bluetooth", "Ultra-Wide Band", "Architecture Système", "Systèmes Embarqués"]
	}, {
		title: "Ingénieur Recherche et Développement",
		from: "Novembre 2017",
		to: "Juin 2018",
		employer: "Valeo",
		where: "Créteil",
		description: <>Dans le cadre d’un projet d’ouverture passive de véhicule, j’ai travaillé sur la localisation non-coopérative à
		courte portée d’un smartphone en environnement de propagation complexe. Les contraintes principales du
		projet étant l’universalité et la consommation électrique, Bluetooth LE avait été choisi comme technologie de
		support.<br />
		Mon rôle se divisait en deux composantes: d’un coté, l’étude des méthodes de localisation en elles-même,
		à travers des algorithmes tels que MUSIC et ESPRIT ; de l’autre, le développement d’une grande part
		des logiciels utilisés dans le cadre du projet, notamment pour assurer la communication entre les divers
		composants.</>,
		keywords: ["Python", "C", "IoT", "Bluetooth", "Systèmes Embarqués"]
	}, {
		title: "Stage de fin d'études : Sécurité des véhicules connectés",
		from: "Février 2017",
		to: "Aout 2017",
		employer: "Pole Judiciaire de la Gendarmerie Nationale",
		where: "Pontoise",
		description: <>Partant de l’étude de la sécurité d’applications Android, j’ai développé un plugin d’intégration pour Atom
		nommé SmalIntegrate basé sur des outils open-source transformant cet éditeur de texte en IDE spécialisé
			pour le reverse engineering d’applications Android.<br />
			J’ai également développé une preuve de concept d’écoute de la bande ISM 2.4GHz à l’aide d’une SDR et de
			recherche de signaux Bluetooth sans information préalable dans le signal obtenu.</>,
		keywords: ["Reverse Engineering", "Ethical Hacking", "Android", "Bluetooth"]
	}, {
		title: "Stage : développement d'innovation et conseil scientifique",
		from: "Septembre 2015",
		to: "Février 2016",
		employer: "Castrol innoVentures",
		where: "Reading, UK",
		description: "InnoVentures est l’incubateur d’innovation de Castrol (BP). Au sein d’une équipe issue de diverses cultures et \
			formations, j’y ai agi en tant que consultant scientifique et ai participé au développement de divers projets en \
			suivant les méthodologies issues du monde des start-ups.",
		keywords: null
	}],
	publications: {
		academic: [/*{
			title: "Design of switching sequences for sine parameters estimation on switched antenna arrays",
			ref: "Signal Processing",
			status: "soumis à"
		}*/],
		"open-source": [{
			title: "no-deadlocks",
			description: "une bibliothèque Rust de débogage de deadlocks basée sur l'analyse de graphes."
		}, {
			title: "secded",
			description: "une bibliothèque Rust d'encodage correcteur par codes de Hamming avec parité."
		}, {
			title: "tokio-simplified",
			description: "une API Rust facilitant l'utilisation pour les débutants de Tokio, une librairie populaire de programmation asynchrone."
		}, {
			title: "cpp-mutex-guard",
			description: "une bibliothèque C++ fournissant des smart pointers pour une gestion orientée RAII des mutex."
		}]
	},
	skills: {
		linguistic: [{
			name: "Français",
			details: "Langue natale.",
		}, {
			name: "Anglais",
			details: "Courant, connaissance approfondie du langage technique et scientifique. BULATS C1 (2012), Erasmus C2 (2016). 9 mois cumulés en pays anglo-saxons, dont 6 en stage à Reading, UK.",
		}, {
			name: "Japonais",
			details: "Capacité à converser. Voyages personnels au Japon de 3 semaines chacun en 2014 et 2017 (6 semaines cumulées)."
		}, {
			name: "Allemand",
			details: "Niveau scolaire. B1/B2. 1 mois cumulé en Allemagne."
		}],
		programming: {
			frequent: ["Rust", "C/C++", "JavaScript", "Python"],
			occasional: ["Bash", "Haskell", "TypeScript", "C#", "Java", "Kotlin"],
			web: "Je suis familier avec les écosystèmes React (ce CV est développé en React) et Vue"
		},
		others: []
	}
}
# Cahier des charges – T4

## Description des objectifs pédagogiques du jeu

### Objectif pédagogique général

L’objectif du jeu est de sensibiliser les joueurs aux différentes formes de violence possiblement subit au quotidien

### Objectif pédagogique général plus détaillé

- Faire comprendre au joueur l’idée de « violences »
- Expliquer les différentes formes de violences subies
- Le joueur doit apprendre comment se protéger face à des violences
- Identifier les situations qui provoquent une violence et sous quelle forme
- Les stratégies pour résoudre les situations.

# Description du jeu
- Type de jeu : Point and Click
- Incarnation du joueur : Personne lambda
## Déroulement d’une partie

- La barre de frustration commence à 0%

- Début : 
	La partie commence au début de la journée (7h00).

- Déroulement :
	Durant la partie le joueur devra faire face à différentes scènes de violence au cours de la journée. Chaque situation va augmenter la jauge de « frustration », à vous de faire le bon choix entre les différentes solutions pour faire baisser au maximum la jauge. Dans le cas où cette jauge serait pleine, elle provoquera sur le joueur des comportements propre à sa personnalité(*). Pour faire redescendre cette barre, le joueur et va devoir choisir comment réagir à ces situations, en choisissant parmi les solutions proposées
	→ La partie est une journée classique de 7h00 à 22H00, du réveil jusqu’au couché


*Si la personne est timide est partira en courant, si elle est imposante la personne sera agressive
- Fin :
	La partie finie à la fin de la journée 22H00. Si la jauge n’est pas plein vous avez gagné
	(si elle est pleine vous avez perdu) ← pas sur

 
### Paramétrage d’une partie
- Sélection de différents caractères proposés avec différentes caracteristique dont la sensibilité aux violences

# Modèle conceptuel applicatif


## Description des fonctionnalités

- Cliquer sur les différentes actions de réponses aux situations de violences affichées à l’écran

### Informations au joueur

- Le profil choisi

- Gestion des tours 
	- La jauge de frustration qu’il faut surveiller

- Informations d’événement : 
	- Description de l’événement
	- Description des actions possible avec leurs conséquences

### Moteur interne

- Le temps avance automatiquement apres chaque "tour" passé

- Gestion jauge :
    - PourcentageJaugeAugmentation / PourcentageJaugeReduction

- Gestion actions :
    - Données des conséquences transmises dans la logique de l’application pour la jauge



### Scénarios 

Situation de violence choisit aléatoirement en fonction du profil choisi
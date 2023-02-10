<div align="center">
  <h1>Ignite Teams App</h1>
  
  <br />
  
   <image src="https://user-images.githubusercontent.com/26945693/217905178-f6af8a80-ca9f-4e35-b71d-fb1c9270a9a4.png" />

   <p>
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EduardoDrozda/igniteteams?color=%32B768">
      <a href="https://www.linkedin.com/in/henrique-martins-5b2bb71a5/" target="_blank" rel="noopener noreferrer">
        <img alt="Made by" src="https://img.shields.io/badge/made%20by-Eduardo%20Drozda-%32B768">
      </a>          
      <img alt="GitHub" src="https://img.shields.io/github/license/hmartiins/plantmanager?color=%32B768">
    </p>
   </div>
   
## Table of Contents

- [Description](#description)
- [Preview](#preview)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Thinks i must finish](#things-i-must-finish)

## Description

Ignite Teams App it's a app created with React Native for you to organize teams for anythings.
With Ignite Teams you can

- Create multiples teams.
- Delete multiple teams.
- Create multiple groups for each team.
- Delete multple groups for each team.
- Add players for each groups.
- Remove player for each groups.

Ignite Teams App has created like a challenge for Ignite by Rocketseat. The Rockeseat has gived the prototype created inside Figma

<br />

## Preview

<div align="center">
  <image src="https://user-images.githubusercontent.com/26945693/217910082-2671fd00-3ba5-4556-b69a-aaf4d80d6362.png" width="250" />
  <image src="https://user-images.githubusercontent.com/26945693/217908023-893fdad7-8905-479e-a442-2f72385ccac2.png" width="250" />
</div>

<div align="center">
  <image src="https://user-images.githubusercontent.com/26945693/217908178-2e376fc2-c6c5-4cf6-a615-2bfec7135bd4.png" width="250"/>
  <image src="https://user-images.githubusercontent.com/26945693/217908475-8e87f154-f204-47a3-aa05-9c2a888a4c07.png" width="250" />
</div>

## Dependencies

| Dependency | Version |
|--|--|
|@expo-google-fonts/roboto|^0.2.2|
|@react-navigation/native|^6.1.1|
|@react-navigation/native-stack|^6.9.7|
|expo|~47.0.9|
|expo-font|~11.0.1|
|expo-status-bar|~1.4.2|
|phosphor-react-native|^1.1.2|
|react|18.1.0|
|react-dom|18.1.0|
|react-native|0.70.5|
|react-native-safe-area-context|4.4.1|
|react-native-screens|~3.18.0|
|react-native-svg|13.4.0|
|react-native-web|~0.18.9|
|styled-components|^5.3.6|
|@react-native-async-storage/async-storage|~1.17.3|

## Dev Dependencies

| Dependency | Version |
|--|--|
|@babel/core|^7.12.9|
|@types/react|~18.0.14|
|@types/react-native|~0.70.6|
|@types/styled-components|^5.1.26|
|@types/styled-components-react-native|^5.2.0|
|babel-plugin-module-resolver|^4.1.0|
|typescript|^4.6.3|

## Folder Structure

```
📦src  
 ┣ 📂@types  
 ┃ ┣ 📜navigation.d.ts  
 ┃ ┣ 📜png.d.ts  
 ┃ ┗ 📜styled.d.ts  
 ┣ 📂assets  
 ┃ ┣ 📜logo.png  
 ┃ ┣ 📜logo@2x.png  
 ┃ ┗ 📜logo@3x.png  
 ┣ 📂components  
 ┃ ┣ 📂Button  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂ButtonIcon  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂Filter  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂GroupCard  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂Header  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂Highlight  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂Input  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂ListEmpty  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂Loading  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┗ 📂PlayerCard  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┣ 📂routes  
 ┃ ┣ 📜app.routes.tsx  
 ┃ ┗ 📜index.tsx  
 ┣ 📂screens  
 ┃ ┣ 📂Groups  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┣ 📂NewGroup  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┗ 📂Players  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┣ 📂storage  
 ┃ ┣ 📂group  
 ┃ ┃ ┣ 📜groupCreate.ts  
 ┃ ┃ ┣ 📜groupRemoveByName.ts  
 ┃ ┃ ┗ 📜groupsGetAll.ts  
 ┃ ┣ 📂players  
 ┃ ┃ ┣ 📜playerAddByGroup.ts  
 ┃ ┃ ┣ 📜playerGetByGroupAndTeam.ts  
 ┃ ┃ ┣ 📜playerRemoveByGroup.ts  
 ┃ ┃ ┣ 📜playersGetByGroup.ts  
 ┃ ┃ ┗ 📜PlayerStorageDTO.ts  
 ┃ ┗ 📜storageConfig.ts  
 ┣ 📂theme  
 ┃ ┗ 📜index.ts  
 ┗ 📂utils  
 ┃ ┗ 📜AppError.ts
```

## Things i must finish

 1. Integration with Api
 2. Unit Tests
 3. E2E Tests

<br />
<br />

<div align="center">
 <p>Design created by <strong>Rocketseat</strong></p>
</div>

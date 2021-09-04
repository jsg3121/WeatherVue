# Best Weather

**last update : 2021.09.04**
변경사항

- todoList github Project로 변경
- 대기환경 정보 업데이트
- readme 내용 업데이트

### 설치 및 실행

1. `npm install` or `yarn`
2. `npm run serve` or `yarn serve`

---

## 프로젝트 파일 구조

```
│   App.vue
│   main.ts
│   shims-vue.d.ts
│
├───assets
│   ├───font
│   │
│   └───img
│
├───components
│   │   index.ts
│   │
│   └───src
│       │   Footer.component.vue
│       │   Header.component.vue
│       │
│       ├───Atmosphere.component
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           AtmosphereEnv.component.vue
│       │           AtmosphereStatus.component.vue
│       │           types.ts
│       │
│       ├───CurrentWeather.component
│       │   │   index.ts
│       │   │
│       │   └───src
│       │       │   CurrentInfo.component.vue
│       │       │   types.ts
│       │       │   WeatherCoperationsSideBar.component.vue
│       │       │
│       │       └───CurrentInfo
│       │           │   index.ts
│       │           │
│       │           └───src
│       │                   MinMaxTemperature.component.vue
│       │                   NowTemperature.component.vue
│       │                   types.ts
│       │
│       ├───Geolocation.component
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           Location.component.vue
│       │           types.ts
│       │
│       ├───TimeSetWeather.component
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           TimeSetWeather.component.vue
│       │           types.ts
│       │
│       └───WeeklyWeather.component
│           │   index.ts
│           │
│           └───src
│                   dateChange.ts
│                   types.ts
│                   WeeklyWeather.component.vue
│
├───data
│   │   index.ts
│   │
│   └───src
│       │   DataProvider.vue
│       │   index.ts
│       │
│       └───koreaWeather.data
│           │   index.ts
│           │
│           └───src
│                   koreaWeather.ts
│
├───router
│   │   index.ts
│   │
│   └───src
│           Router.ts
│
├───service
│   │   index.ts
│   │
│   └───src
│       │   index.ts
│       │
│       ├───Atmosphere.service
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           AtmosphereEnv.service.vue
│       │           AtmosphereStatus.service.vue
│       │
│       ├───CurrentStatus.service
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           CurrentStatus.service.vue
│       │           Temperatures.service.vue
│       │           TitleLocation.service.vue
│       │
│       ├───TimeSetWeather.service
│       │   │   index.ts
│       │   │
│       │   └───src
│       │           TimeSetWeather.service.vue
│       │
│       └───WeeklyWeather.service
│           │   index.ts
│           │
│           └───src
│                   WeeklyWeather.service.vue
│
├───store
│   │   index.ts
│   │
│   └───src
│       │   geologication.ts
│       │
│       ├───actions
│       │   │   index.ts
│       │   │
│       │   └───src
│       │       │   index.ts
│       │       │
│       │       ├───example.action
│       │       │   │   index.ts
│       │       │   │
│       │       │   └───src
│       │       │           example.actions.ts
│       │       │           types.ts
│       │       │
│       │       ├───geologication.action
│       │       │   │   index.ts
│       │       │   │
│       │       │   └───src
│       │       │           geolocation.actions.ts
│       │       │           types.ts
│       │       │
│       │       └───koreaWeather.action
│       │           │   index.ts
│       │           │
│       │           └───src
│       │                   koreaWeather.actions.ts
│       │                   types.ts
│       │
│       ├───getters
│       │   │   index.ts
│       │   │
│       │   └───src
│       │       │   index.ts
│       │       │
│       │       ├───example.getters
│       │       │   │   index.ts
│       │       │   │
│       │       │   └───src
│       │       │           example.getters.ts
│       │       │
│       │       └───geolocation.getters
│       │           │   index.ts
│       │           │
│       │           └───src
│       │                   geolocation.getters.ts
│       │
│       ├───mutation
│       │   │   index.ts
│       │   │
│       │   └───src
│       │       │   index.ts
│       │       │
│       │       ├───example.mutation
│       │       │   │   index.ts
│       │       │   │
│       │       │   └───src
│       │       │           example.mutation.ts
│       │       │           types.ts
│       │       │
│       │       ├───geolocation.mutation
│       │       │   │   index.ts
│       │       │   │
│       │       │   └───src
│       │       │           geologication.mutation.ts
│       │       │           types.ts
│       │       │
│       │       └───koreaWeather.mutation
│       │           │   index.ts
│       │           │
│       │           └───src
│       │                   koreaWeather.mutation.ts
│       │                   types.ts
│       │
│       └───state
│           │   index.ts
│           │
│           └───src
│               │   index.ts
│               │
│               ├───example.state
│               │   │   index.ts
│               │   │
│               │   └───src
│               │           example.state.ts
│               │
│               ├───geologication.state
│               │   │   index.ts
│               │   │
│               │   └───src
│               │           geologication.state.ts
│               │
│               └───koreaWeather.state
│                   │   index.ts
│                   │
│                   └───src
│                           koreaWeather.state.ts
│
├───style
│       common.scss
│       font.scss
│       reset.scss
│
├───types
│   │   index.d.ts
│   │   index.ts
│   │
│   └───src
│           Geolocation.types.ts
│           Node.types.ts
│           VueModules.types.ts
│
└───views
        Main.vue
```

# React Native Integration
Esse repositório é um exemplo de como configurar o react-native em aplicativos nativos existentes.

# Configuração da máquina
Nessa etapa instalaremos o react-native cli global e configuraremos os emuladores ou um dispositivo real para rodarmos a aplicação.<br/>
Siga os passos do "React Native CLI Quickstart" no site do react-native para configurar a sua máquina - https://facebook.github.io/react-native/docs/getting-started.


# Rodar o projeto
- Instale as dependências do react-native rodando o comando abaixo na raíz do projeto:
```shell script
$ yarn install 
# ou via npm
$ npm install
```

- Inicie o metro bundler executando o comando abaixo:
```shell script
$ yarn start
```

## Android
- Execute o comando:
```shell script
$ react-native run-android
```

## IOS (wip)
- Execute o comando:
```shell script
$ react-native run-ios
```

# Gerando apk
Podemos gerar a apk pelo android studio, como se fossemos gerar uma apk para o nosso aplicativo nativo.
Só precisamos adicionar um passo antes que é gerar o `index.android.bundle` que referenciamos na criação do nosso `mReactInstanceManager` no `ReactNativeActivity`:
```shell script
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

# Gerando ipa (wip)

## iOS

eas build --platform ios --profile production --local

```json
{
  "build": {
    "production": {
      "ios": {
        "distribution": "app-store",
        "simulator": false,
        "enterpriseProvisioning": "universal", // optional
        "autoIncrement": true
      }
    }
  }
}
```

## iOS Notes ---

### Removed .expo files

rm -rf .expo
eas init

## Android ------

```sh
eas build --platform android --profile production --local
eas build --platform android --profile production
```

## clearing cache

eas build --platform android --profile production --local --clear-cache

## KeyStore -----

```sh
keytool -genkeypair -v \
 -keystore osakhi.jks \
 -keyalg RSA -keysize 2048 -validity 10000 \
 -alias osakhi
```

## Settimg Android SDK -----

```sh
echo 'export ANDROID_HOME=/Users/srikanthnandiraju/Library/Android/sdk' >> ~/.bash_profile
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

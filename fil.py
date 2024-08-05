file = open('build.gradle', 'w')
k = "dependencies {implementation 'com.squareup.okhttp3:okhttp:4.9.3'}"
file.write(k)
file.close()
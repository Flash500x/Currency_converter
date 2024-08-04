file = open('pom.xml', 'w')
k = "<dependency><groupId>javax.xml</groupId><artifactId>jaxp-api</artifactId><version>1.4.2</version></dependency>"
file.write(k)
file.close()
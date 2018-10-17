
#### Run it:
install complete app

	./mvnw clean install

run app on local system (app will be available under [http://localhost:8181](http://localhost:8181))
	
	./mvnw spring-boot:run
	
run app on local system with mocked data
    	
	./mvnw spring-boot:run -Pmocked
	
#### Run it in docker container

	./mvnw clean install -Pdocker
	
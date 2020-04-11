package dev.mongoose.driver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("dev.mongoose")
@EnableJpaRepositories("dev.mongoose.repositories")
@EntityScan("dev.mongoose.models")
public class PetAdoptionApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetAdoptionApplication.class, args);
	}

}

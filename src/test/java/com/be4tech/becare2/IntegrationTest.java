package com.be4tech.becare2;

import com.be4tech.becare2.BeCare2App;
import com.be4tech.becare2.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { BeCare2App.class, TestSecurityConfiguration.class })
public @interface IntegrationTest {
}

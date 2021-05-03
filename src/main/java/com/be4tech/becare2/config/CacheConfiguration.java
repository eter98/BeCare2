package com.be4tech.becare2.config;

import java.time.Duration;
import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;
import org.hibernate.cache.jcache.ConfigSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.*;
import tech.jhipster.config.JHipsterProperties;
import tech.jhipster.config.cache.PrefixedKeyGenerator;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private GitProperties gitProperties;
    private BuildProperties buildProperties;
    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration =
            Eh107Configuration.fromEhcacheCacheConfiguration(
                CacheConfigurationBuilder
                    .newCacheConfigurationBuilder(Object.class, Object.class, ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                    .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                    .build()
            );
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.be4tech.becare2.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.be4tech.becare2.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.be4tech.becare2.domain.User.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Authority.class.getName());
            createCache(cm, com.be4tech.becare2.domain.User.class.getName() + ".authorities");
            createCache(cm, com.be4tech.becare2.domain.Adherencia.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Agenda.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Alarma.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Caloria.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Condicion.class.getName());
            createCache(cm, com.be4tech.becare2.domain.CuestionarioEstado.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Dispositivo.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Encuesta.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Farmaceutica.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Fisiometria1.class.getName());
            createCache(cm, com.be4tech.becare2.domain.FrecuenciaCardiaca.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Ingesta.class.getName());
            createCache(cm, com.be4tech.becare2.domain.IPS.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Medicamento.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Notificacion.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Oximetria.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Paciente.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Pasos.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Peso.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Pregunta.class.getName());
            createCache(cm, com.be4tech.becare2.domain.PresionSanguinea.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Programa.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Sueno.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Temperatura.class.getName());
            createCache(cm, com.be4tech.becare2.domain.TokenDisp.class.getName());
            createCache(cm, com.be4tech.becare2.domain.TratamientoMedicamento.class.getName());
            createCache(cm, com.be4tech.becare2.domain.Tratamieto.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cache.clear();
        } else {
            cm.createCache(cacheName, jcacheConfiguration);
        }
    }

    @Autowired(required = false)
    public void setGitProperties(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @Autowired(required = false)
    public void setBuildProperties(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return new PrefixedKeyGenerator(this.gitProperties, this.buildProperties);
    }
}

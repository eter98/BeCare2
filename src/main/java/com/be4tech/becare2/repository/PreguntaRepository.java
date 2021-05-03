package com.be4tech.becare2.repository;

import com.be4tech.becare2.domain.Pregunta;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Pregunta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PreguntaRepository extends JpaRepository<Pregunta, Long>, JpaSpecificationExecutor<Pregunta> {}

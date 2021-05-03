package com.be4tech.becare2.repository;

import com.be4tech.becare2.domain.Medicamento;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Medicamento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MedicamentoRepository extends JpaRepository<Medicamento, Long>, JpaSpecificationExecutor<Medicamento> {}

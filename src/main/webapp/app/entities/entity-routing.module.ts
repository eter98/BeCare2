import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'adherencia',
        data: { pageTitle: 'beCare2App.adherencia.home.title' },
        loadChildren: () => import('./adherencia/adherencia.module').then(m => m.AdherenciaModule),
      },
      {
        path: 'agenda',
        data: { pageTitle: 'beCare2App.agenda.home.title' },
        loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule),
      },
      {
        path: 'alarma',
        data: { pageTitle: 'beCare2App.alarma.home.title' },
        loadChildren: () => import('./alarma/alarma.module').then(m => m.AlarmaModule),
      },
      {
        path: 'caloria',
        data: { pageTitle: 'beCare2App.caloria.home.title' },
        loadChildren: () => import('./caloria/caloria.module').then(m => m.CaloriaModule),
      },
      {
        path: 'condicion',
        data: { pageTitle: 'beCare2App.condicion.home.title' },
        loadChildren: () => import('./condicion/condicion.module').then(m => m.CondicionModule),
      },
      {
        path: 'cuestionario-estado',
        data: { pageTitle: 'beCare2App.cuestionarioEstado.home.title' },
        loadChildren: () => import('./cuestionario-estado/cuestionario-estado.module').then(m => m.CuestionarioEstadoModule),
      },
      {
        path: 'dispositivo',
        data: { pageTitle: 'beCare2App.dispositivo.home.title' },
        loadChildren: () => import('./dispositivo/dispositivo.module').then(m => m.DispositivoModule),
      },
      {
        path: 'encuesta',
        data: { pageTitle: 'beCare2App.encuesta.home.title' },
        loadChildren: () => import('./encuesta/encuesta.module').then(m => m.EncuestaModule),
      },
      {
        path: 'farmaceutica',
        data: { pageTitle: 'beCare2App.farmaceutica.home.title' },
        loadChildren: () => import('./farmaceutica/farmaceutica.module').then(m => m.FarmaceuticaModule),
      },
      {
        path: 'fisiometria-1',
        data: { pageTitle: 'beCare2App.fisiometria1.home.title' },
        loadChildren: () => import('./fisiometria-1/fisiometria-1.module').then(m => m.Fisiometria1Module),
      },
      {
        path: 'frecuencia-cardiaca',
        data: { pageTitle: 'beCare2App.frecuenciaCardiaca.home.title' },
        loadChildren: () => import('./frecuencia-cardiaca/frecuencia-cardiaca.module').then(m => m.FrecuenciaCardiacaModule),
      },
      {
        path: 'ingesta',
        data: { pageTitle: 'beCare2App.ingesta.home.title' },
        loadChildren: () => import('./ingesta/ingesta.module').then(m => m.IngestaModule),
      },
      {
        path: 'ips',
        data: { pageTitle: 'beCare2App.iPS.home.title' },
        loadChildren: () => import('./ips/ips.module').then(m => m.IPSModule),
      },
      {
        path: 'medicamento',
        data: { pageTitle: 'beCare2App.medicamento.home.title' },
        loadChildren: () => import('./medicamento/medicamento.module').then(m => m.MedicamentoModule),
      },
      {
        path: 'notificacion',
        data: { pageTitle: 'beCare2App.notificacion.home.title' },
        loadChildren: () => import('./notificacion/notificacion.module').then(m => m.NotificacionModule),
      },
      {
        path: 'oximetria',
        data: { pageTitle: 'beCare2App.oximetria.home.title' },
        loadChildren: () => import('./oximetria/oximetria.module').then(m => m.OximetriaModule),
      },
      {
        path: 'paciente',
        data: { pageTitle: 'beCare2App.paciente.home.title' },
        loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule),
      },
      {
        path: 'pasos',
        data: { pageTitle: 'beCare2App.pasos.home.title' },
        loadChildren: () => import('./pasos/pasos.module').then(m => m.PasosModule),
      },
      {
        path: 'peso',
        data: { pageTitle: 'beCare2App.peso.home.title' },
        loadChildren: () => import('./peso/peso.module').then(m => m.PesoModule),
      },
      {
        path: 'pregunta',
        data: { pageTitle: 'beCare2App.pregunta.home.title' },
        loadChildren: () => import('./pregunta/pregunta.module').then(m => m.PreguntaModule),
      },
      {
        path: 'presion-sanguinea',
        data: { pageTitle: 'beCare2App.presionSanguinea.home.title' },
        loadChildren: () => import('./presion-sanguinea/presion-sanguinea.module').then(m => m.PresionSanguineaModule),
      },
      {
        path: 'programa',
        data: { pageTitle: 'beCare2App.programa.home.title' },
        loadChildren: () => import('./programa/programa.module').then(m => m.ProgramaModule),
      },
      {
        path: 'sueno',
        data: { pageTitle: 'beCare2App.sueno.home.title' },
        loadChildren: () => import('./sueno/sueno.module').then(m => m.SuenoModule),
      },
      {
        path: 'temperatura',
        data: { pageTitle: 'beCare2App.temperatura.home.title' },
        loadChildren: () => import('./temperatura/temperatura.module').then(m => m.TemperaturaModule),
      },
      {
        path: 'token-disp',
        data: { pageTitle: 'beCare2App.tokenDisp.home.title' },
        loadChildren: () => import('./token-disp/token-disp.module').then(m => m.TokenDispModule),
      },
      {
        path: 'tratamiento-medicamento',
        data: { pageTitle: 'beCare2App.tratamientoMedicamento.home.title' },
        loadChildren: () => import('./tratamiento-medicamento/tratamiento-medicamento.module').then(m => m.TratamientoMedicamentoModule),
      },
      {
        path: 'tratamieto',
        data: { pageTitle: 'beCare2App.tratamieto.home.title' },
        loadChildren: () => import('./tratamieto/tratamieto.module').then(m => m.TratamietoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

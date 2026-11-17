export default function ConocenosPage() {
	return (
		<main className="min-h-screen bg-[#f7f8f2] text-[#20372c]">
			<section className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#dcebd8] via-[#f7f8f2] to-[#f7f8f2]"
				/>
				<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
					<div>
						<p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#64836b]">
							Conócenos
						</p>
						<h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
							Bienvenido a <span className="text-[#62876b]">Renuevo</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-8 text-[#53665a]">
							Nos alegra que estés aquí. Este es un espacio para descubrir quiénes
							somos, qué nos inspira y cómo trabajamos cada día para construir un
							futuro lleno de nuevas oportunidades.
						</p>
						<a
							href="#nuestra-esencia"
							className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315b43] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#244832] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315b43]"
						>
							Descubre nuestra esencia <span aria-hidden="true">→</span>
						</a>
					</div>

					<div className="relative mx-auto w-full max-w-md">
						<div className="aspect-[4/3] rounded-[2rem] bg-[#dce9d5] p-8 shadow-xl shadow-[#315b43]/10 sm:p-12">
							<div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/50 p-7 sm:p-9">
								<span aria-hidden="true" className="text-5xl text-[#64836b]">
									✳
								</span>
								<p className="text-2xl font-semibold leading-snug text-[#315b43] sm:text-3xl">
									Cada nuevo comienzo nace de una idea y crece en comunidad.
								</p>
								<span className="text-sm font-medium uppercase tracking-[0.16em] text-[#64836b]">
									Crecemos contigo
								</span>
							</div>
						</div>
						<div
							aria-hidden="true"
							className="absolute -bottom-5 -right-4 -z-10 h-24 w-24 rounded-full bg-[#b9d1b3]"
						/>
					</div>
				</div>
			</section>

			<section id="nuestra-esencia" className="px-6 pb-24">
				<div className="mx-auto max-w-3xl rounded-3xl border border-[#e1e9dd] bg-white/80 px-7 py-10 text-center shadow-sm sm:px-12 sm:py-14">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
						Un gusto tenerte aquí
					</h2>
					<p className="mx-auto mt-4 max-w-2xl leading-7 text-[#53665a]">
						Renuevo es una invitación a conocer nuestro camino y a formar parte
						de lo que estamos construyendo. Explora nuestra historia y descubre
						todo lo que podemos lograr juntos.
					</p>
				</div>
			</section>
		</main>
	);
}

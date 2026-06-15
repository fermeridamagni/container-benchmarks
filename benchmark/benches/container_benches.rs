use criterion::{criterion_group, criterion_main, Criterion, BenchmarkId};
use std::process::Command;
use std::time::Duration;

fn bench_startup(c: &mut Criterion) {
    let mut group = c.benchmark_group("startup_time");
    group.measurement_time(Duration::from_secs(15));
    
    let images = vec!["alpine", "ubuntu", "debian"];
    let engines = vec!["docker", "container"];
    
    for engine in engines {
        for image in &images {
            let bench_id = format!("{}_{}", engine, image);
            group.bench_with_input(BenchmarkId::new(bench_id, image), image, |b, &i| {
                b.iter(|| {
                    Command::new(engine)
                        .args(["run", "--rm", i, "echo", "booted"])
                        .output()
                        .expect("failed to execute process");
                });
            });
        }
    }
    group.finish();
}

fn criterion_benchmark(c: &mut Criterion) {
    bench_startup(c);
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);

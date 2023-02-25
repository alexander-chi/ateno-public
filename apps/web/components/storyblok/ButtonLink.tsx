import {useRouter} from "next/router";

export const ButtonLink = ({blok}) => {
  const router = useRouter()

  return (
    <div className={''}>

      <button className={'white-button button flex-shrink-1'} onClick={() => router.push(blok.destination)}>
        <p className={'mb-0'}>
          {blok.text}
        </p>

      </button>
    </div>

  )
}
